import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.less']
})
export class AutocompleteComponent implements OnInit {
  symbols: string[] = [];
  browsedSymbols: string[] = [];
  @Output() symbolSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    let symbols = localStorage.getItem('symbols');
    if (symbols)
      this.symbols = JSON.parse(symbols) as string[];      
    this.browsedSymbols = this.symbols;
  }

  browseSymbol(event: any): void {
    if (event.target.value === '') {
      this.browsedSymbols = this.symbols;
    }
    this.browsedSymbols = this.symbols.filter(symbol => symbol.startsWith((event.target.value as string).toUpperCase()));
  }

  selectSymbol(event: any): void {
    console.log(event.target.value);
    this.symbolSelected.emit(event.target.value);
  }

}
