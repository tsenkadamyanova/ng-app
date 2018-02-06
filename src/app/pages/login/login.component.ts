import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fadeInAnimation } from '../../shared/animations/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' },
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


}
