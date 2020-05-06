import {
  Directive,
  AfterViewInit,
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
    const elems = this.renderer.selectRootElement(this.elem.nativeElement, true);
    M.Parallax.init(elems);
  }
}
