import { FieldLabel } from "./FieldLabel";

import {Field} from "./Field";

export class SelectField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="select", value: string=""){
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
        const selectField = document.createElement("input");        
        if(this.FieldType){selectField.setAttribute("type", this.FieldType)}
        if(this.Name){selectField.setAttribute("name", this.Name)}
        if(this.Value){selectField.setAttribute("value", this.Value)}              
        selectField.innerHTML += this.Value;
        div.appendChild(selectField) 
        return div
    }
}