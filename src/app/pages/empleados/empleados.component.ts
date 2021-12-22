import { Component, OnInit } from '@angular/core';
//Formularios reactivos
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Empleados } from 'src/app/models/empleados';
import { EmpleadosService } from 'src/app/services/empleados.service';
import { NzMessageService } from 'ng-zorro-antd/message';



/*
interface Person {
  key: string;s
  name: string;
  age: number;
  address: string;
}
*/
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  /*listOfData: Person[] = [

    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
*/
//Arreglo donde va caer toda la info de mongoDB que yo voy a consumir del Api
listOfEmpleados : Empleados[]=[];
visible = false;
//typescript
form!: FormGroup;
accion:boolean=true;
idModificar:string="";

  constructor(
    private empleadosServices:EmpleadosService,
    private nzMessageService:NzMessageService,
    private FormBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  private buildForm(){
    //Objeto que define la estructura del formulario
    this.form = this.FormBuilder.group({
      nombre: [''],
      edad: [null],
      puesto: [''],
    });
  }

  ngOnInit(): void {
    this.empleadosServices.getAllEmpleados().toPromise().then(
      (data: Empleados[])=>this.listOfEmpleados = data
    )
  }

  delete(id:string){
    this.empleadosServices.deleteEmpleados(id).toPromise().then(()=>{
      this.nzMessageService.warning('El registro fue eliminado con exito!');
      this.listOfEmpleados = this.listOfEmpleados.filter(x=>x.id!==id);
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser eliminado, por favor intente de nuevo');
      console.error(error);
    })
  
  }

  cancel():void{
this.nzMessageService.info('Su registro sigue activo =D')
  }

  open():void{
    this.visible = true;
    this.accion=true;
  }
  
  close(): void {
    this.visible = false;
    this.buildForm();
  }

  guardar():void{
    if(this.accion){
    this.empleadosServices.postEmpleados(this.form.value).toPromise().then((data:any)=>{
      //this.listOfEmpleados.push(data);
      this.nzMessageService.success('El registro fue ingresado con exito!');
      this.listOfEmpleados = [...this.listOfEmpleados,data]
      //Limpia el cormulario y lo cierra
      this.buildForm();
      this.visible = false;
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser ingresador, por favor intente de nuevo');
      console.error(error);
    })
  }else{
    console.log(this.form.value)
    this.empleadosServices.putEmpleados(this.idModificar,this.form.value).toPromise().then((data:any)=>{
      for(let elemento of this.listOfEmpleados.filter(x=>x.id===this.idModificar)){
        elemento.nombre=data.nombre;
        elemento.edad=data.edad;
        elemento.puesto=data.puesto;
        elemento.numero=data.numero;
        elemento.direccion=data.direccion;
      }
      this.nzMessageService.success('El registro fue actualizado con exito!');
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser ingresador, por favor intente de nuevo');
      console.error(error);
    })
    }  
  }

modificar(item:Empleados):void{
  this.accion=false;
  this.idModificar=item.id;
  this.visible = true;
  this.form=this.FormBuilder.group({
    nombre: [item.nombre],
    edad: [item.edad],
    puesto: [item.puesto],
    numero: [item.numero],
    direccion: [item.direccion]
  })
}

  submitForm(){
    for(const i in this.form?.controls){
      this.form?.controls[i].markAsDirty(); 
      this.form?.controls[i].updateValueAndValidity();
    }  
  }
}

