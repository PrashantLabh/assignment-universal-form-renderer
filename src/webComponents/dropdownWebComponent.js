import BaseComponent from "./baseWebComponent";
import { shallowCompare } from "../helpers/object";

export default class DropdownWebComponent extends BaseComponent {
    
    // Define attributes whose changes need to be noticed
    static get observedAttributes() {
		return ["value", "datasource"];
	}

    //Contructor to attach shadow DOM to the select element
	constructor() {
		super({
			props: ["datasource", "value"]
		});
		this.shadowEl.innerHTML = `
		<style>
			.input-field {
				margin-top: var(--input-field-margin-top);
				margin-bottom: var(--input-field-margin-bottom);
			}
			label > p {
				font-size: 12px;
				font-weight: bold;
			}
			select {
				background: transparent;
				width: 100%;
				padding: 10px 15px;
				border: 1px solid #ccc;
				border-radius: 2px;
                height: 40px;
                font-size: 14px;
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
		<div class="input-field">
			<select>
			</select>
		</div>
			`;

		this.selectEl = this.shadowEl.querySelector("select");
    }
    
    // Define connected callback
	connectedCallback() {
		super.connectedCallback();
		this.changeEventListener = e => {
			this.value = e.target.value;
		};
		this.selectEl.addEventListener("change", this.changeEventListener);
	}

    // Define Attribute Change Callback
	attributeChangedCallback(attrName, oldValue, newValue) {
		const val = this.getJSONParsedValue(newValue);
		const oldVal = this.getJSONParsedValue(oldValue);
		if (shallowCompare(oldVal, val)) return;
		switch (attrName) {
			case "datasource":
				{
					this.selectEl.innerHTML = val.map(
						optionValue =>
							`<option value="${optionValue}">${optionValue}</option>`
					);
					this.selectEl.value = this.value;
				}
				break;
			case "value":
				this.selectEl.value = val;
		}
	}

    // Define Disconnect Callback
	disconnectedCallback() {
		this.selectEl.removeEventListener("change", this.changeEventListener);
	}
}
