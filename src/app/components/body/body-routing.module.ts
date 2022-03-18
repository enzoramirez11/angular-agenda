import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body.component';
import { InicioComponent } from './inicio/inicio.component';
import { MesComponent } from './mes/mes.component';
import { SemanaComponent } from './semana/semana.component';

const routes: Routes = [
  {path: '', component: BodyComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'semana', component:SemanaComponent },
    { path: 'mes', component: MesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
