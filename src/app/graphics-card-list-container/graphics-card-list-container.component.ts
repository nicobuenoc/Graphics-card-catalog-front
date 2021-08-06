import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { mergeMap, startWith, tap } from 'rxjs/operators';
import { GraphicCard } from '../core/models/graphic-card.model';
import { graphicsCardListFilter } from '../store/graphics-card-list/selectors/graphics-card-list.selectors';

@Component({
  selector: 'app-graphics-card-list-container',
  templateUrl: './graphics-card-list-container.component.html',
  styleUrls: ['./graphics-card-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GraphicsCardListContainerComponent implements OnInit {
  config: any;
  graphicsCardList$: Observable<GraphicCard[]>;
  formFilter: FormGroup;

  constructor(private store: Store<{ graphicsCardList: GraphicCard[] }>) {}

  ngOnInit() {
    this.config = {
      itemsPerPage: 4,
      currentPage: 1
    };

    this.formFilter = new FormGroup({
      filter: new FormControl(null)
    });

    const filter = this.formFilter.get('filter');

    this.graphicsCardList$ = filter.valueChanges.pipe(
      startWith(''),
      mergeMap((filterValue) =>
        this.store
          .select(graphicsCardListFilter, filterValue)
          .pipe(tap((graphicsCardList) => (this.config.totalItems = graphicsCardList?.length)))
      )
    );
  }

  pageChanged(event: number) {
    this.config.currentPage = event;
  }
}
