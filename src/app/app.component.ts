import { Component, VERSION } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  public style: object = {};
  public chartStyle: object = {};
  public mapStyle: object = {};

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }
  onChartResizeEnd(event: ResizeEvent): void {
    this.chartStyle = {
      height: `${event.rectangle.height}px`,
    };
  }
  onMapResizeEnd(event: ResizeEvent): void {
    this.mapStyle = {
      height: `${event.rectangle.height}px`,
    };
  }
  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      width: `${event.rectangle.width}px`,
    };
  }
}
