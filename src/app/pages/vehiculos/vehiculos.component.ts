import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Vehiculos } from 'src/app/api/models';
import { VehiculosControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html'
})
export class VehiculosComponent {
  listOfData: Vehiculos[] = [];
  visible = false;
  form!: FormGroup;
  accion: boolean = true;
  idModificar: string = '';

  constructor(
    private vehiculosService:VehiculosControllerService,
    private nzMessageService: NzMessageService,
    private formBuilder: FormBuilder
  ){
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      placa: [''],
      color: [''],
      marca:  [''],
      tipo:  ['']
    });
  }


  ngOnInit(): void {
      this.getData();
     
  }


  getData():void{
    this.vehiculosService.find().subscribe(data=>this.listOfData=data)
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
    this.vehiculosService.create({body:this.form.value}).subscribe((data: any) => {
      this.nzMessageService.success('El registro fue ingresado con exito!');
      this.listOfData = [...this.listOfData, data]
      this.buildForm();
      this.visible = false;
    }, (error) => {
      this.nzMessageService.error('El registro no pudo ser ingresado, por favor intente de nuevo');
      console.error(error);
    })
}

delete(id: string) {
  this.vehiculosService.deleteById({id}).subscribe(() => {
    this.nzMessageService.warning('El registro fue eliminado con exito!');
    this.listOfData = this.listOfData.filter(x => x.id !== id);
  }, (error) => {
    this.nzMessageService.error('El registro no pudo ser eliminado, por favor intente de nuevo');
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
