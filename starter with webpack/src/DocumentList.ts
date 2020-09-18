import { LocStorage } from "./LocStorage"



export class DocumentList {
    public list: string[] = []
    private storage: LocStorage
    constructor() {
        this.storage = new LocStorage()
        this.getDocumentList()
    }

    public getDocumentList() {
       this.list = this.storage.getDocuments()
    }

    public removeDocument(id: string) {
        this.storage.removeDocument(id)
    }

    public getDocument(id: string): any {
        return this.storage.loadDocument(id)
    }

    public render(forms: boolean = false): any {
        let table = document.createElement("table")
        for (let id of this.list){
            if(forms && !id.startsWith('form')) continue;
            if(!forms && id.startsWith('form')) continue;
         
            let tr = table.insertRow()
            let a = document.createElement('a')
            a.appendChild(document.createTextNode(id))
            a.href = 'edit-document.html?id=' + id
            tr.insertCell().appendChild(a);

            let usun = document.createElement('button')
            usun.type = 'button'
            usun.textContent = 'Usuń'
            usun.addEventListener('click', function(self, id){ return function(){ 
                self.removeDocument(id)
                window.location.reload()       
            }}(this, id));
            tr.insertCell().appendChild(usun)       
         
        }

        let button = document.createElement('button')
        button.type = 'button'
        button.textContent = 'Wstecz'
        button.addEventListener('click', function(){ window.location.href = "index.html" })
        table.appendChild(button)

        return table   
    }
}
