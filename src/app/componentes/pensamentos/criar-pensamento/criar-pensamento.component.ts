import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev Pegorari',
    modelo: 'modelo3',
  };
  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo Pensamento Criado');
  }
  cancelar() {
    throw new Error('Method not implemented.');
  }
}
