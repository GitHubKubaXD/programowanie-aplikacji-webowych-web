export interface DataStorage {

    saveDocument(values: any): string;
    loadDocument(documentID: string): object;
    getDocuments(): string[];

}