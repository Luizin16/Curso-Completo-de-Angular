import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './helloworld/helloworld.component';

// Módulos do Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';  // Para utilizar o pipe "date"

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,  // Importando o módulo da toolbar
    MatCardModule,     // Importando o módulo do card
    MatButtonModule,   // Importando o módulo do botão
    MatInputModule,    // Importando o módulo do input (se necessário)
    MatFormFieldModule, // Se estiver usando campos de formulário
    MatIconModule,     // Se estiver utilizando ícones
    MatDatepickerModule, // Para trabalhar com datas
    MatNativeDateModule  // Necessário para utilizar o pipe "date"
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
