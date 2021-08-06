import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GraphicCard } from '../../models/graphic-card.model';

@Injectable({
  providedIn: 'root'
})
export class CardListService {
  constructor(private http: HttpClient) {}

  getCardList() {
    return this.http.get<GraphicCard[]>(`${environment.api}/graphics-cards`);
  }
}
