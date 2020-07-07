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

document.addEventListener('DOMContentLoaded', (event) =>{
    var form = new Form(new InputField(new FieldLabel("Imię: "), "input", "input"),
    new DateField(new FieldLabel("Nazwisko: "), "input", "input"),
    new EmailField(new FieldLabel("Email: "), "email", "email"),
    new SelectField(new FieldLabel("Wybierz kierunek studiów: "), "select", "select")      ,        
       new CheckBoxField(new FieldLabel("Czy preferujesz e-learning?: "), "checkbox", "checkbox"),
          new TextAreaField(new FieldLabel("Uwagi: "), "uwagi", "textarea"))
    document.body.appendChild(form.render())
})
/*
window.addEventListener('DOMContentLoaded', (event) =>{
    var XD = new InputField(new FieldLabel("Imię: "), "input", "input", "")
    document.body.appendChild(XD.render())
})

window.addEventListener('DOMContentLoaded', (event) =>{
    var XD = new DateField(new FieldLabel("Nazwisko: "), "input", "input", "")
    document.body.appendChild(XD.render())
})

window.addEventListener('DOMContentLoaded', (event) =>{
    var XD = new EmailField(new FieldLabel("Email: "), "email", "email", "")
    document.body.appendChild(XD.render())
})

window.addEventListener('DOMContentLoaded', (event) =>{
    var XD = new SelectField(new FieldLabel("Wybierz kierunek studiów: "), "select", "select", "")
    document.body.appendChild(XD.render())
})

window.addEventListener('DOMContentLoaded', (event) =>{
    var XD = new CheckBoxField(new FieldLabel("Czy preferujesz e-learning?: "), "checkbox", "checkbox", "")
    document.body.appendChild(XD.render())
})

window.addEventListener('DOMContentLoaded', (event) =>{
    var XD = new TextAreaField(new FieldLabel("Uwagi: "), "uwagi", "textarea", "")
    document.body.appendChild(XD.render())
})
*/