import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  id:any;
  data:any;
  product = new Product;
  constructor( private route:ActivatedRoute, private dataService:DataService){}
  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    this.id = this.route.snapshot.params['id']
   this.listedata();
     
 }

 listedata(){
  this.dataService.listeparId(this.id).subscribe(res =>{
    console.log(res);
    this.data = res;
    this.product = this.data;
    
    
  })
 }

 modifData(){
  this.dataService.modifierData(this.id,this.product).subscribe(res =>{
    Swal.fire('Produit modifie avec succès');
    
    
    
  })
 }

  

}
