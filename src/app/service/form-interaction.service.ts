import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { userDetails } from "../Model/userDetails";

@Injectable({
    providedIn: null
})
export class FormInteractionService {

    isInteracted: Subject<boolean> = new Subject();
    userIformation = new BehaviorSubject<any>([]);
}