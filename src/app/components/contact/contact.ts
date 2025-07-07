import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Toast } from 'primeng/toast';

import { COLORS, contact } from '../../../constants';
import { Nav } from '../shared/nav/nav';

@Component({
  selector: 'app-contact',
  imports: [ButtonModule, Nav, Toast],
  providers: [MessageService],
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  public readonly emailAddress = 'adrianbinkley@gmail.com';
  public readonly blurb = contact;
  constructor (private clipboard: Clipboard, private msgSvc: MessageService) {}

  public copyEmail() {
    this.clipboard.copy(this.emailAddress);
    this.msgSvc.add({
      severity: 'info',
      summary: 'Copied',
      detail: 'Email address copied to clipboard',
      life: 3000
    });
  }

  public readonly emailCopyBtn = {
    colorScheme: {
      light: {
        root: {
          primary: {
            color: COLORS.ACCENT,
            background: COLORS.PRIMARY,
            borderColor: COLORS.ACCENT,
          },
        },
      },
    },
  };
}
