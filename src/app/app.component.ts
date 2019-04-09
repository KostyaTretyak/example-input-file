import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormControl, Validators } from '@ng-stack/forms';

@Component({
  selector: 'my-app',
  template: `
  <p>Tap on this window and press <code>Ctrl+Shift+I</code> to see console.log() output</p>

  <input
    type="file"
    accept=".jpg,.jpeg,.png"
    (select)="onSelect($event)"
    [formControl]="formControl"
  >
`
})
export class AppComponent implements OnInit {
  formControl: FormControl<FormData>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const validator = Validators.fileMaxSize(1024 * 1024);
    this.formControl = new FormControl(null, validator);
  }

  onSelect(files: File[]) {
    // You can get selected files from `select` output event on `input[type=file]`
    console.log('selected files:', files);

    const validErr = this.formControl.getError('fileMaxSize');

    if (validErr) {
      const requiredSize = Math.round(validErr.requiredSize / 1024);
      const actualSize = Math.round(validErr.actualSize / 1024);
      const msg = `Every file should not exceed ${requiredSize} kB (you upload ${actualSize} kB)`;
      this.showMsg(msg);
      return;
    }

    // Value of formControl here is instance of FormData and it's OK to directly upload this value.
    const formData = this.formControl.value;

    this.httpClient.patch('api/users/250/avatars/1', formData).subscribe(() => {
      this.showMsg('Avatar uploaded successfully');
    });
  }

  private showMsg(msg: string) {
    console.log('%c' + msg, 'color: brown');
    console.log('%c' + '='.repeat(60), 'color: brown');
  }
}

