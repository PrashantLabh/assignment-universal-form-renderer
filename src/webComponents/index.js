import TitleWebComponent from "./titleComponent";
import ImageWebComponent from "./imageComponent";
import InputWebComponent from "./inputWebComponent";
import NumberWebComponent from "./numberWebComponent";
import DropdownWebComponent from "./dropdownWebComponent";
import TextAreaComponent from "./textAreaWebComponent";
import SubmitBtnComponent from './submitWebComponent';


export const elementsConfig = {
    "form-title": TitleWebComponent,
    "form-image": ImageWebComponent,
	"form-input": InputWebComponent,
	"form-number-input": NumberWebComponent,
    "form-dropdown": DropdownWebComponent,
    "form-textarea": TextAreaComponent,
    "form-submit": SubmitBtnComponent
};

for (const [key, val] of Object.entries(elementsConfig)) {
	customElements.define(key, val);
}
