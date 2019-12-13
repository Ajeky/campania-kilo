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
        label: this.translate.instant('HOME'),
        icon: 'explore'
      },
      {
        link: '/cajas',
        label: this.translate.instant('BOXES'),
        icon: 'bookmark'
      },
      {
        link: '/entidades',
<<<<<<< Updated upstream
        label: this.translate.instant('DOCS'),
        icon: 'local_library'
=======
        label: this.translate.instant('ENTITIES'),
        icon: 'apartment'
>>>>>>> Stashed changes
      }
    ];
  }
}
