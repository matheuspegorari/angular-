import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input',
      autoria: 'Componente Filho',
      modelo: 'modelo2',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaamet consectetur adipisicing elit. Quasi facilis perspiciatis harum cupiditate? Sint maiores voluptas autem repellendus modi ducimus, quaerat vel eaque ut eius vero et sunt quibusdam voluptates.',
      autoria: 'Componente Filho',
      modelo: 'modelo2',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
