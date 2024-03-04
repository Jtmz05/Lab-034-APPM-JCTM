import { Injectable } from '@angular/core';
import { Receta } from '../interface/receta';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  recetas: Receta[] = [
    {
      id: 1,
      nombre: 'Ensalada',
      image: 'https://s2.abcstatics.com/media/bienestar/2021/04/21/DSCF1029-kn7B--1248x698@abc.JPG',
      ingredientes: [
        '2 tomates grandes',
        '200g de mozzarella fresca',
        'Aceite de oliva',
        'Sal',
        'Pimienta'
      ]
    },
    {
      id: 2,
      nombre: 'Guacamole',
      image: 'https://www.maricruzavalos.com/wp-content/uploads/2010/09/mexican-authentic-guacamole-recipe.jpg',
      ingredientes: [
        '2 aguacates',
        '1 tomate mediano',
        '1/4 de cebolla',
        '1/4 taza de cilantro picado',
        '1/2 limón',
        'Sal',
      ]
    },
    {
      id: 3,
      nombre: 'Tostadas de ceviche',
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/images/2017/02/cevichedecoliflor.jpg',
      ingredientes: [
        '300g de pescado blanco crudo',
        '1/2 taza de jugo de limón',
        '1/2 taza de tomate picado',
        '1/3 taza de cebolla picada',
        '1/4 taza de cilantro picado',
        'Sal y pimienta',
        'Tostadas de maíz'
      ]
    }
  ];

  constructor() { }

  getReceta(idReceta: number) {
    return {...this.recetas.find((receta: Receta) => {
      return receta.id === idReceta
    })};
  }

  getRecetas() {
    return [...this.recetas];
  }
}