import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionVentaServiceService {

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

  public getAllVentas(): Observable<any> {
    return this.http.get<any>("http://localhost:8282/venta/ventas",);
  }


  public getVentasByDates(param: any): Observable<any> {
    return this.http.get<any>("http://localhost:8282/venta/ventas/filtro",  {params: param});
  }

  public saveVenta(body: any): Observable<any> {
    return this.http.post<any>("http://localhost:8282/venta/ventas",  body);
  }



}


