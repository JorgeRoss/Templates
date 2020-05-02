import {
  Directive,
  AfterViewInit,
  OnInit,
  Renderer2,
  ElementRef,
} from '@angular/core';
import * as M from 'materialize-css/dist/js/materialize';

@Directive({
  selector: '[appParallax]',
})
export class ParallaxInitDirective implements AfterViewInit {
  constructor(private renderer: Renderer2, private elem: ElementRef) {}

  ngAfterViewInit(): void {
    let elems = this.renderer.selectRootElement(this.elem.nativeElement, true);
    console.log(elems);

    M.Parallax.init(elems);
  }
}
