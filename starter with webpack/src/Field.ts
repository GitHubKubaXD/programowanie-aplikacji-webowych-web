import { FieldLabel } from "./FieldLabel";

export interface Field{
    Label: FieldLabel,
    Name: string,    
    FieldType: string,
    Value: string,
    render():HTMLElement;
}