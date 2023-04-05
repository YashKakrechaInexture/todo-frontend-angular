import { Component, ElementRef, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  public isClicked = true;
  @Output() clickEvent = new EventEmitter<boolean>();

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ){

  }
  ngOnInit(): void {
    this.clickEvent.emit(this.isClicked);
      // const ulElement = this.el.nativeElement.querySelector(`.item-show-${id}`) as HTMLElement;
      // const isActive = ulElement.querySelector('.active') !== null;
      // if(isActive){
      //   this.renderer.setStyle(ulElement, 'display', 'block');
      // } else {
      //   this.renderer.setStyle(ulElement, 'display', displayValue);
      // }
  }

  toggleClick(event:any) {
    this.isClicked = !this.isClicked;
    this.clickEvent.emit(this.isClicked);
    if (this.isClicked) {
      // Move the main element to the right when the sidebar is opened
      // this.renderer.setStyle(document.body, 'position', 'relative');
      // this.renderer.setStyle(document.body, 'left', '250px');
      // this.renderer.setStyle(document.body, 'transition', 'left ease-in-out');
      this.renderer.setStyle(document.body, 'margin-left', '250px');
      this.renderer.setStyle(document.body, 'transition-timing-function', 'ease');
      this.renderer.setStyle(document.body, 'transition-property', 'all');
      this.renderer.setStyle(document.body, 'transition-duration', '0.4s');
    } else {
      // Reset the position of the main element when the sidebar is closed
      // this.renderer.removeStyle(document.body, 'position');
      // this.renderer.removeStyle(document.body, 'left');
      this.renderer.setStyle(document.body, 'margin-left', '0px');
      this.renderer.setStyle(document.body, 'transition-timing-function', 'ease');
      this.renderer.setStyle(document.body, 'transition-property', 'all');
      this.renderer.setStyle(document.body, 'transition-duration', '0.4s');
    }
  }

  dropdown(event:any){
    const id = event.target.closest('li').id;
    const ulElement = this.el.nativeElement.querySelector(`.item-show-${id}`) as HTMLElement;
    const spanElement = event.target.querySelector('span') as HTMLElement;
    spanElement?.classList?.toggle('rotate');

    // const displayValue = ulElement.style.display === 'none' || ulElement.style.display === '' ? 'block' : 'none';
    // this.renderer.setStyle(ulElement, 'display', displayValue);
    
    // const displayValue = ulElement.style.display === 'none' || ulElement.style.display === '' ? true : false;
    ulElement?.classList?.toggle('close-dropdown');
    // console.log(this.isClicked);
    // if(this.isClicked){
    //   this.renderer.addClass(ulElement, 'open-dropdown');
    // }else{
    //   this.renderer.removeClass(ulElement, 'open-dropdown');
    // }
    
    // const isActive = ulElement.querySelector('.active') !== null;
    // if(isActive){
    //   this.renderer.setStyle(ulElement, 'display', 'block');
    // } else {
    //   this.renderer.setStyle(ulElement, 'display', displayValue);
    // }
  }
}
