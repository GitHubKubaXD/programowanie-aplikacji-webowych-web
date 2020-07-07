import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";
import { CheckBoxField } from "./CheckBoxField";
import { EmailField } from "./EmailField";
import { DateField } from "./DateField";
import { SelectField } from "./SelectField";

export class Form{
    
    values: FormData;
    fieldTab: [
        InputField,
        TextAreaField,
        CheckBoxField,
        EmailField,
        DateField,
        SelectField,
    ]
    
    constructor(InputField: InputField, TextAreaField: TextAreaField, CheckBoxField: CheckBoxField,
         EmailField: EmailField, DateField: DateField, SelectField: SelectField){
        this.fieldTab = [
            InputField,
            TextAreaField,
            CheckBoxField,
            EmailField,
            DateField,
            SelectField
        ];
    }

    getValue(){
        this.values = new FormData(document.querySelector("form"))
        console.log(this.values)
    }

    render(){
        
        const form = document.createElement("form")
        const button = document.createElement("button")
        this.fieldTab.forEach(element => {
            form.appendChild(element.render())
        });   
        button.setAttribute("type", "submit")
        button.onclick = function(){form.getValue()}
        form.appendChild(button)  
        return form      
    }
    
}