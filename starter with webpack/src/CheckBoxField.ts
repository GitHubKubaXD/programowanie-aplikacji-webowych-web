import {Field} from "./Field";
import {FieldLabel} from "./FieldLabel"

export class CheckBoxField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="checkBox", value: string=""){
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
        const checkboxField = document.createElement("input");        
        if(this.FieldType){checkboxField.setAttribute("type", this.FieldType)}
        if(this.Name){checkboxField.setAttribute("name", this.Name)}
        if(this.Value){checkboxField.setAttribute("value", this.Value)}             
        checkboxField.innerHTML += this.Value;
        div.appendChild(checkboxField) 

        return div
    }
}

