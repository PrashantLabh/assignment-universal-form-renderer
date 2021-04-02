import Generator, { createComponents } from "./formGenerator";
import { FORM_CONFIG } from "./constants";

const formGenerator = document.getElementById("formGenerator");

const generatedValues = document.querySelector("#generatedValues #valueContent");

const defaultValues = {
};

const renderFromGeneratedValues = () => {
	generatedValues.innerText = JSON.stringify(defaultValues, null, 4);
};



renderFromGeneratedValues();

let generateForm = new Generator(
	window.JSON_FORM_CONFIG || FORM_CONFIG,
	formGenerator,
	defaultValues,
    renderFromGeneratedValues,
    window.formReferenceId || "test-form"
);
