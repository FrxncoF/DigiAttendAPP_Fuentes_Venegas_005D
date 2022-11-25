import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from 'src/app/interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})

export class FeriadosService {

  constructor(private Http:HttpClient) { }
  
  getTopHeadLines(){
    return this.Http.get<RespuestaTopHeadLines>('https://api.victorsanmartin.com/feriados/en.json')
  }
}
