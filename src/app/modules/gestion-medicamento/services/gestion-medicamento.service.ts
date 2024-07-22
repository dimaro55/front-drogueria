import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GestionMedicamentoService {


  constructor(
    private http: HttpClient,
  ) { }

  public getParams(obj: any): any {
    let params: { [key: string]: any } = {};
    let keys = Object.keys(obj);
    for (const element of keys) {
      if (obj[element] != null && obj[element] !== "") {
        params[element] = obj[element];
      }
    }
    return params;
  }

  public getAllMedicamentos(param: any): Observable<any> {
    return this.http.get<any>("http://localhost:8282/api/medicamentos", {params: param});
  }
  public postMedicamentos(body: any): Observable<any> {
    return this.http.post<any>("http://localhost:8282/api/medicamentos", body);
  }

  public updateMedicamentos(body: any): Observable<any> {
    return this.http.put<any>("http://localhost:8282/api/medicamentos", body);
  }

  public deleteMedicamentos(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:8282/api/medicamentos/"+id);
  }


  

}
