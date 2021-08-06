import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GraphicCard } from '../core/models/graphic-card.model';
import { loadGraphicsCardList } from '../store/graphics-card-list/actions/graphics-card-list.actions';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardListContainerComponent implements OnInit {
  config: any;
  graphicsCardList$: Observable<GraphicCard[]>;

  constructor(private store: Store<{ graphicsCardList: GraphicCard[] }>) {}

  ngOnInit() {
    this.config = {
      itemsPerPage: 4,
      currentPage: 1
    };

    this.graphicsCardList$ = this.store
      .select('graphicsCardList')
      .pipe(tap((graphicsCardList) => (this.config.totalItems = graphicsCardList?.length)));
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }
}
