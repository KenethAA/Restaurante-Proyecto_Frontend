import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Transportistas } from 'src/app/api/models';
import { TransportistasControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-transportistas',
  templateUrl: './transportistas.component.html'
})
export class TransportistasComponent {
  listOfData: Transportistas[] = [ ];
  visible = false;
  form!: FormGroup;
  accion: boolean = true;
  idModificar: string = '';

  constructor(
    private transportistasService: TransportistasControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: [''],
      licencia: [''],
    });
  }

  ngOnInit(): void {
    this.getData();
   
}


getData():void{
  this.transportistasService.find().subscribe(data=>this.listOfData=data)
}

cancel(): void {
  this.nzMessageService.info('Su registro sigue activo! =D')
}

open(): void {
  this.visible = true;
  this.accion = true;
}

close(): void {
  this.visible = false;
  this.buildForm();
}

guardar():void{
  this.transportistasService.create({body:this.form.value}).subscribe((data: any) => {
    this.nzMessageService.success('El registro fue ingresado con exito!');
    this.listOfData = [...this.listOfData, data]
    this.buildForm();
    this.visible = false;
  }, (error) => {
    this.nzMessageService.error('El registro no pudo ser ingresado, por favor intente de nuevo');
    console.error(error);
  })
}
submitForm(): void {
  for (const i in this.form?.controls) {
    this.form?.controls[i].markAsDirty();
    this.form?.controls[i].updateValueAndValidity();
  }
}

}
