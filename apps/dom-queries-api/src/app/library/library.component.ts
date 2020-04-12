import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, AfterViewInit {
  
  @ViewChild('ul', { read: ElementRef, static: false }) ul: ElementRef;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild('informations', { read: TemplateRef })
  informationsTpl: TemplateRef<any>;

  books: Book[] = [];

  constructor() {}

  ngOnInit() {
    this.books.push(new Book('Mon ami', '1976'));
    this.books.push(new Book('Les dieux voyagent toujours incognito', '2006'));
  }

  ngAfterViewInit() {

    console.log('elementRef of the ul HTML element', this.ul);
    const ev = this.informationsTpl.createEmbeddedView(null);

    console.log('embeddedView created from informationsTpl', ev);
    this.vc.insert(ev);
  }
}
