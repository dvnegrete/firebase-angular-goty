import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoHorizontalComponent } from './grafico-horizontal/grafico-horizontal.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    NavbarComponent,
    GraficoHorizontalComponent
  ],
  exports: [
    NavbarComponent,
    GraficoHorizontalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ]
})
export class ComponentsModule { }
