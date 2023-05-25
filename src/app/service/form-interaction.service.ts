import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { userDetails } from 'src/app/model/userDetails';

@Injectable({
    providedIn: null
})

export class FormInteractionService {

    isInteracted: Subject<boolean> = new Subject();
    userIformation = new BehaviorSubject<any>([]);
}