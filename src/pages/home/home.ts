import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';
import {map} from 'rxjs/operators'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lista = []
  
  constructor(public navCtrl: NavController, private listaProvider: ListaProvider) {

  }
  carregaDados(){
    this.listaProvider.buscaLista()
    .pipe(
      map(res => res.json())
    )
    .subscribe(
      results => {
        this.lista = results
       
      }
    )
  }
}
