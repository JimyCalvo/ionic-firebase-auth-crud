import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarRegistroPageRoutingModule } from './editar-registro-routing.module';

import { EditarRegistroPage } from './editar-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditarRegistroPageRoutingModule
  ],
  declarations: [EditarRegistroPage]
})
export class EditarRegistroPageModule {}
