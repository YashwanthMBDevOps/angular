import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-abilities',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './abilities.component.html',
  styleUrl: './abilities.component.css'
})
export class AbilitiesComponent {

  constructor(
    private http: HttpClient) {

  }

  pokeApiAbilityResp: any = []
  game_indices: any = []
  AngularName: string = "Angular Practice";
  AngularVersion: number = 18
  InputTypeR: string = 'radio'
  pulldown: string = "Select Your States"
  showGameIndices: boolean = false;
  showAbilities: boolean = false;
  // showAlertMessage(){
  //   alert("This Table Contains Sample API Response Data...!")
  // }

  showAlertMessage(message: string): void {

    this.http.get<any>("https://pokeapi.co/api/v2/pokemon/ditto").subscribe((res => {

      if (message == 'Games') {
        this.showGameIndices=true;
        this.game_indices = res.game_indices
      }
      else {
        this.showAbilities=true;
        this.pokeApiAbilityResp = res.abilities

      }

    }
    ))
  }
}
