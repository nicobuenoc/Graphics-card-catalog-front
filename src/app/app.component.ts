import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadGraphicsCardList } from './store/graphics-card-list/actions/graphics-card-list.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Graphics-card-catalog-front';

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadGraphicsCardList());
  }
}
