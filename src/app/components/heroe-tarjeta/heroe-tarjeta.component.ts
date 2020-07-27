import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() protected heroe: Heroe;
  @Input() protected indice: number;

  @Output() protected heroeSeleccionado: EventEmitter<number>;

  constructor(
    private router: Router
  ) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    //this.router.navigate(['/heroe', this.indice]);
    this.heroeSeleccionado.emit(this.indice);
  }

}
