import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";
import { CheckBoxField } from "./CheckBoxField";
import { EmailField } from "./EmailField";
import { DateField } from "./DateField";
import { SelectField } from "./SelectField";
import { Field } from "./Field";
import { FieldLabel } from "./FieldLabel";
import { LocStorage } from "./LocStorage";

export class Form{
    
    ID: string = "form";
    fieldTab: Field[] 
    
    constructor(formdata: any){
        let tmp: Field[] = formdata.fieldTab
        this.ID = formdata.ID

        this.fieldTab = []
        tmp.forEach(element => {
         
            switch(element.FieldType)
            {
                case 'input': this.fieldTab.push(new InputField(new FieldLabel(element.Label.Label), element.Name, element.FieldType, element.Value))
                break
                case 'email': this.fieldTab.push(new EmailField(new FieldLabel(element.Label.Label), element.Name, element.FieldType, element.Value));
                break
                case 'select': this.fieldTab.push(new SelectField(new FieldLabel(element.Label.Label), element.Name, element.FieldType, element.options,element.Value));
                break
                case 'checkbox': this.fieldTab.push(new CheckBoxField(new FieldLabel(element.Label.Label), element.Name, element.FieldType, element.Value));
                break
                case 'textarea': this.fieldTab.push(new TextAreaField(new FieldLabel(element.Label.Label), element.Name, element.FieldType, element.Value));
                break
            }
 
        });
    }

    getValue(){
       
        for (let i = 0; i < this.fieldTab.length; i++) {
            this.fieldTab[i].Value = this.fieldTab[i].getValue()
        }

        return this
    }

    save(){
        //this.getValue();
        (new LocStorage).saveDocument(this.getValue());
        window.location.href = "index.html";
    }

    render(){
        const form = document.createElement("form")
        this.fieldTab.forEach(element => {
            form.appendChild(element.render())
        });   

        const button = document.createElement('input')
        button.type = 'button'
        button.value = 'Zapisz'
        button.onclick = function(form){ return function(){ form.save() }}(this)

        const button2 = document.createElement('button')
        button2.type = 'button'
        button2.textContent = 'Wstecz'
        button2.onclick = function(){ window.location.href = "index.html" }   

        form.appendChild(button)  
        form.appendChild(button2)  
        return form      
    }
    
}