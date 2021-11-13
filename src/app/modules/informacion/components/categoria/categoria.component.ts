import { Component, Input, OnInit } from '@angular/core';
import { faShareAlt, faUniversity, faAt, faPlusCircle, faPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  @Input() datos: any = []; 

  faShareAlt = faShareAlt;
  faUniversity = faUniversity;
  faAt = faAt;
  faPlusCircle = faPlusCircle;
  faPlus = faPlus;
  faPlusSquare = faPlusSquare;

  constructor() { }
  
  ngOnInit(): void {
  }

}
