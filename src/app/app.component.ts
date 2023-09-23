import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ChatGptService } from './chat-gpt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prompt = '';
  documentoGenerado = '';

  constructor(private chatGptService: ChatGptService) {}

  generarDocumento(): void {
    this.chatGptService.generateDocument(this.prompt).subscribe(
      (response) => {
        this.documentoGenerado = response.choices[0].text;
      },
      (error) => {
        console.error('Error al generar el documento:', error);
      }
    );
  }
}