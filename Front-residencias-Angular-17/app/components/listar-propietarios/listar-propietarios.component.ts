import { Component } from '@angular/core';
import { PropietariosService } from '../../servicios/propietarios.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-propietarios',
  standalone: true,
  imports: [],
  templateUrl: './listar-propietarios.component.html',
  styleUrl: './listar-propietarios.component.css'
})
export class ListarPropietariosComponent {
  propietarios: any;
constructor(private service:PropietariosService,private ruta:Router){}

ngOnInit(): void{
  this.showAll();
  
}

showAll()
{
  //alert("aqui toy");
  return this.service.getAll().subscribe(result => this.propietarios=result);
}
//---- elimianar
eliminarPropietario(id:string)
{
  console.log("Preparado para eliminar el "+id);
  return this.service.deletePropietario(id).subscribe(
    (datos:any) =>{
      if(datos['codigo'])
      {
      alert(datos['mensaje']);
      }
      this.showAll();
    
    },
    (error) => {console.log('Ocurrió un error ',error)}
  )
}

//--- llamar el componente Crear Cliente
nuevoPropietario()
{
  this.ruta.navigate(['/crear-propietarios/']);
}
//---- Editar un propietario
editarPropietario(id:string)
{
  this.ruta.navigate(['/actualizar-propietarios/'+id]);
}

}//End
