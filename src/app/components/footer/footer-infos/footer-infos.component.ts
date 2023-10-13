import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-infos',
  templateUrl: './footer-infos.component.html',
  styleUrls: ['./footer-infos.component.css']
})
export class FooterInfosComponent implements OnInit {
  listLegal:string [] = ['Bases Jurídicas', 'Políticas de privacidade', 'Termos de uso', 'Mapa do site']; 
  constructor() { }

  ngOnInit(): void {
  }

}
