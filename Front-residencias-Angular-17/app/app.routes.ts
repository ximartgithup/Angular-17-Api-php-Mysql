import { Routes } from '@angular/router';
import { ListarPropietariosComponent } from './components/listar-propietarios/listar-propietarios.component';
import { CrearPropietariosComponent } from './components/crear-propietarios/crear-propietarios.component';
import { ActualizarPropietariosComponent } from './components/actualizar-propietarios/actualizar-propietarios.component';
export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'listar-propietarios'},
  {path:'listar-propietarios',component:ListarPropietariosComponent},
  {path:'crear-propietarios',component:CrearPropietariosComponent},
  {path:'actualizar-propietarios/:id',component:ActualizarPropietariosComponent},
];
