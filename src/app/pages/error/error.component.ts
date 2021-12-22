import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent {

  constructor(
    private router:Router
  ){}

  back():void{
    this.router.navigate(['welcome'])
  }
}