import { ArticleService } from './article.service';
import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduit !!';
  subTitle = 'A place to share your <u>knowledge</u>.';

  list: Article[] = this.articleService.articles;

  originalList = this.list;

  constructor(private articleService: ArticleService) {

  }

  searchArticle(keyword: string) {
    // this.list = this.originalList.filter(item => item.title.indexOf(keyword) !== -1);

    this.list = this.articleService.filterArticles(this.originalList, keyword);
  }
}
