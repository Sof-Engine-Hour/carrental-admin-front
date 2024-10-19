import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions, FormlyModule } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import { PageHeaderComponent } from '@shared';
import { BrandResponse, CarRequest , MappedCar} from '../car';
import { CarService } from '../car.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MtxSelectModule } from '@ng-matero/extensions/select';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss' ,
  
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FormlyModule ,
    FormlyMatDatepickerModule ,
    PageHeaderComponent,
    // MatFormFieldModule ,
    // MtxSelectModule ,

  ],
})
export class FormComponent {
  private readonly toast = inject(ToastrService);
  private readonly carService = inject(CarService)


  brandOptions = new BehaviorSubject<any[]>([]);
  modelOptions = new BehaviorSubject<any[]>([]);

  form2 = new FormGroup({});
  model2 = {};
  // model :Partial<Car> = {} ;
  fields2: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          type: 'select',
          key: 'brand',
          templateOptions: {
            label: 'Brand',
            required: true,
            options : this.brandOptions.asObservable() ,
            labelProp: 'name',
            valueProp:'id' ,
            placeholder: 'Choose A Brand',
            focus : () => this.updateBrands() ,
            change: (field: FormlyFieldConfig) => {
              const selectedValue : number = field.formControl?.value as number;
              this.updateModels(selectedValue) ;
              console.warn(selectedValue);
              
            },            
          },
          
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
        {
          className: 'col-sm-6',
          type: 'select',
          key: 'model',
          templateOptions: {
            label: 'Model',
            required: true,
            options : this.modelOptions.asObservable() ,
            labelProp: 'name',

            valueProp:'id' ,
            placeholder: 'Choose A Model',

            onChange: (event: any) => {
            },
            
          },
          
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
        
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-3', // Add this for proper layout
          type: 'input',
          key: 'mileage',
          templateOptions: {
            label: 'Mileage',
            required: true,
            placeholder: 'Mileage',
            type: 'number',
           
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
        {
          className: 'col-sm-3', // Add this for proper layout
          type: 'input',
          key: 'price',
          templateOptions: {
            label: 'Price',
            required: true,
            placeholder: 'Mileage',
            type: 'number',
            min:5 ,
            max:20 ,
            description:"Price Of The Rental"
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
        {
          className: 'col-sm-3', // Add this for proper layout
          type: 'input',
          key: 'color',
          templateOptions: {
            label: 'Color',
            placeholder: 'Color',
            type: 'input',
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
        {
          className: 'col-sm-3', // Add this for proper layout
          type: 'datepicker',
          key: 'year',
          templateOptions: {
            label: 'Select Car Year',
            required: true,
            placeholder: 'Choose a date',
            description :'The Year Where The Car Was Factory It'
            
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
      ],
    },
  ];


  ngOnInit(): void {//

    // this.updateBrands() ;
  }



  submit2() {
    if (this.form2.valid) {

      /**
       * /cast
       */
      const car: CarRequest = this.model2 as CarRequest;
      console.log(car) ;

      this.carService.saveCar([car]).subscribe({
        next: (cars) => this.toast.success(`car with id: ${cars[0].id} have added`),
        // error: () => this.toast.error("404 somthing warrng"),
      }) 
    }
    else {
      this.toast.error("You Shoud rempli form first");
    }
  }

  showToast(obj: any) {
    this.toast.success(JSON.stringify(obj));
  }

  


  // getBrands(): Observable<BrandResponse[]> {
    
  //   return this.brandsResponseObs ;
  // }

  updateBrands() :void {

    this.brandOptions.subscribe({
      next : (options)=>{
        if (options.length === 0) {
          this.carService.getListOfBrands().subscribe({
            next: (options: BrandResponse[]) => {
              this.brandOptions.next(options);
            },
          })
        }
      }
    })

  }

  updateModels(id : number):void{
    this.carService.getListOfModels(id).subscribe(
      {
        next : (models) => this.modelOptions.next(models) ,
        error : ()=> this.toast.error("There is error with fetching the models")
      }
    )
  }
}
