import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calcular',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calcular.component.html',
  styleUrl: './calcular.component.css'
})



export class CalcularComponent {  
  valorInput:number=0;
  result:number=0;
  valor1:number=0;
  valor2:number=0;
  operador:string="";
  operadorOn:boolean=false;
  appendToDisplay(valor:number) {
    if(this.operadorOn){
      this.valorInput=0;
      this.operadorOn=false;
    }
    this.valorInput=(this.valorInput * 10) + valor;    
  }
  clearDisplay(){
    this.valorInput=0;
    this.operadorOn=false;
  }
  calculate(valor:number){        
    this.valor2=valor;
    this.result=0;
    switch(this.operador){
      case '+':this.result=this.valor1+this.valor2;break;
      case '-':this.result=this.valor1-this.valor2;break;
      case '*':this.result=this.valor1*this.valor2;break;
      case '/':this.result=this.valor1/this.valor2;break;
      case '^':this.result=this.valor1**this.valor2;break;
      default: break;
    }
    this.valorInput=this.result;
    this.operador="";
  }
  asignar(operador1:string){
    this.valor1=this.valorInput;
    this.operador=operador1;
    this.operadorOn=true;    
  }
}
