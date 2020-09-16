import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";
import { CheckBoxField } from "./CheckBoxField";
import { EmailField } from "./EmailField";
import { DateField } from "./DateField";
import { SelectField } from "./SelectField";

export class Form{
    Elements: any[];
    ID: string = "form";
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
       
        const answers = [];
        
        for (let i = 0; i < this.Elements.length; i++) {
            const childrenElement = this.Elements[i].children[1];
            if (childrenElement.type == "checkbox") {
                console.log(childrenElement);
                answers[i] = (<HTMLInputElement>document.getElementById(childrenElement.id)).checked;
            } else {
                console.log(childrenElement);
                answers[i] = (<HTMLInputElement>document.getElementById(childrenElement.id)).value;
            }
        }
        return answers;
    }

    render(){
        
        const form = document.createElement("form")
        const button = document.createElement("button")
        this.fieldTab.forEach(element => {
            form.appendChild(element.render())
        });   
       //button.setAttribute("type", "submit")
        //button.onclick = function(){form.getValue()}
        //form.appendChild(button)  
        return form      
    }
    
}