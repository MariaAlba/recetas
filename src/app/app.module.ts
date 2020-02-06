import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecetasComponent } from './paginas/recetas/recetas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { RecetaFiltroPipe } from './pipes/receta-filtro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    NavbarComponent,
    FooterComponent,
    RecetaFiltroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,      // Modulo para usar Formularios
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
