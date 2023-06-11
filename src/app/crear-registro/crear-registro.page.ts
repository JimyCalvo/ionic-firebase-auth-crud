import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from "@angular/forms";
import { ResgistroService } from './../registro/resgistro.service';
@Component({
  selector: 'app-crear-registro',
  templateUrl: './crear-registro.page.html',
  styleUrls: ['./crear-registro.page.scss'],
  
})
export class CrearRegistroPage implements OnInit {
  valor1:number=0;
  valor2:number=0;
  valor3:number=0;
  valor4:number=0;
  valor5:number=0;
  resultado:number=0;
  notaForm: FormGroup;
  inputDisabled: boolean = true;
  constructor(
    private regService: ResgistroService,
    private router: Router,
    public fb: FormBuilder
    
  ) { }

  ngOnInit() {
    this.notaForm = this.fb.group({
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
  formSubmit() {
    if (!this.notaForm.valid) {
      return false;
    } else {
    
      this.regService.createNota(this.notaForm.value).then(res => {
        console.log(res)
        this.notaForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
  sumarValores() {
    const suma= this.valor1*0.2+this.valor2*0.2+this.valor3*0.2+this.valor4*0.1+this.valor5*0.3;
    this.resultado = suma;
  }

}
