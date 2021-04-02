import BaseComponent from "./baseWebComponent";
import { createNode } from "../helpers/dom";
import { shallowCompare, isNonEmptyObject } from "../helpers/object";

export default class SubmitElement extends BaseComponent {
    
    static get observedAttributes() {
		return ["validations"];
    }
    
    //Contructor to attach shadow DOM to the image element
	constructor() {
		super({
			props: SubmitElement.observedAttributes
		});

		this.shadowEl.innerHTML = `
		<style>
			:host {
				display: block;
			}
			:host[hidden] {
				display: none;
            }
            .submit-field{
                margin-top:10px;
            }
            input {
				background-color: transparent;
				border: 2px solid #ccc;
				border-radius: 3px;
				outline: none;
				height: 40px;
				width: 200px;
				padding: 5px;
				font-size: 14px;
			}
			input.error {
				border-color: red;
			}
			ul.errors-list {
				list-style: none;
				font-size: 12px;
				color: red;
				padding-left: 0;
            }

            ul.success-message {
                list-style: none;
				font-size: 20px;
				color: green;
				padding-left: 0;
            }
            [data-tip] {
                position:relative;
            
            }
            [data-tip]:before {
                content:'';
                display:none;
                content:'';
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-bottom: 5px solid #1a1a1a;	
                position:absolute;
                top:30px;
                left:135px;
                z-index:8;
                font-size:0;
                line-height:0;
                width:0;
                height:0;
            }
            [data-tip]:after {
                display:none;
                content:attr(data-tip);
                position:absolute;
                top:35px;
                left:100px;
                padding:5px 8px;
                background:#1a1a1a;
                color:#fff;
                z-index:9;
                font-size: 0.75em;
                height:18px;
                line-height:18px;
                -webkit-border-radius: 3px;
                -moz-border-radius: 3px;
                border-radius: 3px;
                white-space:nowrap;
                word-wrap:normal;
            }
            [data-tip]:hover:before,
            [data-tip]:hover:after {
                display:block;
            }
			
		</style>
        <div class="submit-field" >
            <input type="button" value="Submit" />
            <ul class="errors-list">
            </ul>
            <ul class="success-message"></ul>
		</div>
        `;
        this.submitBtn = this.shadowRoot.querySelector(".submit-field");
        this.errorEl = this.shadowRoot.querySelector(".error-list");
        this.successEl = this.shadowRoot.querySelector(".success-message");
    }

    connectedCallback() {
		super.connectedCallback();
	}



    attributeChangedCallback(attrName, oldValue, newValue) {
		const jsonParsedOldVal = this.getJSONParsedValue(oldValue);
        const jsonParsedNewVal = this.getJSONParsedValue(newValue);
        const messageUl = this.shadowRoot.querySelector(".submit-field");
		if (
			attrName === "validations" &&
			!shallowCompare(jsonParsedOldVal, jsonParsedNewVal)
		) {
			if (messageUl && jsonParsedNewVal && jsonParsedNewVal.FormError) {
				messageUl.classList.add("error");
                this.renderErrors(jsonParsedNewVal.FormError);
                this.renderSuccess(null);
			} else if(messageUl && jsonParsedNewVal && jsonParsedNewVal.FormSuccess){
                messageUl.classList.add("success");
                this.renderSuccess(jsonParsedNewVal.FormSuccess);
                this.renderErrors(null);
            } else {
                this.renderErrors(null);
                this.renderSuccess(null);
            }
		}
    }

    setAttribute(name, value) {
		super.setAttribute(name, value);
		this.submitBtn && this.submitBtn.setAttribute(name, value);
	}
    

    renderErrors(error) {
		const errorsUl = this.shadowRoot.querySelector(".errors-list");
		if (errorsUl) {
			errorsUl.innerHTML = "";
			if (!error) {
				return;
			}
            const liFragment = document.createDocumentFragment();
            liFragment.appendChild(createNode("li", { content: error }));
			errorsUl.appendChild(liFragment);
		}
    }

    renderSuccess(msg) {
		const successUl = this.shadowRoot.querySelector(".success-message");
		if (successUl) {
			successUl.innerHTML = "";
			if (!msg) {
				return;
			}
            const liFragment = document.createDocumentFragment();
            liFragment.appendChild(createNode("li", { content: msg }));
			successUl.appendChild(liFragment);
		}
    }

}
