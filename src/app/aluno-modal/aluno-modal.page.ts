import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-aluno-modal',
  templateUrl: './aluno-modal.page.html',
  styleUrls: ['./aluno-modal.page.scss'],
})
export class AlunoModalPage implements OnInit {

  constructor(public modalController:ModalController) { }
  
  ngOnInit() {
  }

  novo_aluno = {
    "nome":"",
    "perfil":"",
    "url":""
  }

  add() {
    this.modalController.dismiss(this.novo_aluno)
  }

}
