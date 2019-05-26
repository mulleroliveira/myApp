import { Component } from '@angular/core';
import { AlunoModalPage } from '../aluno-modal/aluno-modal.page';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalcontroller: ModalController, private storage: Storage) {
    this.storage.get('aluno').then((alunos) => {
      if (alunos) {
        this.alunos = alunos
      }
    })
  }

  add(retorno) {
    this.alunos.push(retorno)
    this.storage.set('aluno', this.alunos);
  }

  async exibir_modal() {
    const modal: HTMLIonModalElement =
      await this.modalcontroller.create({
        component: AlunoModalPage
      });

    await modal.present();

    modal.onDidDismiss().then((retorno) => {
      this.add(retorno.data)
    })

  }

  alunos = []

}
