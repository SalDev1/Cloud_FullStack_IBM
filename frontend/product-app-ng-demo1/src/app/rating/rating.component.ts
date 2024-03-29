import { Component, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})


export class RatingComponent implements OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.cropwidth = this.rating*75/5
  }

  ratingClicked: EventEmitter<string> = new EventEmitter<string>()

  // input --> receiving data from another component.
  @Input("rating")
  rating: number=0

  cropwidth: number=75

  onClick(): void{
    this.ratingClicked.emit(`rating clicked ${this.rating} was clicked.`)
  }
}
