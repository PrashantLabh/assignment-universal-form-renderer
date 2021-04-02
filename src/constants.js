
// This is the config which is used to generate the form
export const FORM_CONFIG = [
    {
		id: "title",
		type: "TITLE",
        text: "Company Form"
    },
    {
		id: "image-banner",
		type: "IMAGE",
        src: "https://blog.ipleaders.in/wp-content/uploads/2017/05/iPleaders-12.jpg"
	},
	{
		id: "firstName",
		type: "TEXT",
        text: "Company Name",
        tooltip: "Please enter your company name",
        validations: [
			{
				type: "LENGTH",
				max: 20,
				min: 3
			},
			{
				type: "REQUIRED"
			}
		]
	},
	{
		id: "gstin",
		type: "TEXT",
        text: "GSTIN Number",
        tooltip: "Please enter your company GSTIN",
        validations: [
			{
				type: "LENGTH",
				max: 15,
				min: 15
			},
			{
				type: "REQUIRED"
			}
		]
	},
	{
		id: "numberofemployee",
		type: "NUMBER",
        text: `Number of Employee`,
        tooltip: "Please enter your company number of employee",
		validations: [
			{
				type: "REQUIRED"
			},
			{
				type: "PATTERN",
				expression: "^\\d+$"
			},
			{
				type: "RANGE",
				min: 1,
				max: 10000
			}
		]
    },
    {
		id: "address",
		type: "TEXTAREA",
        text: "Address",
        tooltip: "Please enter your company Address",
        validations: [
			{
				type: "LENGTH",
				max: 20,
				min: 3
			},
			{
				type: "REQUIRED"
			}
		]
	},
	{
		id: "city",
		type: "DROPDOWN",
		text: "City",
		dataSource: ["Delhi", "Mumbai", "Bangalore"]
	},
	{
		id: "state",
		type: "DROPDOWN",
		text: "State",
		dataSource: ["Karnataka", "Maharashtra", "Delhi"]
    },
    {
        id: "form-submit",
        type: "SUBMIT",
        api: "http://localhost:3000/api/postForm",
        method: "POST"
    }
];

// This is the component Mapping  which is used to define the type of custom elements supported by the Universal form renderer
export const COMPONENTS_MAPPING = {
    TITLE: "form-title",
    IMAGE: "form-image",
	TEXT: "form-input",
	DROPDOWN: "form-dropdown",
    NUMBER: "form-number-input",
    TEXTAREA: "form-textarea",
    SUBMIT: "form-submit"
};
