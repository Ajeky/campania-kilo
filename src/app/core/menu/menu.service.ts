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
<<<<<<< HEAD
<<<<<<< Updated upstream
        label: this.translate.instant('DOCS'),
        icon: 'local_library'
=======
        label: this.translate.instant('ENTITIES'),
        icon: 'apartment'
>>>>>>> Stashed changes
=======
        label: this.translate.instant('ENTIDADES'),
        icon: 'apartment'
>>>>>>> cce296db1d706553bf122d79adbff2bee2382bef
      }
    ];
  }
}
