import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatGptService {
  private apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'; // Reemplaza con la URL correcta de la API de ChatGPT
  private apiKey =''; // Reemplaza con tu clave de API de OpenAI

  constructor(private http: HttpClient) {}

  generateDocument(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    const requestData = {
      prompt: prompt,
      max_tokens: 100, // Cantidad máxima de tokens en la respuesta
    };

    return this.http.post(this.apiUrl, requestData, { headers });
  }
}
