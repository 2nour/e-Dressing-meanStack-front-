import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SellerService } from './../../../services/seller.service'
import { Product } from './../../../models/product'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  addProdForm: FormGroup;
  selectedFile: File;

  constructor(private fb: FormBuilder, private _sellerService: SellerService, private toastr: ToastrService,private router :Router) {

    this.addProdForm = fb.group({

      productName: new FormControl("", [

        Validators.required,
      ]),

      productDisc: new FormControl("", [

        Validators.required,
      ]),

      productPrice: new FormControl("", [

        Validators.required,
      ]),

      productQuantity: new FormControl("", [

        Validators.required,
      ]),

      productPic: new FormControl("", [

        Validators.required,
      ]),

      productColor: new FormControl("", [

        Validators.required,
        Validators.pattern('[a-zA-Z][a-zA-Z]+')

      ]),

      idSeller: new FormControl("", [

        Validators.required,
      ])

    })

  }

  get pName() {
    return this.addProdForm.get('productName');
  }
  get pDisc() {
    return this.addProdForm.get('productDisc');
  }

  get pPic() {
    return this.addProdForm.get('productPic');
  }

  get pColor() {
    return this.addProdForm.get('productColor');
  }

  get pPrice() {
    return this.addProdForm.get('productPrice');
  }

  get idSeller() {
    return this.addProdForm.get('idSeller');
  }

  get pQtt() {
    return this.addProdForm.get('productQuantity');
  }


  ngOnInit() {
  }


  onFileSelected(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

  }

  addProduct() {

    const fd = new FormData();
    let data = this.addProdForm.value;
    console.log(data.productDisc);
    
    const p = new Product(data.productName, data.productDisc, data.productPrice, data.productQuantity, data.productColor);
   
    fd.append('image', this.selectedFile, this.selectedFile.name);
    fd.append('product', JSON.stringify(p));

    this._sellerService.addProduct(fd).subscribe((res) => {
      this.toastr.success(' product added');
      this.router.navigate['/product list'];
      
      console.log(res);
      
    }, (err) => {
      this.toastr.error('error');
      console.log(err);
    });
    this.addProdForm.reset();

  }


}
