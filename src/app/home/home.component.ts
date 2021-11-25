import { Component, OnInit, ViewChild } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { CardsComponent } from '../cards/cards.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(CardsComponent) cardsComponent: CardsComponent;

  param = { value: 'home' };
  active = 0;

  /* ===================================== NAVIGATION FUNCTIONS ===================================== */
  // isHomeActive(): boolean {
  //   return this.active === 0;
  // }
  // isAboutActive(): boolean {
  //   return this.active === 1;
  // }
  // isWorkActive(): boolean {
  //   return this.active === 2;
  // }
  // isContactActive(): boolean {
  //   return this.active === 3;
  // }

  // goHome(): void {
  //   this.active = 0;
  // }
  // goAbout(): void {
  //   this.active = 1;
  // }
  // goWork(): void {
  //   this.active = 2;
  // }
  // goContact(): void {
  //   this.active = 3;
  // }

  /* ===================================== TRANSLATION FUNCTIONS ===================================== */

  private translateTo(language: string) {
    this.translate.use(language);
  }

  translateToSpanish() {
    this.translateTo('es');
    this.cardsComponent.translateTo('es');
  }

  translateToGerman() {
    this.translateTo('de');
    this.cardsComponent.translateTo('de');
  }

  translateToEnglish() {
    this.translateTo('en');
    this.cardsComponent.translateTo('en');
  }

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('es');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('es');
  }
  ngOnInit(): void {}
}
