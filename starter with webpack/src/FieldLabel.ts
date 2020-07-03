export class FieldLabel {
    Label: string;
    Id: string;
    constructor(label:string){
        this.Label = label;
    }
    
    render(): HTMLElement{
        const label = document.createElement("label");
        this.Id= (Math.random()*100+1).toString(); 
        label.innerText = this.Label ;      
        return label
    }
}