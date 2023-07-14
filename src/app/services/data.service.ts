import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'http://127.0.0.1:8000/api/suppproduct/';

  constructor(private httpclient:HttpClient) { }
  getData():Observable<any>{
  return  this.httpclient.get('127.0.0.1:8000/api/products')
  }
//function qui permet d'inserer des produits

  ajouterData(data:Product):Observable<any>{
    return  this.httpclient.post('127.0.0.1:8000/api/addProduct',data)
    }
    // supprimerData(id:number):Observable<any>{
    //   const url = `${this.baseUrl}${id}`;
    //   return this.httpclient.delete(url);
    //   }
    //Une autre de methode pour la fonction supprimer Data

     supprimerData(id:number):Observable<any>{
      return this.httpclient.delete(`127.0.0.1:8000/api/suppproduct/${id}`);
      }
        //Affichage du produit par Id
    listeparId(id:number):Observable<any>{
        return this.httpclient.get(`127.0.0.1:8000/api/product/${id}`);
        }
   modifierData(id:number,data:Product):Observable<any>{
          return this.httpclient.put(`127.0.0.1:8000/api/product/${id}`, data);
          }

}
