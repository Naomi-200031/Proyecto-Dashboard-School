import { Component, Directive, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}
  //Es mi metodo, donde pongo el numero de caracteres y si el usuario pone menos de 8 
  //mandara un mensaje que coloque el minimo de caracteres
  validaciones (){
    let inputPassword = document.getElementById("password") as HTMLInputElement;
    let valuesPassword = inputPassword.value;
    // Utilizar alguna mayuscula con ReyEx

    let mayus = new RegExp("[A-Z]");
    let minus = new RegExp("[a-z]");
    let carac = new RegExp("[@$!%?&]");
    //let numc = new RegExp("^(?!.*([A-Za-zñÑáéíóúÁÉÍÓÚ\s])\1{2}).+$");

    // Validacion de mas de 8 caracteres
    if (valuesPassword.length >= 8) {
      console.log("Tu Password tiene mas de 8 Caracteres");
    }else{
      alert("El Minimo de Caracteres es de 8");
    }
    // Validacion de una mayuscula
    if(valuesPassword.match(mayus)){
      console.log("Tu Password contiene una Mayuscula")
    }else{
      alert("Utiliza minimo alguna Mayuscula");
    }
    // Validacion de una miniscula
    if(valuesPassword.match(minus)){
      console.log("Tu Password contiene una Minuscula");
    }else{
      alert("Utiliza minimo alguna Minuscula");
    }
  //  validacion de caracteres
  if(valuesPassword.match(carac)){
    console.log("Tuc Password contiene un Carácter");
  }else{
    alert("Utiliza minimo algun carácter");
  }
  
  }
}

