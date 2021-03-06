import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChange, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph',{static: true}) contentParagraph: ElementRef;
  constructor() { }

  ngOnChanges(move : SimpleChange): void {
    console.log('ngOnChange called');
    console.log(move);
  }

  ngOnInit(): void {
    console.log('ngoninit called');
    console.log('Text content : ' +this.header.nativeElement.textContent);
    console.log('text content of paragraph' + this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('text content of paragraph' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentCheck called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('Text content : ' +this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewCheck called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }

}
