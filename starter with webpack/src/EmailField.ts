import {Field} from "./Field";
import { FieldLabel } from "./FieldLabel";

export class EmailField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    ID: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="email", value: string=""){
        this.Label = label;
        this.Name = name;
        this.FieldType = fieldType;
        this.Value = value;
        this.ID = "EmailField";
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
        const emailField = document.createElement("input");        
        emailField.type = "email"; 
        emailField.name = this.Name;             
        emailField.id = this.ID;
        emailField.value = this.Value;
        div.appendChild(emailField) 
        return div
    }
}
