import { Component, inject } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {FormlyMatDatepickerModule} from '@ngx-formly/material/datepicker';
import { PageHeaderComponent } from '@shared';
import { Car , MappedCar} from '../car';
import { CarService } from '../car.service';

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
  ],
})
export class FormComponent {
  private readonly toast = inject(ToastrService);
  private readonly carService = inject(CarService)

  // Advanced Layout
  form2 = new FormGroup({});
  model2 = {};
  // model :Partial<Car> = {} ;
  fields2: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-sm-6',
          type: 'input',
          key: 'brand',
          templateOptions: {
            label: 'Brand',
            required: true,
          },
          
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
        {
          className: 'col-sm-6', // Add this for proper layout
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
          key: 'engineSize',
          templateOptions: {
            label: 'Engine Size',
            required: true,
            placeholder: 'Mileage',
            type: 'number',
            min:5 ,
            max:20 ,
            description:"Engine Size Of The Car"
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
          key: 'numberOfDoors',
          templateOptions: {
            label: 'Number Of Doors',
            required: true,
            placeholder: 'Number Of Doors',
            type: 'number',
            min:2 ,
            max:8 ,
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
          key: 'topSpeed',
          templateOptions: {
            label: 'Top Speed',
            required: true,
            placeholder: 'Top Speed',
            type: 'number',
            min:80 ,
            max:299 ,
            description:"To Speed KM/H"
          },
          validation: {
            messages: {
              required: (error, field: FormlyFieldConfig) => `${field.props?.label || 'This field'} is required`,
            },
          },
        },
        // {
        //   className: 'col-sm-3',
        //   type: 'combobox',
        //   key: 'cityId',
        //   templateOptions: {
        //     label: 'City',
        //     options: [
        //       { id: 1, name: '北京' },
        //       { id: 2, name: '上海' },
        //       { id: 3, name: '广州' },
        //       { id: 4, name: '深圳' },
        //     ],
        //     labelProp: 'name',
        //     valueProp: 'id',
        //     required: true,
        //     description: 'This is a custom field type.',
        //   },
        // },
        // {
        //   className: 'col-sm-3',
        //   type: 'input',
        //   key: 'zip',
        //   templateOptions: {
        //     type: 'number',
        //     label: 'Zip',
        //     max: 99999,
        //     min: 0,
        //     pattern: '\\d{5}',
        //   },
        // },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
       
        {
          className: 'col-sm-3', // Add this for proper layout
          type: 'input',
          key: 'price',
          templateOptions: {
            label: 'Price',
            required: true,
            placeholder: 'Price',
            type: 'number',
            description:"Price En DHs"
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

  // submit() {
  //   if (this.form.valid) {
  //     this.showToast(this.model);
  //   }
  // }

  submit2() {
    if (this.form2.valid) {

      /**
       * /cast
       */
      const car: Car = this.model2 as Car;
      console.log(this.form2.value) ;
      // cars = MappedCar<this.form2.value , cars> ;
      this.carService.saveCar([car]).subscribe({
        next: (cars) => this.toast.success("car with id " + cars[0].brand + " have added"),
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

}
