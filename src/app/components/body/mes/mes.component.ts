import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mes',
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent implements OnInit {
  date = new Date()
  month = this.date.getMonth()
  months:any[] =[
    "Enero",
    "Febreo",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ]
  day = this.date.getDay()
  days:any[] = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado"
  ]
  diasMes=""
  ultimoDia=new Date(this.date.getFullYear(), this.date.getMonth()+1,0).getDate()
  prueba() {
    console.log(this.month)
  }
  
  constructor() { }

  ngOnInit(): void {
    let mes:any= document.getElementById("mes")
    mes.innerHTML=this.months[this.month]
    let dia:any = document.getElementById("dia")
    dia.innerHTML=this.days[this.day]+" "+ this.date.getDate()+" de "+this.months[this.month]+" de "+ this.date.getFullYear()
    console.log("aber")

    for (let i=0; i<this.ultimoDia;i++) {
      this.diasMes+="<div class='col'>"+i+"</div>"
    }
    let diasMes2:any = document.getElementById("diasMes")
    diasMes2.innerHTML=this.diasMes
  }

}
