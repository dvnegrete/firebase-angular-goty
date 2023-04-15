import { Component, Input } from '@angular/core';
import { Gaming } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-grafico-horizontal',
  templateUrl: './grafico-horizontal.component.html',
  styleUrls: ['./grafico-horizontal.component.sass']
})
export class GraficoHorizontalComponent {
  @Input() results: Gaming[] = [];
  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 30
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 35
  //   }
  // ];

  //view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {}
  
  onSelect(event: Event){
    console.log(event)
  }
}
