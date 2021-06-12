import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule}  from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { AudioComponent } from './componentes/audio/audio.component';
import { PlaylistComponent } from './componentes/playlist/playlist.component';
import { CategoriaComponent } from './componentes/categoria/categoria.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { PsicologoComponent } from './componentes/psicologo/psicologo.component';
import { ImportacionComponent } from './componentes/importacion/importacion.component';
import { SolicitudComponent } from './componentes/solicitud/solicitud.component';
import { BonificacionComponent } from './componentes/bonificacion/bonificacion.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    AudioComponent,
    PlaylistComponent,
    CategoriaComponent,
    NavegacionComponent,
    PsicologoComponent,
    ImportacionComponent,
    SolicitudComponent,
    BonificacionComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
