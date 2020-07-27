import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-busqueda.heroes',
  templateUrl: './busqueda.heroes.component.html'
})
export class BusquedaHeroesComponent implements OnInit {

  protected heroes: Heroe[];
  protected termino: string;

  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.heroes = this.heroesService.buscarheroes(params.termino);
      this.termino = params.termino;
    });
  }

}
