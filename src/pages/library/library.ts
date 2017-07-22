import { Component, OnInit } from '@angular/core';
import { Quote } from "../../quotes_data/quote_interface";
import quotes from '../../quotes_data/quotes_data';
import { QuotesPage } from "../quotes/quotes";

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quotesPage = QuotesPage;
  quoteCollection: {category: string, quotes: Quote[], icon: string}[];

  ngOnInit() {
    this.quoteCollection = quotes;
  }
}
