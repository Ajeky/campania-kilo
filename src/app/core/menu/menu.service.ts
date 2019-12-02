import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class MenuService {

  constructor(public translate: TranslateService) {}

  getAll() {
    return [
      {
        link: '/',
        label: this.translate.instant('HOME'),
        icon: 'explore'
      },
      {
        link: '/productos',
        label: this.translate.instant('PRODUCTS'),
        icon: 'shopping_basket'
      },
      {
        link: '/cajas',
        label: this.translate.instant('BOXES'),
        icon: 'all_inbox'
      },
      {
        link: '/entidades',
        label: this.translate.instant('ENTIDADES'),
        icon: 'apartment'
      }
    ];
  }
}
