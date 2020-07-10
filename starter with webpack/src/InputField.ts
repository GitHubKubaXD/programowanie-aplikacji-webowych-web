import {Field} from "./Field";
import { FieldLabel } from "./FieldLabel";

export class InputField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    ID: string;

    constructor(label:FieldLabel, name: string= "", fieldType: string="input", value: string=""){
        this.Label = label;
        this.Name = name;
        this.FieldType = fieldType;
        this.Value = value;
        this.ID = "InputField";
    }
    

    getLabel():string{
        return this.Label.Label
    }

    getValue(): string {
        return (<HTMLInputElement>document.getElementById(this.ID)).value;
    }

    render(): HTMLElement{
        const div = document.createElement("div");
        const label = this.Label.render()
        div.appendChild(label)
        const inputField = document.createElement("input");        
        inputField.type = "input"; 
        inputField.name = this.Name;             
        inputField.id = this.ID;
        inputField.value = this.Value;
        div.appendChild(inputField) 
        return div
    }
}