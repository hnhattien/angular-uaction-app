import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'auc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auction-app';

  constructor(private _router: Router){

  }

  navigateToProductDetail(){
    this._router.navigate([
      "/about"
    ])
  }
}
