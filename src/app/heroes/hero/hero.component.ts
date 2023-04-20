import { Component } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
public name: string='ironman';

public age:  number =30;

get capitalizedName(): string{
  return this.name.toUpperCase();
}

getHeroDescription():string{
return`${this.name} - ${this.age}`;
}

changeHero(): void{
  this.name='SpiderMan'
}
changeAge(): void{
this.age=50
}
resetHero(): void{
  this.name='Iroman';
  this.age=30;

  // document.querySelectorAll('h1')!.forEach( element =>{
  //   element.innerHTML='<h1>Desde Angular</h1>'
  // })
}
}
