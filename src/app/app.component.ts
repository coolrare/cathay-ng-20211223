import { ArticleService } from './article.service';
import { Component, OnInit } from '@angular/core';
import { Article } from './article';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'conduit !!';
  subTitle = 'A place to share your <u>knowledge</u>.';

  // list: Article[] = this.articleService.articles;
  list: Article[] = [];

  originalList = this.list;

  keyword = '';

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    // this.articleService.getArticles().subscribe((result) => {
    //   console.log(result);
    //   this.list = result.articles;
    //   this.originalList = this.list;
    // });

    this.articleService
      .getArticles()
      .pipe(map((result) => result.articles))
      .subscribe((articles) => {
        console.log(articles);
        this.list = articles;
        this.originalList = this.list;
      });
  }

  searchArticle(keyword: string) {
    // this.list = this.originalList.filter(item => item.title.indexOf(keyword) !== -1);
    // this.list = this.articleService.filterArticles(this.originalList, keyword);
    this.keyword = keyword;

    // this.articleService.getArticlesByKeyword(keyword).subscribe(result => {
    //   this.list = result.articles;
    // });
  }
}
