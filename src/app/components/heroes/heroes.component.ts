import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

public heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
  ) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.table(this.heroes);
  }

}
