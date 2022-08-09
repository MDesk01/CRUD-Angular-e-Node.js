import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  autor = 'Mateus Augusto'
  dt_criacao = '09/08/2022'
  instagram = '@mateus.augustow'



  constructor() { }

  ngOnInit(): void {
  }
  

}
