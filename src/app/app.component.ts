import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, RouterState, RoutesRecognized, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public randomImg: string;
  private currRoute: Subscription;

  constructor(
    private router: Router,
    translate: TranslateService
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }

  public ngOnInit() {
    this.currRoute = this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
      }
      if (event instanceof NavigationEnd) {
        // if u dont need the state, you could even use this event-type..
        // console.log('navigation end=>', event);
      }
    });
    // console.log(this.currRoute);
    this.getRandomImage();
  }
  public ngOnDestroy() {
    this.currRoute.unsubscribe();
  }
  public getRandomImage(): void {
    // preload image
    const pic1 = new Image();
    const pic2 = new Image();
    const pic3 = new Image();
    const pic4 = new Image();
    const pic5 = new Image();
    pic1.src = '../assets/1.jpg';
    pic2.src = '../assets/2.jpg';
    pic3.src = '../assets/3.jpg';
    pic4.src = '../assets/4.jpg';
    pic5.src = '../assets/5.jpg';

    const items = [pic1.src, pic2.src, pic3.src, pic4.src, pic4.src];
    const item = items[Math.floor(Math.random() * items.length)];

    this.randomImg = item;
    console.log('get random image', this.randomImg);
    // return item;


  }
}
