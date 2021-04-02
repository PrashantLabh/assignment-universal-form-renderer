import InputWebComponent from "./inputWebComponent";

export default class NumberWebComponent extends InputWebComponent {
	constructor() {
		super({
			type: "number"
		});
	}
}
