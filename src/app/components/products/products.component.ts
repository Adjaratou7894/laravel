import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  products:any
  product = new Product;
  constructor(private dataService:DataService){

  }
  
  ngOnInit(): void {
     this. getProductData();
    
  }
  getProductData(){
    console.log('Liste des Produits');
    this.dataService.getData().subscribe(res =>{
      console.log(res);
      this.products = res;
      
    })
  
  }
  ajoutProduit(){
    // console.log('Test ajout');
    // console.log(this.product);
    this.dataService.ajouterData(this.product).subscribe(res =>{
      // console.log(res);
      this.getProductData();
     
      
    }) 
  }
  deleteData(id:number){
    // console.log(id);
    this.dataService.supprimerData(id).subscribe(res =>{
      // console.log(res);
      this.getProductData();
     
      
    }) 
    

  }
 
  

}
