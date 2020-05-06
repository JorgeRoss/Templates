import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.sass'],
})
export class StartPageComponent implements OnInit, AfterViewInit {
  @ViewChild('slider') slider: ElementRef;
  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const elems = this.renderer.selectRootElement(
      this.slider.nativeElement,
      true
    );
    M.Slider.init(elems, { indicators: false, duration: 2000 });
  }

  ngOnInit(): void {}
}
