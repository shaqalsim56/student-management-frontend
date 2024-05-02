import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private api_url = 'http://localhost:9999/api/v1/courses';

  constructor(private _http: HttpClient) { }

  getAllCourses(): Observable<any>{
    return this._http.get<any>(this.api_url + '/all-courses')
  .pipe(
    map((res)=>{
      return res;
    })
  )}

  getCourse(id: number): Observable<any>{
    return this._http.get<any>(this.api_url + `/course/${id}`)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  editCourse(data: any, id: number): Observable<any>{
    return this._http.patch<any>(this.api_url + `/update-course/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  createCourse(data: any): Observable<any>{
    return this._http.post<any>(this.api_url + '/new-course', data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
  }

  deleteCourse(data: any, id: any): Observable<any>{
    return this._http.delete<any>(this.api_url + `/delete-course/${id}`, data)
    .pipe(
      map((res)=>{
        return res;
      })
    )
    }
}
