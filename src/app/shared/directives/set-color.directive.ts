import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[SetColor]',
})
export class SetColorDirective implements OnInit {
  count = 0;
  @Input() types: any[] = [];
  @Input() isLight: boolean = true;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngOnInit(): void {
    this.count = this.count + 1;

    let bgClass = `bg-color-${this.getPrincipalType()}${
      this.isLight ? '-light' : ''
    }`;
    this.renderer.addClass(this.hostElement.nativeElement, bgClass);
  }

  getPrincipalType() {
    return this.types.filter((x) => x.slot === 1)[0]?.type.name;
  }
}
