import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje';
import { Router } from '@angular/router';
import { EnvRecepService } from '../service/env-recep.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
})
export class InicioPage implements OnInit {
  user: Personaje = {name:'Pedro Perez object', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: Personaje[]=
  [
    { name: 'Jose Garcia', uuid: '1234567890123456', email: 'jose.garcia@gmail.com' },
    { name: 'Maria Rodriguez', uuid: '7890123456789012', email: 'maria.rodriguez@gmail.com' },
    { name: 'Carlos Martinez', uuid: '9012345678901234', email: 'carlos.martinez@gmail.com' },
  ];

  constructor(
    private router: Router,
    private envioReceptor: EnvRecepService
    ) { }

  ngOnInit() {
  }

  redireccionReceptor(){
    this.envioReceptor.sendObjectSource(this.user);
    this.envioReceptor.sendListSource(this.list);

    this.router.navigate(['/receptor']);
  }

}