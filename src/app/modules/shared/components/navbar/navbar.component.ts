import { Component, OnInit } from '@angular/core';
import { faUnlockAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faUnlockAlt = faUnlockAlt;

  home: string = '/security/informacion'

  constructor() { }

  ngOnInit(): void {
  }

}
