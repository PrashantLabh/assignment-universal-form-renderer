import BaseComponent from "./baseWebComponent";
import { createNode } from "../helpers/dom";
import { shallowCompare, isNonEmptyObject } from "../helpers/object";

export default class TextAreaComponent extends BaseComponent {

	// Define attributes whose changes need to be noticed
	static get observedAttributes() {
		return ["value", "validations"];
	}

	//Contructor to attach shadow DOM to the textarea element
	constructor() {
		super({
			props: ["value", "validations"]
		});

		this.shadowEl.innerHTML = `
		<style>
			:host {
				display: block;
			}
			:host[hidden] {
				display: none;
			}
			.textarea-field {
				
			}
			label > p {
				font-size: 12px;
				font-weight: bold;
			}
			textarea {
				background-color: transparent;
				border: 2px solid #ccc;
				border-radius: 3px;
				outline: none;
				height: 100px;
				width: 100%;
				padding: 15px 10px;
				font-size: 14px;
				box-shadow: none;
				box-sizing: border-box;
				transition: box-shadow 0.3s, border-color 0.4s;
			}
			.input-field .error {
				border-color: red
			}
			ul.errors-list {
				list-style: none;
				font-size: 12px;
				color: red;
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
		<div class="input-field" >
			<textarea> </textarea >
			<ul class="errors-list">
			</ul>
		</div>
		`;
		this.textAreaEl = this.shadowRoot.querySelector("textarea");
	}

	// Define connected callback
	connectedCallback() {
		super.connectedCallback();
		this.textAreaEl.value = this.value;
		this.textAreaEventListener = e => {
			this.value = e.target.value;
		};

		// Add on change event listener
		this.textAreaEl.addEventListener("input", this.textAreaEventListener);
	}

	// Define Attribute Change Callback
	attributeChangedCallback(attrName, oldValue, newValue) {
		const jsonParsedOldVal = this.getJSONParsedValue(oldValue);
		const jsonParsedNewVal = this.getJSONParsedValue(newValue);
		if (attrName === "value" && oldValue !== newValue) {
			this.value = newValue;
			if (this.textAreaEl) {
				this.textAreaEl.value = newValue;
			}
		}
		if (
			attrName === "validations" &&
			!shallowCompare(jsonParsedOldVal, jsonParsedNewVal)
		) {
			if (this.textAreaEl) {
				if (isNonEmptyObject(jsonParsedNewVal)) {
					this.textAreaEl.classList.add("error");
					this.renderErrors(jsonParsedNewVal);
				} else {
					this.textAreaEl.classList.remove("error");
					this.renderErrors();
				}
			}
		}
	}

	// Render Validation Errors in the Shadow Root
	renderErrors(errorsMap = null) {
		const errorsUl = this.shadowRoot.querySelector(".errors-list");
		if (errorsUl) {
			errorsUl.innerHTML = "";
			if (!errorsMap) {
				return;
			}
			const liFragment = document.createDocumentFragment();
			for (const key of Object.keys(errorsMap)) {
				liFragment.appendChild(createNode("li", { content: errorsMap[key] }));
			}
			errorsUl.appendChild(liFragment);
		}
	}


	setAttribute(name, value) {
		super.setAttribute(name, value);
		this.textAreaEl && this.textAreaEl.setAttribute(name, value);
	}

	// Define Disconnect Callback
	disconnectedCallback() {
		this.textAreaEl.removeEventListener("change", this.textAreaEventListener);
	}
}
