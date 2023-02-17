import { Component } from '@angular/core';
import { globalConstants } from './shared/constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = globalConstants.APP_TITLE;
  version = globalConstants.VERSION;
}
