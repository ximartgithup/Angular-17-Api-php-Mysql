import { Component } from '@angular/core';
import { Propietario } from '../../model/Propietario';
import { Router,ActivatedRoute} from '@angular/router';
import { PropietariosService } from '../../servicios/propietarios.service';
import { FormGroup,ReactiveFormsModule,FormControl,Validators } from '@angular/forms';//para manejo de formularios reactivos
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-actualizar-propietarios',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './actualizar-propietarios.component.html',
  styleUrl: './actualizar-propietarios.component.css'
})
export class ActualizarPropietariosComponent {
  propietario : Propietario ={
    id:0,
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    correo: ''
  };

  form!: FormGroup; //para manejar formulario

  constructor(private ruta:Router,private servicio:PropietariosService,private activaterouter:ActivatedRoute){}


  ngOnInit(): void {

    let id = this.activaterouter.snapshot.paramMap.get('id');
    
    if(id)//si viene el id
    {
      this.servicio.getPropietario(id).subscribe(
        (resultado:any) =>{
          this.propietario=resultado[0];//formulario
        },
        (error) =>{console.log("error ",error)}
      );
    }

//---------- para manejar los formularios reacvtivos------
    this.form = new FormGroup({
      id: new FormControl('', [Validators.required]),
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required])
      });
  }

   //----- metdo para llamar el guardar 
 actualizarPropietario()
 {
   this.servicio.updtaePropietario(this.form.value).subscribe((res:any) => {
    console.log('Registro actualizado');
    alert(res['mensaje'])
    this.listarPropietario();
 })
 }


 listarPropietario()
  {
    this.ruta.navigate(['/listar-propietarios/']);
  }


}//End Class
