import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {AudioComponent} from './componentes/audio/audio.component';
import {PlaylistComponent} from './componentes/playlist/playlist.component';
import {CategoriaComponent} from './componentes/categoria/categoria.component';
import {NavegacionComponent} from './componentes/navegacion/navegacion.component';
import {PsicologoComponent} from './componentes/psicologo/psicologo.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'Inicio' , component:InicioComponent },
  {path:'Audio' , component:AudioComponent,canActivate:[AuthGuard] },
  {path:'Playlist' , component:PlaylistComponent,canActivate:[AuthGuard] },
  {path:'Categoria' , component:CategoriaComponent,canActivate:[AuthGuard] },
  {path:'Navegacion' , component:NavegacionComponent,canActivate:[AuthGuard] },
  {path:'Psicologo' , component:PsicologoComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
