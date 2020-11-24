import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'shell-error',
  templateUrl: './error.container.html',
  styleUrls: ['./error.container.scss']
})
export class ErrorContainer {
  errorNumber!: string;
  errorMessage = 'There has been an error.';

  constructor(route: ActivatedRoute) {
    console.log('Yo:', route);
  }
}
