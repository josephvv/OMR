import { Component, OnInit, ViewChild,ChangeDetectionStrategy,Input } from '@angular/core';
import{book} from '../book';
import { BookService } from '../book.service';
import { DatatableComponent } from '@swimlane/ngx-datatable/release';
import {PaginationInstance} from '../../../node_modules/ngx-pagination';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class BooksComponent implements OnInit {
  @Input() books:book[]=[];
     public filter: string = '';
    public maxSize: number = 7;
    public directionLinks: boolean = true;
    public autoHide: boolean = false;

//books:book[]
selectedBook: book
constructor(private bookService:BookService ) { }

 @ViewChild(DatatableComponent) table: DatatableComponent;
 public config: PaginationInstance = {
  id: 'advanced',
  itemsPerPage: 10,
  currentPage: 1
};
    public labels: any = {
        previousLabel: 'Previous',
        nextLabel: 'Next',
        screenReaderPaginationLabel: 'Pagination',
        screenReaderPageLabel: 'page',
        screenReaderCurrentLabel: `You're on page`
    };

    private popped = [];

    onPageChange(number: number) {
        console.log('change to page', number);
        this.config.currentPage = number;
    }

    pushItem() {
        let item = this.popped.pop() || 'A newly-created book!';
        this.books.push(item);
    }

    popItem() {
        this.popped.push(this.books.pop());
    }
onSelectBook(book){
  this.selectedBook = book
}
ngOnInit() {
   // console.log("this is in books init");
    this.getBooks()
  }

  getBooks():void{
    const books = this.bookService.getBooks()
    .subscribe(books=> this.books=books)
  }
  
}
