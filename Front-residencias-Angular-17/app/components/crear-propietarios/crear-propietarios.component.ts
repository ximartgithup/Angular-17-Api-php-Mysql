import { Component } from '@angular/core';
import { PropietariosService } from '../../servicios/propietarios.service';
import { Propietario } from '../../model/Propietario';
import { Router } from '@angular/router';
import { FormGroup,ReactiveFormsModule,FormControl,Validators } from '@angular/forms';//para manejar los formularios reactivos
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-crear-propietarios',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],//para manejo de formularios r
  templateUrl: './crear-propietarios.component.html',
  styleUrl: './crear-propietarios.component.css'
})
export class CrearPropietariosComponent {
  propietario : Propietario ={
    id:0,
    nombres: '',
    apellidos: '',
    direccion: '',
    telefono: '',
    correo: ''
  };
  form!: FormGroup; //para manejar formulario

constructor(private ruta:Router,private servicio:PropietariosService){}

ngOnInit(): void {
  //------------- para los formularios reactivos ------------
  this.form = new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    telefono: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required])
    });
}
 //----- metdo para llamar el guardar 
 guardarPropietario()
 {
   console.log('guardando Cliente : ',this.form.value);
   this.servicio.savePropietario(this.form.value).subscribe((res:any) => {
    console.log('Registro guardado');
    alert(res['mensaje'])
    this.listarPropietario();
 })
 }

 listarPropietario()
  {
    this.ruta.navigate(['/listar-propietarios/']);
  }

}//EndClass
