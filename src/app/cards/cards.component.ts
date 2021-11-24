import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  param = { value: 'home' };
  experiences = [
    {description: 'embedded-systems', url: 'https://github.com/edmobe/repository-grouping/wiki/Embedded-systems', icon: 'fa-solid fa-microchip'},
    {description: 'image-video', url: 'https://github.com/edmobe/repository-grouping/wiki/Image-and-video-processing', icon: 'fa-solid fa-photo-film'},
    {description: 'algorithms-optimization', url: 'https://github.com/edmobe/repository-grouping/wiki/Algorithms-optimization', icon: 'fa-solid fa-gauge-simple'},
    {description: 'computer-architecture', url: 'https://github.com/edmobe/repository-grouping/wiki/Computer-architecture', icon: 'fa-solid fa-memory'},
    {description: 'operating-systems', url: 'https://github.com/edmobe/repository-grouping/wiki/Operating-systems', icon: 'fa-brands fa-linux'},
    {description: 'teaching', url: 'https://www.youtube.com/playlist?list=PLyLgsb5JMqkLZlOtKTPhE6SXsc3JqiXyQ', icon: 'fa-solid fa-chalkboard-user'},
    // {description: 'multicultural', url: 'https://google.com', icon: 'fa-solid fa-earth-americas'},
  ];

  public translateTo(language: string) {
    this.translate.use(language);
  }

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('es');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('es');
  }

  ngOnInit(): void {}
}
