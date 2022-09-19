import { FormGroup } from "@angular/forms";

export class Tab{
    name: string;
    formGroup: FormGroup;

    constructor(tab?: Object){
        if(tab != null){
            Object.assign(this, tab);
        }
    }
}