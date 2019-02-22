import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  // Angular only binds to public component properties.
  // this messageService will be used in the template
  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
