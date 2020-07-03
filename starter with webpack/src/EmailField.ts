import {Field} from "./Field";
import { FieldLabel } from "./FieldLabel";

export class EmailField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="email", value: string=""){
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
        const emailField = document.createElement("input");        
        if(this.FieldType){emailField.setAttribute("type", this.FieldType)}
        if(this.Name){emailField.setAttribute("name", this.Name)}
        if(this.Value){emailField.setAttribute("value", this.Value)}              
        emailField.innerHTML += this.Value;
        div.appendChild(emailField) 
        return div
    }
}
