import { Component, OnInit } from '@angular/core';
import { globalConstants } from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent  {

  title = globalConstants.APP_TITLE;

}
