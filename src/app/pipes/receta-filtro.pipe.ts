import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recetaFiltro'
})
export class RecetaFiltroPipe implements PipeTransform {

  /**
   * 
   * @param datos 
   * @param gluten 
   * @param busqueda 
   */
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

    // filtrar por nombre / cocinero / ingredientes
    if(busqueda && ''!==busqueda.trim()){
      
      busqueda = busqueda.toLowerCase();
      
      resultado = resultado.filter((el)=>{

        const ingredientes = el.ingredientes.reduce( (c, p) => c + p , '');
        const encontrar = (el.nombre + el.cocinero + ingredientes ).toLowerCase();
        return encontrar.includes(busqueda);

      });
    }
    

    return resultado;
  }//transform

}//RecetaFiltroPipe
