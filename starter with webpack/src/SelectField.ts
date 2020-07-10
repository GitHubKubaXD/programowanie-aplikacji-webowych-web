import { FieldLabel } from "./FieldLabel";

import {Field} from "./Field";

export class SelectField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    ID: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="select", value: string=""){
        this.Label = label;
        this.Name = name;
        this.FieldType = fieldType;
        this.Value = value;
        this.ID = "SelectField";
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
        const selectField = document.createElement("select");  
        //selectField.setAttribute("select");
        document.body.appendChild(selectField);
        var option = document.createElement("option"); 
        option.text = "Informatyka";
        selectField.appendChild(option);
        selectField.name = this.Name;             
        selectField.id = this.ID;
        selectField.value = this.Value;
        div.appendChild(selectField) 
        return div
    }
}