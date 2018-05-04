import { Component, OnInit,Input } from '@angular/core';
import {book} from '../book'
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
@Input() book:book;
  constructor() { }

  ngOnInit() {
  }

}