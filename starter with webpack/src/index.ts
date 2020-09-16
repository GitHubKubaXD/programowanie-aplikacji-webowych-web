import './main.scss';
import { App } from './app';
import {Field} from "./Field";
import {FieldLabel} from "./FieldLabel"
import {CheckBoxField} from "./CheckBoxField"
import {DateField} from "./DateField"
import { InputField } from './InputField';
import { EmailField } from './EmailField';
import { SelectField } from './SelectField';
import { TextAreaField } from './TextAreaField';
import { Form } from './Form';


const hello = "yep, it's workin ;laskjf lsdkjf l;kdsjg l;kdsjgklg. still sick";
document.body.innerHTML = hello;
const app = new App();
// pola -> form -> zapis -> odczyt
//  O   input
// text
// cb

document.addEventListener('DOMContentLoaded', (event) =>{
    var form = new Form(new InputField(new FieldLabel("Imię: "), "input", "input"),
    new InputField(new FieldLabel("Nazwisko: "), "input", "input", ""),
    new EmailField(new FieldLabel("Email: "), "email", "email"),
    new SelectField(new FieldLabel("Wybierz kierunek studiów: "), "select", "select"),        
       new CheckBoxField(new FieldLabel("Czy preferujesz e-learning?: "), "checkbox", "checkbox"),
          new TextAreaField(new FieldLabel("Uwagi: "), "uwagi", "textarea"))
    document.body.appendChild(form.render()) 
      
})
