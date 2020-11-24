import { Component } from '@angular/core';

@Component({
  selector: 'shell-error',
  templateUrl: './page-not-found.container.html',
  styleUrls: ['./page-not-found.container.scss']
})
export class PageNotFoundContainer {
  errorNumber = '404';
  errorMessage = 'The page you are looking for could not be found!';
}
