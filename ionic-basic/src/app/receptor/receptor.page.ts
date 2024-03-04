import { Component, OnDestroy, OnInit } from '@angular/core';
import { Personaje } from '../interface/personaje';
import { Subscription } from 'rxjs';
import { EnvRecepService } from '../service/env-recep.service';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.page.html',
})
export class ReceptorPage implements OnInit, OnDestroy {
  user: Personaje = {};
  list: Personaje[] = [];
  personajes: Personaje[] = [];
  subcriptionObj: Subscription = new Subscription;
  subcriptionList: Subscription = new Subscription;

  constructor(private envRecepService: EnvRecepService) { }

  ngOnDestroy() {
    if (this.subcriptionList != undefined || this.subcriptionList != null) {
      this.subcriptionList.unsubscribe();
    }

    if (this.subcriptionObj != undefined || this.subcriptionObj != null) {
      this.subcriptionObj.unsubscribe();
    }
  }

  ngOnInit() {
    this.subcriptionObj =
      this.envRecepService.$getObjectSource.subscribe(
        data => {
        console.log(data);
        this.user = data;
      });

    this.subcriptionList =
      this.envRecepService.$getListSource.subscribe(
        data => {
        console.log(data);
        this.list = data;
      });

    this.envRecepService.getPersonajes().subscribe(
      (response: any) => {
      this.personajes = response.results;
    });
  }
}