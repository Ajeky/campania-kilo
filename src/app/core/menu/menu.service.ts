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
        icon: 'explore'
      },
      {
        link: '/cajas',
        label: this.translate.instant('BOXES'),
        icon: 'bookmark'
      },
      {
        link: '/entidades',
        label: this.translate.instant('ENTIDADES'),
        icon: 'local_library'
      }
    ];
  }
}
