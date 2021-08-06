import { Component, Input, OnInit } from '@angular/core';
import { GraphicCard } from 'src/app/core/models/graphic-card.model';

@Component({
  selector: 'app-graphics-card-list-element',
  templateUrl: './graphics-card-list-element.component.html',
  styleUrls: ['./graphics-card-list-element.component.scss']
})
export class GraphicsCardListElementComponent implements OnInit {
  graphicCard: GraphicCard;
  @Input('graphicCard') set setGraphicCard(graphicCard: GraphicCard) {
    this.graphicCard = graphicCard;
  }
  constructor() { }

  ngOnInit() {
  }

}
