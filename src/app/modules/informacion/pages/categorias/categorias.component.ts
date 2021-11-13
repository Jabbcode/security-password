import { Component, OnInit } from '@angular/core';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  faSitemap = faSitemap;

  datos = [
    {
      categoria: 'Bancos',
      icono: 'faUniversity',
      data: [
        { titulo: 'Mercantil', password: '123456' },
        { titulo: 'Venezuela', password: '123456' },
        { titulo: 'Banesco', password: '12345678' },
        { titulo: 'Banesco', password: '12345678' },
      ]
    },
    {
      categoria: 'Redes Sociales',
      icono: 'faShareAlt',
      data: [
        { titulo: 'Facebook', correo: 'jeffer_81_30@hotmail.com', password: '123456' },
        { titulo: 'Twitter', correo: 'jabbcodeoficial@gmail.com', password: '12345678' },
        { titulo: 'Twitter', correo: 'jabbcodeoficial@gmail.com', password: '12345678' },
        { titulo: 'Twitter', correo: 'jabbcodeoficial@gmail.com', password: '12345678' },
      ]
    },
    {
      categoria: 'Correos electronicos',
      icono: 'faAt',
      data: [
        { titulo: 'jeffer_81_30@hotmail.com', password: '123456' },
        { titulo: 'jabbcodeoficial@gmail.com', password: '12345678' }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
