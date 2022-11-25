import { Component, OnInit } from '@angular/core';
import { Datas } from 'src/app/interfaces/interfaces';
import { FeriadosService } from 'src/services/feriados.service';

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  feriados:Datas[] = [];

  constructor( private feriadosService: FeriadosService) { }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp => {
      console.log('feriados', resp)
      this.feriados.push(...resp.data);
    });
  }

}
