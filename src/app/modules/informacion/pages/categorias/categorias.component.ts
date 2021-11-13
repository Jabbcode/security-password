import { Component, OnInit } from '@angular/core';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  faSitemap = faSitemap;

  constructor() { }

  ngOnInit(): void {
  }

}
