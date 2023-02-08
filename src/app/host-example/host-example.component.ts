import { Component, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-host-example',
  template: `
    <h3 [ngStyle]="{ 'background-color': backgroundColor }">Hover over me!</h3>
  `
})
export class HostExampleComponent {

  constructor(private el: ElementRef, private rendered: Renderer2) {

  }

  backgroundColor = 'white';

  @HostListener('mouseenter')
  mouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.backgroundColor = 'white';
  }
}
