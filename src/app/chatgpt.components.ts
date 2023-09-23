// Importa HttpClient y otros módulos necesarios
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tu-componente',
  templateUrl: './app.component.html',
})
export class chatgptComponents {
  prompt = '';
  documentoGenerado = '';

  constructor(private httpClient: HttpClient) {}

  generarDocumento(): void {
    const apiUrl = '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'; // Reemplaza con la URL de la API de chatGPT

    const requestData = {
      prompt: this.prompt,
    };

    this.httpClient.post(apiUrl, requestData).subscribe(
      (response: any) => {
        // Aquí puedes manejar la respuesta de la API
        this.documentoGenerado = response.documento; // Asegúrate de adaptar la estructura de la respuesta de la API
      },
      (error) => {
        console.error('Error al generar el documento:', error);
      }
    );
  }
}
