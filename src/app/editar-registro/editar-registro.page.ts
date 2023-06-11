import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { ResgistroService } from "../registro/resgistro.service";

@Component({
  selector: 'app-editar-registro',
  templateUrl: './editar-registro.page.html',
  styleUrls: ['./editar-registro.page.scss'],
})
export class EditarRegistroPage implements OnInit {
  updateNotaForm: FormGroup;
  id: any;
  valor1:number=0;
  valor2:number=0;
  valor3:number=0;
  valor4:number=0;
  valor5:number=0;
  resultado:number=0;

  constructor(
    private aptService: ResgistroService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getNota(this.id).valueChanges().subscribe(res => {
      this.updateNotaForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateNotaForm = this.fb.group({
      name: ['',[Validators.minLength(3), Validators.maxLength(25)]],
      last_name: ['',[Validators.minLength(3), Validators.maxLength(25)]],
      nota1:['', [Validators.min(0), Validators.max(20), Validators.pattern('^[0-9]{1,3}(\.[0-9]{1,2})?$')]],
      nota2: ['', [Validators.min(0), Validators.max(20), Validators.pattern('^[0-9]{1,3}(\.[0-9]{1,2})?$')]],
      nota3: ['', [Validators.min(0), Validators.max(20), Validators.pattern('^[0-9]{1,3}(\.[0-9]{1,2})?$')]],
      nota4: ['', [Validators.min(0), Validators.max(20), Validators.pattern('^[0-9]{1,3}(\.[0-9]{1,2})?$')]],
      nota5: ['', [Validators.min(0), Validators.max(20), Validators.pattern('^[0-9]{1,3}(\.[0-9]{1,2})?$')]],
      total: ['', [Validators.min(0), Validators.max(20), Validators.pattern('^[0-9]{1,3}(\.[0-9]{1,2})?$')]],
    })
  }
  updateForm() {
    this.aptService.updateNota(this.id, this.updateNotaForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
  sumarValores() {
    const suma= this.valor1*0.2+this.valor2*0.2+this.valor3*0.2+this.valor4*0.1+this.valor5*0.3;
    this.resultado = suma;
  }
}
