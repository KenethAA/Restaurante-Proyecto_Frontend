import { Component, OnInit } from '@angular/core';
//Formularios reactivos
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Colaboradores } from 'src/app/models/colaboradores';
import { ColaboradoresService } from 'src/app/services/colaboradores.service';
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
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
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
listOfColaboradores : Colaboradores[]=[];
visible = false;
//typescript
form!: FormGroup;
accion:boolean=true;
idModificar:string="";

  constructor(
    private colaboradoresServices:ColaboradoresService,
    private nzMessageService:NzMessageService,
    private FormBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  private buildForm(){
    //Objeto que define la estructura del formulario
    this.form = this.FormBuilder.group({
      nombre: [''],
      numero: [null],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.colaboradoresServices.getAllColaboradores().toPromise().then(
      (data: Colaboradores[])=>this.listOfColaboradores = data
    )
  }

  delete(id:string){
    this.colaboradoresServices.deleteColaboradores(id).toPromise().then(()=>{
      this.nzMessageService.warning('El registro fue eliminado con exito!');
      this.listOfColaboradores = this.listOfColaboradores.filter(x=>x.id!==id);
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
    this.colaboradoresServices.postColaboradores(this.form.value).toPromise().then((data:any)=>{
      //this.listOfcolaboradores.push(data);
      this.nzMessageService.success('El registro fue ingresado con exito!');
      this.listOfColaboradores = [...this.listOfColaboradores,data]
      //Limpia el cormulario y lo cierra
      this.buildForm();
      this.visible = false;
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser ingresador, por favor intente de nuevo');
      console.error(error);
    })
  }else{
    console.log(this.form.value)
    this.colaboradoresServices.putColaboradores(this.idModificar,this.form.value).toPromise().then((data:any)=>{
      for(let elemento of this.listOfColaboradores.filter(x=>x.id===this.idModificar)){
        elemento.nombre=data.nombre;
        elemento.numero=data.numero;
        elemento.email=data.email;
      }
      this.nzMessageService.success('El registro fue actualizado con exito!');
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser ingresador, por favor intente de nuevo');
      console.error(error);
    })
    }  
  }

modificar(item:Colaboradores):void{
  this.accion=false;
  this.idModificar=item.id;
  this.visible = true;
  this.form=this.FormBuilder.group({
    nombre: [item.nombre],
    numero: [item.numero],
    email: [item.email]
  })
}

  submitForm(){
    for(const i in this.form?.controls){
      this.form?.controls[i].markAsDirty(); 
      this.form?.controls[i].updateValueAndValidity();
    }  
  }
}
