import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heroesNames: string[]=['SpiderMan', 'IronMan', 'Hulk', 'She Hulk', 'Thor', 'Darien'];
public deletedHero?: string;

removeLastHero(): void{
 this.deletedHero = this.heroesNames.pop()
}

}
