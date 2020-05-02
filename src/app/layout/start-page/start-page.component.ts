import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.sass'],
})
export class StartPageComponent implements OnInit, AfterViewInit {
  @ViewChild('parallax') elParallax: ElementRef;
  @ViewChild('parallax2') elParallax2: ElementRef;
  constructor() {}

  ngAfterViewInit(): void {
    M.Parallax.init(this.elParallax.nativeElement);
    M.Parallax.init(this.elParallax2.nativeElement);
  }

  ngOnInit(): void {}
}
