import {Field} from "./Field";
import { FieldLabel } from "./FieldLabel";

export class DateField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="date", value: string=""){
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
        const dateField = document.createElement("input");        
        if(this.FieldType){dateField.setAttribute("type", this.FieldType)}
        if(this.Name){dateField.setAttribute("name", this.Name)}
        if(this.Value){dateField.setAttribute("value", this.Value)}              
        dateField.innerHTML += this.Value;
        div.appendChild(dateField) 
        return div
    }
}