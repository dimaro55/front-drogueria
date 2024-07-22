import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drogueria';

  constructor(private router: Router){}

  goMedicamento():void{
    this.router.navigate(['gestion-medicamento'])
  }
  goVenta():void{
    this.router.navigate(['gestion-venta'])
  }
}

