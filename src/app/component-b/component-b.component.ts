import { ChangeDetectionStrategy, Component, DoCheck, NgZone, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentBComponent implements OnInit, DoCheck {
  test: string[] = [];

  constructor(private zone: NgZone) { }

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      // dssadsadsad

      this.zone.run(() => {
        //dsfdsfdsf
      })
    });
  }

  ngDoCheck(): void {
    this.test.push('Changed');
  }

}
