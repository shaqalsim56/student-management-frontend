import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceStudentService {

  private api_url = 'http://localhost:9999/api/v1/students';

  constructor(private _http: HttpClient) { }

  getAllStudents(): Observable<any>{
    return this._http.get<any>(this.api_url + '/all-students')
  .pipe(
    map((res)=>{
      return res;
    })
  )}

  getReport(): Observable<any>{
    return this._http.get<any>(this.api_url + '/get-report')
  .pipe(
    map((res)=>{
      return res;
    })
  )}

  getStudent(id: number): Observable<any>{
    return this._http.get<any>(this.api_url + `/student/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  editStudent(data: any, id: number): Observable<any>{
    return this._http.patch<any>(this.api_url + `/update-student/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  createStudent(data: any): Observable<any>{
    return this._http.post<any>(this.api_url + '/new-student', data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  deleteStudent(data: any, id: any): Observable<any>{
    return this._http.delete<any>(this.api_url + `/delete-student/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
    }

    createPayment(data: any): Observable<any>{
      return this._http.post<any>(this.api_url + '/add-payment', data)
      .pipe(
        map((res)=>{
          return res;
        })
      )
    }
}
