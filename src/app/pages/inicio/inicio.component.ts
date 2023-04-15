import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';
import { Game, Gaming } from '../../interfaces/interfaces'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  games: Gaming[] = [];
  
  constructor(){
    const aCollection = collection(this.firestore, 'goty')
    this.items$ = collectionData(aCollection);
    
  }
  
  ngOnInit(): void {
    this.items$
    .pipe(
      map( (games: Game[]):Gaming[] => {
        return  games.map( (game):Gaming => {
          return {
            name: game.name,
            value: game.votos
          }
        })
      })
    )
    .subscribe(
      games => {
        console.log(games);
        this.games = games;
      }
    )
  }

}
