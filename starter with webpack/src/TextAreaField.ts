import { FieldLabel } from "./FieldLabel";
import {Field} from "./Field";

export class TextAreaField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    ID: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="textArea",value: string=""){
        this.Label = label;
        this.Name = name;
        this.FieldType = fieldType;
        this.Value = value;
        this.ID = name;
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
        const textAreaField = document.createElement("textarea");        
        textAreaField.name = this.Name;             
        textAreaField.id = this.ID;
        textAreaField.value = this.Value;
        div.appendChild(textAreaField) 
        return div
    }
}