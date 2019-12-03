import { Component, EventEmitter, Output } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html'
})
export class OptionsComponent {
  currentLang = 'es';
  showSettings = false;
  options = {
    collapsed: false,
    boxed: false,
    dark: false,
    dir: 'ltr'
  };

  @Output()
  messageEvent = new EventEmitter();

  constructor(public translate: TranslateService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|es/) ? browserLang : 'es');
  }

  sendOptions() {
    this.messageEvent.emit(this.options);
  }
}
