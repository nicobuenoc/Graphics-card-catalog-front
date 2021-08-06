import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GraphicCard } from '../core/models/graphic-card.model';
import { selectGraphicCard } from '../store/graphics-card-list/selectors/graphics-card-list.selectors';

@Component({
  selector: 'app-graphics-card-detail',
  templateUrl: './graphics-card-detail.component.html',
  styleUrls: ['./graphics-card-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardDetailComponent implements OnInit {
  grapichCard$: Observable<GraphicCard>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (!Number.isNaN(id)) {
      this.grapichCard$ = this.store.select(selectGraphicCard, id);
    }
  }
}
