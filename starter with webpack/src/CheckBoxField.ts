import {Field} from "./Field";
import {FieldLabel} from "./FieldLabel"

export class CheckBoxField implements Field{
    Label: FieldLabel;
    Name: string;
    FieldType: string;
    Value: string;
    ID: string;
    
    constructor(label:FieldLabel, name: string= "", fieldType: string="checkBox", value: string=""){
        this.Label = label;
        this.Name = name;
        this.FieldType = fieldType;
        this.Value = value;
        this.ID = name
    }
    

    getLabel():string{

        return this.Label.Label
    }

    getValue(): string {
        if ((<HTMLInputElement>document.getElementById(this.ID)).checked) {
            return '1'
        } else
        return '0'
    }

    render(): HTMLElement{
        const div = document.createElement("div");
        const label = this.Label.render();
        div.appendChild(label);
        const checkboxField = document.createElement("input");        
        checkboxField.type = "checkbox"; 
        checkboxField.name = this.Name;             
        checkboxField.id = this.ID;
        checkboxField.checked = this.Value == '1';
        div.appendChild(checkboxField) 

        return div
    }
}

