import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {AudioComponent} from './componentes/audio/audio.component';
import {PlaylistComponent} from './componentes/playlist/playlist.component';
import {CategoriaComponent} from './componentes/categoria/categoria.component';
import {NavegacionComponent} from './componentes/navegacion/navegacion.component';
import {PsicologoComponent} from './componentes/psicologo/psicologo.component';
import {ImportacionComponent} from './componentes/importacion/importacion.component';
import {SolicitudComponent} from './componentes/solicitud/solicitud.component';
import {BonificacionComponent} from './componentes/bonificacion/bonificacion.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'Inicio' , component:InicioComponent },
  {path:'Audio' , component:AudioComponent,canActivate:[AuthGuard] },
  {path:'Playlist' , component:PlaylistComponent,canActivate:[AuthGuard] },
  {path:'Categoria' , component:CategoriaComponent,canActivate:[AuthGuard] },
  {path:'Navegacion' , component:NavegacionComponent},
  {path:'Psicologo' , component:PsicologoComponent,canActivate:[AuthGuard] },
  {path:'Importacion' , component:ImportacionComponent},
  {path:'Solicitud' , component:SolicitudComponent},
  {path:'Bonificacion' , component:BonificacionComponent,canActivate:[AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
