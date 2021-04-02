import "./webComponents";
import validator from "./validator";
import { COMPONENTS_MAPPING } from "./constants";
import { createNode } from "./helpers/dom";

export default class Generator {

    // Define Contructor for Generator
    constructor(
        formConfig,
        formContainer,
        formValues,
        onChangeCallback,
        formReferenceId
    ) {
        this.formElementsMap = {};
        this.formValidations = {};
        this.formConfig = {};
        this.formReferenceId = formReferenceId;
        // Update formValues to a Proxy
        const formValuesProxied = new Proxy(formValues, {
            set(obj, prop, value) {
                obj[prop] = value;
                onChangeCallback();
                return true;
            }
        });

        // Create Component Method Which takes the form config JSON and iterate through each config to create component out of it. This also validates the input JSON
        this.createFormComponents(formConfig, formContainer, formValuesProxied);
    }


    validateComponent(component, formValues) {
        if (component.validations) {
            const errors = validator(
                component.validations,
                component.id,
                formValues
            );
            this.formValidations[component.id] = errors;
            this.formElementsMap[component.id].validations = errors;
        }
    }
    // Render Component Takes form Config and default form values as input, append on change event to validate the element with the validation provided and finally create Node out of it.
    renderComp(component, formValues) {
        const elementName = COMPONENTS_MAPPING[component.type];



        // Add on click event listener on change of input fields
        const events = component.type != "SUBMIT" ? {
            change: e => {
                
                formValues[component.id] = e.detail;
                this.validateComponent(component, formValues);

            }
        } : {
                // Add on click event listener on change of submit button
                click: e => {

                    // validate the forms and display error
                    for (const component of this.formConfig) {
                        this.validateComponent(component, formValues)
                    }


                    //is form valid to be submitted 
                    const isValid = Object.keys(this.formValidations).reduce((prev, curr) => {
                        prev = prev && Object.keys(this.formValidations[curr]).length == 0;
                        return prev;
                    }, true);


                    // show error if it is invalid form
                    this.formValidations[component.id] = {};
                    this.formElementsMap[component.id].validations = !isValid ? { 'FormError': "Please check the above Errors" } : null;

                    let formData = {
                        formValues: { ...formValues },
                        formId: this.formReferenceId
                    }


                    if (isValid) {
                        fetch(component.api, {
                            method: component.method,
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(formData)
                        }).then(res => res.json()).then((res) => {
                            if (res && res.success) {
                                this.formElementsMap[component.id].validations = { 'FormSuccess': res.message };
                            } else {
                                this.formElementsMap[component.id].validations = { 'FormError': "There has been a problem with your saving form operation:" + (res && res.message) };
                            }
                        }).catch(err => {
                            console.log(err);
                            this.formElementsMap[component.id].validations = { 'FormError': "There has been a problem with your saving form operation:" + err };
                        })

                    }
                }
            };


        // Create Node based on form Config
        const node = createNode(elementName, {
            props: {
                value: formValues[component.id] || "",
                datasource: component.dataSource || [],
                validations: this.formValidations[component.id] || {}
            },
            attrs: {
                placeholder: component.text || "",
                name: component.id,
                labelText: component.text,
                tooltip: component.tooltip || "",
                ...(component.src ? { src: component.src } : {}),
                ...component.attrs
            },
            events,
            children: (component.children || []).map(childConfig =>
                renderComp(childConfig, formValues)
            )
        });

        this.formElementsMap[component.id] = node;
        return node;
    }

    // Create Component Method Which takes the form config JSON and iterate through each config to create component out of it. This also validates the input JSON
    createFormComponents(formConfig, containerEl, formValues) {
        containerEl.innerHTML = "";
        this.formConfig = formConfig
        for (const component of formConfig) {
            const formElement = this.renderComp(component, formValues);
            !!formElement ? containerEl.appendChild(formElement) : void 0;
        }
    }
}
