import { FieldLabel } from "./FieldLabel";

import {Field} from "./Field";

export class TextAreaField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="textArea",value: string=""){
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
        const textAreaField = document.createElement("input");        
        if(this.FieldType){textAreaField.setAttribute("type", this.FieldType)}
        if(this.Name){textAreaField.setAttribute("name", this.Name)}
        if(this.Value){textAreaField.setAttribute("value", this.Value)}              
        textAreaField.innerHTML += this.Value;
        div.appendChild(textAreaField) 
        return div
    }
}