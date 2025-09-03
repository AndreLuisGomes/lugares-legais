import { Component, OnInit } from '@angular/core';
import { Lugar } from '../../lugares/lugar';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../../lugares/lugar.service';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: false,
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit{

  lugares : Lugar[] = []
  categorias : Categoria[] = []
  nomeFiltro: string = ''
  categoriaFiltro: string = ''

  constructor(
    private categoriaService : CategoriaService,
    private lugarService : LugarService
  ){}

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe((c) => this.categorias = c);
    this.lugarService.obterTodos().subscribe((l) => this.lugares = l);
  }

  getTotalEstrelas(lugar: Lugar) : string{
    return '&#9733;'.repeat(lugar.avaliacao || 0) + '&#9734;'.repeat(5 - (lugar.avaliacao || 0))
  }

  filtrar(){
    this.lugarService.filtrar(this.nomeFiltro, this.categoriaFiltro)
      .subscribe((l) => this.lugares = l)
  }
}
