import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-live-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css']
})
export class LiveChatComponent {
  messages: string[] = [];
  message: string = '';

  sendMessage(): void {
    if (this.message.trim() !== '') {
      this.messages.push(this.message);
      this.message = '';
    }
  }
}
