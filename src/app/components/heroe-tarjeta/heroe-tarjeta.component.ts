import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() public heroe: Heroe;
  @Input() public indice: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  verHeroe(): void {
    this.router.navigate(['/heroe', this.indice]);
  }

}
