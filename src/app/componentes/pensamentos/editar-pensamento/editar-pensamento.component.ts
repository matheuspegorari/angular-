import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css'],
})
export class EditarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      id: [null],
      conteudo: [null, Validators.required],
      autoria: [null, Validators.required],
      modelo: [null],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe(
      (pensamento) =>
        (this.formulario = this.formBuilder.group({
          id: [pensamento.id],
          conteudo: [
            pensamento.conteudo,
            Validators.compose([
              Validators.required,
              Validators.pattern(/(.|\s)*\S(.|\s)*/),
            ]),
          ],
          autoria: [
            pensamento.autoria,
            Validators.compose([Validators.required, Validators.minLength(3)]),
          ],
          modelo: [pensamento.modelo],
          favorito: [pensamento.favorito],
        }))
    );
  }

  editarPensamento() {
    this.service.editar(this.formulario.value).subscribe(() => {
      this.router.navigate(['/listarpensamento']);
    });
  }
  cancelar() {
    this.router.navigate(['/listarpensamento']);
  }

  habilitarBotao(): string {
    return this.formulario.valid ? 'botao' : 'botao__desabilitado';
  }
}
