import {Field} from "./Field";
import { FieldLabel } from "./FieldLabel";

export class DateField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    ID: string;
    
    constructor(label:FieldLabel, name: string, fieldType: string="date",value: string){
        this.Label = label;
        this.Name = name;
        this.FieldType = fieldType;
        this.Value = value;
        this.ID = "DateField";
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
        const dateField = document.createElement("input");        
        dateField.type = "date"; 
        dateField.name = this.Name;             
        dateField.id = this.ID;
        dateField.value = this.Value;
        div.appendChild(dateField) 
        return div
    }
}