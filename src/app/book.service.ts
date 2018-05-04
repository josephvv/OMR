import { Injectable } from '@angular/core';
import{ HttpClient,HttpHeaders} from '@angular/common/http';
import{ book } from './book';
import{Observable} from'rxjs/observable';
import{of} from 'rxjs/observable/of'


@Injectable()
export class BookService {
  constructor(private http: HttpClient) {}
   private booksUrl = 'api/books';

  getBooks():Observable<book[]>{
    return this.http.get<book[]> (this.booksUrl);
  }
}
