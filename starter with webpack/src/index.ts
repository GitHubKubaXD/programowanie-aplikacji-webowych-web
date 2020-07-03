import './main.scss';
import { App } from './app';
import {Field} from "./Field";
import {FieldLabel} from "./FieldLabel"
//import {CheckBoxField} from "./CheckBoxField"
import {DateField} from "./DateField"


const hello = "yep, it's workin ;laskjf lsdkjf l;kdsjg l;kdsjgklg. still sick";
document.body.innerHTML = hello;
const app = new App();

window.addEventListener('DOMContentLoaded', (event) =>{
    var XD = new DateField(new FieldLabel("xd"), "ups", "pies", "kotek")
    document.body.appendChild(XD.render())
})