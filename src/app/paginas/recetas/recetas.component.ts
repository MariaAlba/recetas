import { Component, OnInit } from '@angular/core';
import { RECETAS } from '../../const/recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas: Array<any>;
  recetaSeleccionada: Array<any>;
  nombre: string;

  constructor() {
    console.trace('RecetasComponent Constructor');
    this.recetas = RECETAS;
    this.recetaSeleccionada = [];
    this.nombre="";

  }//Constructor

  ngOnInit() {
  }//ngOnInit

  detalleReceta(r) {
    this.recetaSeleccionada = r;
  }
}//RecetasComponent
