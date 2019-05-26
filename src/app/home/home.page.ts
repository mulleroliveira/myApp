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
      console.log(retorno);


      //this.add(retorno.data)
      // Quando o modal foi dispensado os valores retornados será jogado na variável RETORNO, logo em seguinta
      // será executado o comando de baixo, no qual irá jogar os valores para a Função add().

      // O (.Data) é por causa que os valores retornados vem dentro de um 'Dicionário' com a chave [data],
      //portanto é preciso colocar o nome da variável (retorno).data(que é o nome do dicionário) para acessar
      // os dados enviados pelo Modal.

      //Ex dos dados retornados: {'data':'retorno':{nome:jack, perfil:paz e amor,url:google.com}}
    })

  }

  alunos = []

}
