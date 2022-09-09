import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  isModalOpen= false;
  constructor() { }

  ngOnInit() {
  }
  setOpen(isOpen:boolean) {
    this.isModalOpen = isOpen;
  }
}
