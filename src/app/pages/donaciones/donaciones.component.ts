import { Component, OnInit } from '@angular/core';
//Formularios reactivos
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Donaciones } from 'src/app/models/donaciones';
import { DonacionesService } from 'src/app/services/donaciones.service';
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
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent implements OnInit {
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
listOfDonaciones : Donaciones[]=[];
visible = false;
//typescript
form!: FormGroup;
accion:boolean=true;
idModificar:string="";

  constructor(
    private donacionesServices:DonacionesService,
    private nzMessageService:NzMessageService,
    private FormBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  private buildForm(){
    //Objeto que define la estructura del formulario
    this.form = this.FormBuilder.group({
      fundacion: [''],
      monto: [null],
      fecha: [''],
    });
  }

  ngOnInit(): void {
    this.donacionesServices.getAllDonaciones().toPromise().then(
      (data: Donaciones[])=>this.listOfDonaciones = data
    )
  }

  delete(id:string){
    this.donacionesServices.deleteDonaciones(id).toPromise().then(()=>{
      this.nzMessageService.warning('El registro fue eliminado con exito!');
      this.listOfDonaciones = this.listOfDonaciones.filter(x=>x.id!==id);
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
    this.donacionesServices.postDonaciones(this.form.value).toPromise().then((data:any)=>{
      //this.listOfDonaciones.push(data);
      this.nzMessageService.success('El registro fue ingresado con exito!');
      this.listOfDonaciones = [...this.listOfDonaciones,data]
      //Limpia el cormulario y lo cierra
      this.buildForm();
      this.visible = false;
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser ingresador, por favor intente de nuevo');
      console.error(error);
    })
  }else{
    console.log(this.form.value)
    this.donacionesServices.putDonaciones(this.idModificar,this.form.value).toPromise().then((data:any)=>{
      for(let elemento of this.listOfDonaciones.filter(x=>x.id===this.idModificar)){
        elemento.fundacion=data.fundacion;
        elemento.monto=data.monto;
        elemento.fecha=data.fecha;
      }
      this.nzMessageService.success('El registro fue actualizado con exito!');
    },(error)=>{
      this.nzMessageService.error('El registro no pudo ser ingresador, por favor intente de nuevo');
      console.error(error);
    })
    }  
  }

modificar(item:Donaciones):void{
  this.accion=false;
  this.idModificar=item.id;
  this.visible = true;
  this.form=this.FormBuilder.group({
    fundacion: [item.fundacion],
    monto: [item.monto],
    fecha: [item.fecha]
  })
}

  submitForm(){
    for(const i in this.form?.controls){
      this.form?.controls[i].markAsDirty(); 
      this.form?.controls[i].updateValueAndValidity();
    }  
  }
}
