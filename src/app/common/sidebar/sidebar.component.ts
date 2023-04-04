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
  }

  toggleClick(event:any) {
    this.isClicked = !this.isClicked;
    this.clickEvent.emit(this.isClicked);
  }

  dropdown(event:any){
    console.log(event.target.closest('li').id);
    const id = event.target.closest('li').id;
    const ulElement = this.el.nativeElement.querySelector(`.item-show-${id}`) as HTMLElement;
    // console.log(event.target);
    // const aElement = event.target.closest('a') as HTMLElement;
    // console.log(aElement);
    const spanElement = event.target.querySelector('span') as HTMLElement;
    console.log(spanElement.classList.contains('bi-caret-down'));
    // if(spanElement.classList.contains('bi-caret-down')){
    //   this.renderer.removeClass(spanElement,'bi-ceret-down');
    //   this.renderer.addClass(spanElement,'bi-ceret-up');
    //   spanElement.classList.remove('bi-caret-down');
    //   // spanElement.classList.add('bi-ceret-up');
    // }else{
    //   this.renderer.removeClass(spanElement,'bi-ceret-up');
    //   this.renderer.addClass(spanElement,'bi-ceret-down');
    //   spanElement.classList.remove('bi-caret-up');
    //   // spanElement.classList.add('bi-ceret-down');
    // }
    spanElement.classList.toggle('rotate');
    console.log(spanElement.classList.contains('bi-caret-down'));
    const displayValue = ulElement.style.display === 'none' || ulElement.style.display === '' ? 'block' : 'none';
    this.renderer.setStyle(ulElement, 'display', displayValue);
  }
}
