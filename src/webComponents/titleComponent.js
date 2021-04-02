import BaseComponent from "./baseWebComponent";

export default class TitleWebComponent extends BaseComponent {

	//Contructor to attach shadow DOM to the title element
	constructor() {
		super({
			props: []
		});

		this.shadowEl.innerHTML = `
		<style>
			:host {
				display: block;
			}
			:host[hidden] {
				display: none;
			}
			
		</style>
		<div class="title-field" >
		</div>
        `;
        this.titleEl = this.shadowRoot.querySelector(".title-field");
    }
    
    // Define connected callback
	connectedCallback() {
        if (this.titleEl) {
            let placeholder = this.getAttribute("placeholder");
			!!placeholder && this.titleEl.insertAdjacentHTML(
				"afterbegin",
				`<h3>${this.getAttribute("placeholder")}</h3>`
            );
        }
	}
}
