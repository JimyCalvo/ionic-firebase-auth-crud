import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearRegistroPageRoutingModule } from './crear-registro-routing.module';

import { CrearRegistroPage } from './crear-registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CrearRegistroPageRoutingModule
  ],
  declarations: [CrearRegistroPage]
})
export class CrearRegistroPageModule {}
