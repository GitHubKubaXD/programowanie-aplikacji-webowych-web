export class FieldLabel {
    Label: string;
    constructor(label:string){
        this.Label = label;
    }
    
    render(): HTMLElement{
        const label = document.createElement("label");
        label.innerText = this.Label ;      
        return label
    }
}