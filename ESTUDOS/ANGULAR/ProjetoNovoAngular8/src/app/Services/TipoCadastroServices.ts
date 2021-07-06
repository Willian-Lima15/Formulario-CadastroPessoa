
import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { TipoCadastro } from "../Models/TipoCadastro";

@Injectable({
    providedIn: "root",
})
export class TipoCadastroServices {
    private readonly uri = "http://localhost:3001/api/TipoCadastro"
    get headers(): HttpHeaders {
        return new HttpHeaders().set('content-type', 'application/json',);
    }
    constructor(
        private http: HttpClient
    ) { }

    public getAllTipoCadastro(): Observable<TipoCadastro[]> {
        return this.http.get<TipoCadastro[]>(this.uri)
    }
}