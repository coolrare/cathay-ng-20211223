import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  keyword = 'test';

  constructor() { }

  ngOnInit(): void {
  }

  search(event: MouseEvent) {
    // console.log(event.altKey);
    console.log(this.keyword);
  }

}
