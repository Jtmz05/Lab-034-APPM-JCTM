import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interface/alumno';
import { AlumnoService } from '../service/alumno.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
})
export class AlumnosPage implements OnInit {
  public alumnos: Alumno[] = [];
  public nombre: string = '';
  public matricula: string = '';
  public estado: string = '';
  public idActualizar: any;
  public error: boolean = false;

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.alumnoService.setAlumnos([
      {
        id: 1, nombre: 'Julio César'
        , matricula: '312312'
      },
      {
        id: 2, nombre: 'Isabella Vargas',
        matricula: '743210'
      },
      {
        id: 3, nombre: 'Juan Ramírez',
        matricula: '324123'
      }
    ]);

    this.alumnos = this.alumnoService.getAlumnos();
    this.estado = 'guardar';
  }

  public guardar() {
    if (
      (this.nombre == undefined || this.nombre == '') ||
      (this.matricula == undefined || this.matricula == '')
    ) {
      this.error = true;
      return;
    }

    let alumno: Alumno = {
      nombre: this.nombre,
      matricula: this.matricula
    };

    if (this.estado === 'actualizar') {
      alumno.id = this.idActualizar;
      this.alumnos = this.alumnoService.actualiza(alumno);
    }

    if (this.estado === 'guardar') {
      this.alumnoService.agregarAlumno(alumno);
      this.alumnos = this.alumnoService.getAlumnos();
    }
    this.cancelar();
  }

  public cancelar() {
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.error = false;
  }

  public borrar(id: number) {
    this.alumnoService.borrarAlumno(id);
    this.alumnos = this.alumnoService.getAlumnos();
  }

  public editar(alumno: Alumno) {
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }
}
