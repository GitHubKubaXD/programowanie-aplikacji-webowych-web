import { FieldLabel } from "./FieldLabel";

import {Field} from "./Field";

export class SelectField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    ID: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="select", options: string[], value: string=""){
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
        var option1 = document.createElement("option"); 
        option1.text = "Informatyka";
        selectField.appendChild(option1);
        var option2 = document.createElement("option"); 
        option2.text = "ELO";
        selectField.appendChild(option2);
        var option3 = document.createElement("option"); 
        option3.text = "Bożena Wiśniewska";
        selectField.appendChild(option3);
        selectField.name = this.Name;             
        selectField.id = this.ID;
        selectField.value = this.Value;
        div.appendChild(selectField) 
        return div
    }
}