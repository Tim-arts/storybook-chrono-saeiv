import { Component, ViewEncapsulation } from '@angular/core';
import {
  AlertOptions,
  AlertStatuses,
  AlertTypes,
  ToastService,
} from '@ngx-chrono-ui-kit/core';

@Component({
  selector: 'toast-example',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
})
export class ToastExampleComponent {
  classes?: string | string[];
  content?: string;
  title?: string;
  type?: AlertTypes;
  toastOptions?: AlertOptions;
  status?: AlertStatuses;

  constructor(public toastService: ToastService) {
  }

  close() {
    //
  }
}
