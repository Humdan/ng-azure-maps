import { Component } from '@angular/core';
import * as atlas from 'azure-maps-control';
import { ILayerEvent } from 'ng-azure-maps';

@Component({
  selector: 'app-root',
  template: '<azure-map zoom="2" [dataSources]="[dataSource, dataSourceRed]" (onLoad)="mapLoad()">' +
    '<symbol-layer dataSourceId="blue" (onMouseEnter)="mouseEnter(\'blue\')"></symbol-layer>' +
    '<symbol-layer dataSourceId="red" [iconOptions]="redIconOptions" (onMouseEnter)="mouseEnter(\'red\')"></symbol-layer>' +
    '</azure-map>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public dataSource: atlas.source.DataSource;
  public dataSourceRed: atlas.source.DataSource;

  public redIconOptions: atlas.IconOptions = {
    image: 'pin-red'
  };

  mapLoad() {
    this.dataSource = new atlas.source.DataSource('blue');
    this.dataSourceRed = new atlas.source.DataSource('red');
    for (let i = 0; i < 10; i++) {
      const point = new atlas.Shape(new atlas.data.Point([i * 5, i * 5]));
      this.dataSource.add([point]);
      const redPoint = new atlas.Shape(new atlas.data.Point([i * -5, i * 5]));
      this.dataSourceRed.add([redPoint]);
    }
  }

  public mouseEnter(color: string): void {
    console.log(color);
  }

}
