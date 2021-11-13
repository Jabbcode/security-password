import { Component, Input, OnInit } from '@angular/core';
import { faEye, faEyeSlash, faShareAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-tarjeta-categoria',
  templateUrl: './tarjeta-categoria.component.html',
  styleUrls: ['./tarjeta-categoria.component.scss']
})
export class TarjetaCategoriaComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;

  toggle_show: boolean = false;

  @Input() informacion: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.informacion)
  }

  toggle() {
    this.toggle_show = !this.toggle_show
  }

}
