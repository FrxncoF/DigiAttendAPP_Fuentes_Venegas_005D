import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[]=[
    {
      icon: 'headset-outline',
      name: 'Escanear',
      redirecTo: '/scan'
    }
  ];

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu(){
    this.menu.toggle();
  }
}
