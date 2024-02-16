import { Component, OnInit } from '@angular/core';
import { Gasto } from '../interface/gasto';
import { PresupuestoService } from '../service/presupuesto.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.page.html',
})
export class PresupuestoPage implements OnInit {
  public gastos: string[] = ["Directos", "Fijos", "Variables"];
  public tipoGasto: any;
  public monto: number = 0;
  public resultados: string = "";
  public colorResultados: string = "light";
  public gastosList: Gasto[] = [];

  constructor(private presupuestoService: PresupuestoService) { }

  ngOnInit() {
    this.gastosList = this.presupuestoService.mostrarGastos();
  }

  customPopoverOptions: any = {
    header: "Selección de gastos",
    subHeader: "Selecciona el tipo de gasto",
    message: "Selecciona sólo un tipo de gasto"
  };

  cambioValor(value: any) {
    console.log(value);
  }

  guardar() {
    this.resultados = "";
    if (this.monto != null && this.tipoGasto != null && this.monto > 0) {
      this.colorResultados = "success";
      this.resultados = "Tipo de gasto: " + this.tipoGasto +
        "\nMonto: " + this.monto + "\n";
      this.presupuestoService.agregarGasto(
        this.monto, this.tipoGasto
      );
      this.gastosList = this.presupuestoService.mostrarGastos();
      this.limpiarCampos();
    }
    else {
      this.colorResultados = "danger";
      this.resultados = "No ha llenado todos lso campos del formulario necesarios";
    }
  }

  limpiarCampos() {
    this.monto = 0;
    this.tipoGasto = null;
  }
}
