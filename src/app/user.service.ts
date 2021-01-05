import { Injectable } from "@angular/core";
import {
  throwError,
  Observable,
  BehaviorSubject,
  of,
  Subscription,
} from "rxjs";
import { map, catchError, switchMap, finalize } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { environment } from "./../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  _url = environment.apiHost;
  angular: any;


  constructor(private _http: HttpClient) { }

  saveapiSerivce(obj): Observable<any> {
    return this._http.post<any>(this._url + "/User/saveUser", obj).pipe(
      switchMap((result) => {
        return of(result);
      }),
      catchError(this.errorHandler)
    );
  }

  listapiSerivce(): Observable<any> {
    return this._http.get<any>(this._url + "/User/allUsers").pipe(
      switchMap((result) => {
        return of(result);
      }),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error: HttpErrorResponse) {
    console.log("in error service**==>>", error);
    return throwError(error);
  }
}

