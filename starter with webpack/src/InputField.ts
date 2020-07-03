import {Field} from "./Field";
import { FieldLabel } from "./FieldLabel";

export class InputField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;

    constructor(label:FieldLabel, name: string= "", fieldType: string="input", value: string=""){
        this.Label = label;
        this.Name = name;
        this.FieldType = fieldType;
        this.Value = value;
    }
    

    getLabel():string{
        return this.Label.Label
    }
    render(): HTMLElement{
        const div = document.createElement("div");
        const label = this.Label.render()
        div.appendChild(label)
        const inputField = document.createElement("input");        
        if(this.FieldType){inputField.setAttribute("type", this.FieldType)}
        if(this.Name){inputField.setAttribute("name", this.Name)}
        if(this.Value){inputField.setAttribute("value", this.Value)}              
        inputField.innerHTML += this.Value;
        div.appendChild(inputField) 
        return div
    }
}