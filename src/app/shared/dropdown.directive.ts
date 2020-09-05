import { Directive, HostListener, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef) { }

  ngOnInit() {
    
  }

  @HostListener('click') clickEvent() {
    let classList = Array.from(this.elementRef.nativeElement.classList);

    if(!classList.includes("open"))
      this.renderer.addClass(this.elementRef.nativeElement, "open");
    else
      this.renderer.removeClass(this.elementRef.nativeElement, "open");
  }

}