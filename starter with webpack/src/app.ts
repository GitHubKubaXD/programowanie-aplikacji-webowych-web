import { InputField } from "./InputField";
import { FieldLabel } from "./FieldLabel";
import { EmailField } from "./EmailField";
import { SelectField } from "./SelectField";
import { CheckBoxField } from "./CheckBoxField";
import { TextAreaField } from "./TextAreaField";
import { Form } from "./Form";
import { FormCreator } from "./FormCreator";
import { DocumentList } from "./DocumentList";
import { Router } from "./Router";

export class App {
    constructor() {
        // const b = new Form()

        document.addEventListener('DOMContentLoaded', (event) =>{
            var form = new Form( 
             { ID: '',  
                fieldTab: [new InputField(new FieldLabel("Imię: "), "imie", "input"),
            new InputField(new FieldLabel("Nazwisko: "), "input", "nazwisko", ""),
            new EmailField(new FieldLabel("Email: "), "email", "email"),
            new SelectField(new FieldLabel("Wybierz kierunek studiów: "), "select", "select", ["Informatyka", "ELO", "Bożena Wiśniewska"]),        
            new CheckBoxField(new FieldLabel("Czy preferujesz e-learning?: "), "checkbox", "checkbox"),
            new TextAreaField(new FieldLabel("Uwagi: "), "uwagi", "textarea")]
            }
                
        )


        let path = new URL(window.location.href).pathname;
        let page = path.substring(path.lastIndexOf('/')+1);

        switch(page){
            case 'new-document.html': document.body.appendChild(form.render())
                break
            case 'document-list.html': document.body.appendChild(new DocumentList().render()) 
                break
            case 'form-list.html': document.body.appendChild(new DocumentList().render(true)) 
                break
            case 'edit-document.html':
                    let id = Router.getParam('id')
                    if(id){
                        let doc = (new DocumentList).getDocument(id) || []
                                let documentForm = new Form(doc)
                        documentForm.ID = id.startsWith('form') ? '' : id
                        document.body.appendChild(documentForm.render())
                    }
                break

            case 'new-form.html':
                
            document.body.appendChild((new FormCreator).newForm());

            break








        }


              
        })
    }


 
    
}
export const AAA = 10;