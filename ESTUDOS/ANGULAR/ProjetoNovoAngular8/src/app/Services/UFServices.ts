import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { UF } from "../Models/UF";

@Injectable({
    providedIn: "root",
})
export class UFServices {
    private readonly uri = "http://localhost:3001/api/UF"
    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json',);
    }
    constructor(
        private http: HttpClient
    ) { }

    public getAllUF(): Observable<UF[]> {
        return this.http.get<UF[]>(this.uri)
    }
}