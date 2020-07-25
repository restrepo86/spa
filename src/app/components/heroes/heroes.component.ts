import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

public heroes: Heroe[] = [];

  constructor(
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.table(this.heroes);
  }

  verHeroe( index: number ) {
    this.router.navigate(['/heroe', index]);
  }

}
