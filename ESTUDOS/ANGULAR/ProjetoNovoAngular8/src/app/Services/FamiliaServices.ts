import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Familia } from "../Models/Familia";

@Injectable({
    providedIn: "root",
})
export class FamiliaServices {
    private readonly uri = "http://localhost:3001/api/Familia"
    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json',);
    }
    constructor(
        private http: HttpClient
    ) { }

    public getAllFamilia(): Observable<Familia[]> {
        return this.http.get<Familia[]>(this.uri)
    }
}