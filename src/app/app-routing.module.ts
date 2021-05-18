import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {AudioComponent} from './componentes/audio/audio.component';
import {PlaylistComponent} from './componentes/playlist/playlist.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {path:'Inicio' , component:InicioComponent },
  {path:'Audio' , component:AudioComponent,canActivate:[AuthGuard] },
  {path:'Playlist' , component:PlaylistComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
