import {
  Component,
  ComponentFactoryResolver,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewRef
} from '@angular/core';
import { LibraryComponent } from './library/library.component';
import { Book } from './model/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  @ViewChild('vc1', { read: ViewContainerRef, static: true })
  vc1: ViewContainerRef;

  @ViewChild('vc2', { read: ViewContainerRef, static: true })
  vc2: ViewContainerRef;

  ctx = { books: [new Book('Book1','1960'), new Book('Book2','1970')]};

  constructor(
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit(): void {
    // 1° Create and insert a LibraryComponent dynamically into the view container

    // Get a factory for LibraryComponent
    const factory = this.cfr.resolveComponentFactory(LibraryComponent);
    // Create a LibraryComponent instance
    const componentRef = factory.create(this.injector);
    // Get the HostView of the LibraryComponent instance
    const libraryViewRef = componentRef.hostView;
    // Inserts its host view into this container.
    this.vc2.insert(libraryViewRef);

    // 2° Create and insert a LibraryComponent dynamically into the view container BUT this is the view container
    // which has created the component instance.

    // Create a LibraryComponent instance and inserts its host view into this container
    this.vc2.createComponent(factory);
  }
}
