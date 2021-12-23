import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() keywordSearch = new EventEmitter();

  keyword = 'test';
  isHighlight = false;
  fontSize = 24;

  constructor() { }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    this.keywordSearch.emit(this.keyword);
    this.isHighlight = !this.isHighlight;
    this.fontSize += 2;
    // console.log(event.altKey);
    console.log(this.keyword);
  }

}
