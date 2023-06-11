import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarRegistroPage } from './editar-registro.page';

const routes: Routes = [
  {
    path: '',
    component: EditarRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarRegistroPageRoutingModule {}
