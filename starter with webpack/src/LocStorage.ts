import { DataStorage } from "./DataStorage";

export class LocStorage implements DataStorage{
    
    private storeDocumentId(documentID: string): string {
        let docs = this.getDocuments()
        if (docs.indexOf(documentID) >= 0) return documentID
        docs.push(documentID)
        localStorage.setItem('documents', JSON.stringify(docs))
        return documentID
    }

    saveDocument(values: any): string {
        let ret: string = "";
        if(values.ID){
            localStorage.setItem(values.ID, JSON.stringify(values))
            ret = values.ID
        }
        else{
            const id = 'document-' + Date.now()
            localStorage.setItem(id, JSON.stringify(values))
            ret = this.storeDocumentId(id)
        }
        return ret;
    }
    
    loadDocument(documentID: string): object{
        let doc = localStorage.getItem(documentID)
        if (doc) return JSON.parse(doc)
        return null
	}

    getDocuments(): string[]{
        let docs = localStorage.getItem('documents')
        if(docs) return JSON.parse(docs)
        return []
    }

    removeDocument(id: string){
        let docs = this.getDocuments()
        let i = docs.indexOf(id)
        if(i >= 0){
            docs.splice(i, 1)
            localStorage.setItem('documents', JSON.stringify(docs))
            localStorage.removeItem(id)
        }
    }

    saveForm(form: any): string{
        const id = 'form-' + Date.now();
        localStorage.setItem(id, JSON.stringify(form));
        return this.storeDocumentId(id);

        for(var i = 0; i < 10; i++){
            console.log(i);
        }
    }

}

