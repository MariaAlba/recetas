import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaFiltro'
})
export class RecetaFiltroPipe implements PipeTransform {

  transform(datos: any, gluten: boolean, busqueda: string): any {
    // console.debug('RecetaFiltroPipe datos %o', datos);
    // console.debug('RecetaFiltroPipe gluten %s', gluten);
    // console.debug('RecetaFiltroPipe nombre %s', nombre);

    let resultado = datos;

    //filtrar por gluten
    // filtrar por tipo
    if (gluten) {
      resultado = resultado.filter((el) => el.isGlutenFree == gluten);
    }

    // filtrar por nombre
    if ( busqueda && '' !== busqueda.trim() ) {

      busqueda = busqueda.toUpperCase();
      resultado = resultado.filter( (el) => {
        console.debug(el);
        const nombre = el.nombre.toUpperCase();
        return nombre.includes(busqueda);
      });
    }


    return resultado;
  }//transform

}//RecetaFiltroPipe
