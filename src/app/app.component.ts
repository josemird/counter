import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = 'counter';
  public counter: number = 0;

  //Para Llamar usar una variable en la funcion lo hacemos como en una 
  //clase con el this."variable"

  Contador(operacion:string){
    if(operacion == "aumentar"){
      //Hacemos que el valor del contador aumente
      this.counter++;
    }else if(operacion == "disminuir"){
      //Hacemos que el valor del contador disminuya
      this.counter--;
    }else{
      //Hacemos que el valor del contador se reinicie
      this.counter = 0;
    }
  }
}

