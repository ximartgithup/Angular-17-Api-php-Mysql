import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Propietario } from '../model/Propietario';
@Injectable({
  providedIn: 'root'
})
export class PropietariosService {
API_URL='http://localhost/Apiresidencia/';
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

  constructor(private http:HttpClient) { }

  getAll()
  {
    return this.http.get(this.API_URL+'getpropietario.php');
  }

  //--- Eliminar un propietario
  deletePropietario(id:string){
    if(confirm("Desea eliminar el cliente con id: "+id))
    {
      let datos={"id":+id};
      console.log("ruta para eliminar",this.API_URL+'deletepropietario.php');
      return this.http.post(this.API_URL+'deletepropietario.php',datos);
    }
    return this.getAll();
  }

savePropietario(reg:Propietario)  {
  return this.http.post(this.API_URL+'savepropietario.php',reg);
}

updtaePropietario(reg:Propietario){
  return this.http.put(this.API_URL+'updatepropietario.php', JSON.stringify(reg));
}

 //--- retorne un cliente dado un id
 getPropietario(id:string)
 {
   return this.http.get(this.API_URL+'getpropietario.php?id='+id);
 }

}//EndClass
