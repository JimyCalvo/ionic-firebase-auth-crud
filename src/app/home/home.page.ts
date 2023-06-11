import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import{Registro} from '../registro/Registro';
import{ResgistroService} from '../registro/resgistro.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

})
export class HomePage {
	Notas=[];
  

  constructor(
		private authService: AuthService,
		private router: Router,
		private loadingController: LoadingController,
		private alertController: AlertController,
		private regService:ResgistroService,
    
  ) {}
  ngOnInit() {
    this.fetchNotas();
    let notasRes = this.regService.getNotaList();
    notasRes.snapshotChanges().subscribe(res => {
      this.Notas = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Notas.push(a as Registro);
      })
    })
	
  }
  fetchNotas() {
    this.regService.getNotaList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }
  deleteNota(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.regService.deleteNota(id)
    }
  }






  async logout() {
		await this.authService.logout();
		this.router.navigateByUrl('/', { replaceUrl: true });
	}

}
