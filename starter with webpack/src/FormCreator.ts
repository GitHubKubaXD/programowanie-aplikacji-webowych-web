import { Field } from "./Field";
import { SelectField } from "./SelectField";
import { InputField } from "./InputField";
import { FieldLabel } from "./FieldLabel";
import { CheckBoxField } from "./CheckBoxField";
import { TextAreaField } from "./TextAreaField";
import { Form } from "./Form";
import { LocStorage } from "./LocStorage";

export class FormCreator{
    private form: HTMLFormElement;
    private div: HTMLDivElement;
    private content: HTMLDivElement;
    private fields: Field[] = [];
    private button: HTMLButtonElement;
    private formFields: Field[];
    constructor()  {
        this.formFields = [];
        this.form = document.createElement("form")
        this.div = document.createElement("div")
        this.content = document.createElement("div")

        this.fields.push(new SelectField(new FieldLabel('Rodzaj pola'), "type1", "select", ["Pole tekstowe", "Textarea", "Checkbox"], "Pole tekstowe"));
        this.fields.push(new InputField(new FieldLabel('Nazwa'), "name1", "input", ""))
        this.fields.push(new InputField(new FieldLabel('Etykieta'), "label1", "input", ""))
        this.fields.push(new InputField(new FieldLabel('Wartość'), "value1", "input", ""))

        for (let field of this.fields)  {
            this.form.appendChild(field.render());
        }      

        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = 'Dodaj';
        this.button.onclick = function(self){ return function(){ 

          
            let type = self.fields[0].getValue();
            let name = self.fields[1].getValue();
            let label = self.fields[2].getValue();
            let value = self.fields[3].getValue();  
           

            switch(type) {
         
                case "Pole tekstowe": self.formFields.push(new InputField(new FieldLabel(label), name, "input" , value));
                 break;
                case "Checkbox": self.formFields.push(new CheckBoxField(new FieldLabel(label), name, "checkbox", value));
                 break;
                case "Textarea": self.formFields.push(new TextAreaField(new FieldLabel(label), name, "textarea", value));
                 break;
                case "Select": 
                   self.formFields.push(new SelectField(new FieldLabel(label), name, "select", self.fields[3].getValue().split(","), value));
                break;
               //...  
            }
            self.div.innerHTML = "";
            self.div.appendChild(new Form({ID: '', fieldTab: self.formFields}).render());
        }}(this);
        this.form.appendChild(this.button);
        
        let button1 = document.createElement('button');
        button1.type = 'button';
        button1.textContent = 'Zapisz';
        button1.onclick = function(self){ return function(){ self.saveForm(); }}(this);
        this.form.appendChild(button1);

        let button2 = document.createElement('button');
        button2.type = 'button';
        button2.textContent = 'Wstecz';
        button2.onclick = function(){ window.location.href = "index.html" };   
        this.form.appendChild(button2);

        this.content.appendChild(this.div);
        this.content.appendChild(document.createElement('br'));
        this.content.appendChild(this.form);
    }

    public newForm(): any {
        return this.content;
    }

    public saveForm() {
        (new LocStorage).saveForm(new Form({ID: '', fieldTab: this.formFields}));
        window.location.href = "index.html";
    }

}