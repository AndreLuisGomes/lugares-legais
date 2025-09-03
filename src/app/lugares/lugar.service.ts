import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LugarService {


  constructor(private http: HttpClient) {}

  salvar(lugar: Lugar): Observable<Lugar> {
    return this.http.post<Lugar>('http://localhost:3000/lugares', lugar);
  }

  obterTodos(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>('http://localhost:3000/lugares');
  }

  filtrar(nome: string, categoria: string) : Observable<Lugar[]> {
    let params = new HttpParams();

    if (nome) {
      params = params.set('nome_like', nome);
    }
    if (categoria){
      params = params.set('categoria_like', categoria);
    }

    console.log(params)

    return this.http.get<Lugar[]>('http://localhost:3000/lugares',{
      params: params
    })
  }
}
