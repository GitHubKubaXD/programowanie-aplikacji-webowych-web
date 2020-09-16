import { DataStorage } from "./DataStorage";

export class LocStorage implements DataStorage{
    
     localStorage: Object;
         
     constructor(locStorage: object){
         this.localStorage = locStorage;
     }
 
}