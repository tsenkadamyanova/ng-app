import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CustomMaterialModule } from './shared/material.module';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateService, TranslatePipe } from '@ngx-translate/core';
import { TranslateStore } from '@ngx-translate/core/src/translate.store';
import { Observable } from 'rxjs/Observable';
import { AuthGuard } from './core/auth.guard';
import { Router, RouterModule, Routes, provideRoutes } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const testTranslation: any = { 'TITLE': 'This is a test' };

export class TranslateServiceStub {

  public get(key: any): any {
    Observable.of(testTranslation);
  }
  public setDefaultLang(lang: any): void {}
  public use(lang: any): void {}
}

@Component({
  selector: 'app-test-cmp',
  template: '<div class="title">Hello test</div>'
})
class TestRouterComponent {
}

const config: Routes = [
  {
      path: '', component: TestRouterComponent
  }
];


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomMaterialModule,
        RouterTestingModule,
        RouterModule,
        TranslateModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent,
        TestRouterComponent

      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: TranslateService, useClass: TranslateServiceStub },
        provideRoutes(config)
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should check img alt', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('img').title).toContain('Welcome');
  }));
});
