import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characterList: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500,
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }
  ];

  addCharacter(character: Character):void {

    const newCharacter: Character = { id:uuid(), ...character };

    this.characterList.push(newCharacter);
    console.log({newCharacter});
  }

/*   onDeleteCharacter(indice: number):void {
    this.characterList.splice(indice, 1);
    console.log(this.characterList.length);
  } */

  deleteCharacterById( id: string ) {
    this.characterList = this.characterList.filter( character => character.id !== id)
  }


}
