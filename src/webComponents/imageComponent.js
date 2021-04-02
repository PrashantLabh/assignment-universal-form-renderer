import BaseComponent from "./baseWebComponent";

export default class TitleWebComponent extends BaseComponent {

	//Contructor to attach shadow DOM to the image element
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
            
            .image-field > img {
                width: 100%;
            }
			
		</style>
		<div class="image-field" >
		</div>
        `;
        this.imageEl = this.shadowRoot.querySelector(".image-field");
    }
    
    // Define connected callback
	connectedCallback() {
        if (this.imageEl) {
			const imageSrc = this.getAttribute("src");
			!!imageSrc && this.imageEl.insertAdjacentHTML(
				"afterbegin",
				`<img src="${this.getAttribute("src")}" />`
            );
        }
	}
}
