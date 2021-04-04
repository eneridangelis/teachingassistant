import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Aluno } from './aluno';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   aluno: Aluno = {nome: "", cpf: "", email: "", login: ""};
   alunoService = new AlunoService();
   alunos: Aluno[] = [];
   title = "ta-gui";

   gravar(a: Aluno): void {
     this.alunoService.gravar(a);
     this.aluno = {nome: "", cpf: "", email: "", login: ""};
     this.alunos.push(a);
  }
}
