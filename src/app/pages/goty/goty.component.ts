import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from 'src/app/interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.sass']
})
export class GotyComponent implements OnInit{
  
  games: Game[] = [];
  
  constructor( private gameService: GameService){}
  
  ngOnInit(): void {
    this.gameService.getNominados()
      .subscribe( res => {
        console.log(res)
        this.games = res
      })
  }

  votarGame(game: Game){
    this.gameService.votarGame(game.id)
      .subscribe( (res: any) => {
        if (res.msg) {
          Swal.fire({
            title: 'Gracias!!',
            text: res.msg,
            icon: 'success',
          })
        } else {
          console.warn(res)
          Swal.fire({
            title: 'Ups!',
            text: res,
            icon: 'error',
          })
        }
      })
  }

}
