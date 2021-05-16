import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Records } from '../models/records';

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  url = 'http://localhost:3000/record'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem todos os registros
  getRecord(): Observable<Records[]> {
    return this.httpClient.get<Records[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um registro por id
  getRecordById(id: number): Observable<Records> {
    return this.httpClient.get<Records>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // salva um registro
  saveRecord(record: Records): Observable<Records> {
    return this.httpClient.post<Records>(this.url, JSON.stringify(record), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // utualiza um registro
  updateRecord(record: Records): Observable<Records> {
    return this.httpClient.put<Records>(this.url + '/' + record.id, JSON.stringify(record), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // deleta um registro
  deleteRecord(record: Records) {
    return this.httpClient.delete<Records>(this.url + '/' + record.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}
