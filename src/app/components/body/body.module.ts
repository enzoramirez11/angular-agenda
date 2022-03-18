import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body.component';
import { BodyRoutingModule } from './body-routing.module';
import { SharedModulesModule} from '../shared-modules/shared-modules.module';
import { InicioComponent } from './inicio/inicio.component';
import { SemanaComponent } from './semana/semana.component';
import { MesComponent } from './mes/mes.component';



@NgModule({
  declarations: [
    BodyComponent,
    InicioComponent,
    SemanaComponent,
    MesComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    SharedModulesModule
  ],
  exports: [
    BodyComponent
  ]
})

export class BodyModule { }
