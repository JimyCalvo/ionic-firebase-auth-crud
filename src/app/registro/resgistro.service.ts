import { Injectable } from '@angular/core';
import { Registro } from '../registro/Registro';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ResgistroService {

  NotaListRef: AngularFireList<any>;
  NotaRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) {
    this.NotaListRef = this.db.list('/registro')
  }
  // ---------------------------  Crear Registro ---------------------------\\
  createNota(reg: Registro) {
    return this.NotaListRef.push({
      name: reg.name,
      last_name: reg.last_name,
      nota1: reg.nota1,
      nota2: reg.nota2,
      nota3: reg.nota3,
      nota4: reg.nota4,
      nota5: reg.nota5,
      total: reg.nota1*0.2+reg.nota2*0.2+reg.nota3*0.2+reg.nota4*0.1+reg.nota5*0.3,
    });
  }
   // ---------------------------  Metodo Get --------------------------- \\
   getNota(id: string) {
    this.NotaRef = this.db.object('/registro/' + id);
    return this.NotaRef;
  }

  // ---------------------------  Metodo Get List --------------------------- \\

  getNotaList() {
    this.NotaListRef = this.db.list('/registro');
    return this.NotaListRef;
  }

  // ---------------------------  Metodo Editar --------------------------- \\
  
  updateNota(id, reg: Registro) {
    return this.NotaRef.update({
      name: reg.name,
      last_name: reg.last_name,
      nota1: reg.nota1,
      nota2: reg.nota2,
      nota3: reg.nota3,
      nota4: reg.nota4,
      nota5: reg.nota5,
      total: reg.nota1*0.2+reg.nota2*0.2+reg.nota3*0.2+reg.nota4*0.1+reg.nota5*0.3,
    });
  }


  // ---------------------------  Metodo Eliminar  --------------------------- \\
  deleteNota(id: string) {
    this.NotaRef = this.db.object('/registro/' + id);
    this.NotaRef.remove();
  }
}
