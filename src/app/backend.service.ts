import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BackendService {
    fruits: { name: string, price: number }[] = [];
    vegetables: { name: string, price: number }[] = [];
    electronics: { name: string, price: number }[] = [];

    constructor(private http: HttpClient) { }

    getFruits(sort_by: string, page_num: number) {
        let url = 'http://localhost:3300/food/fruits/'+sort_by+'/'+page_num.toString();
        return this.http.get<{fruit_id: number, name: string, price: number}[]>(url);
    }

    getVegetables(sort_by: string, page_num: number) {
        let url = 'http://localhost:3300/food/vegetables/' + sort_by + '/' + page_num.toString();
        return this.http.get<{ veg_id: number, name: string, price: number }[]>(url);
    }
    getElectronics(sort_by: string, page_num: number) {
        let url = 'http://localhost:3300/electronics/' + sort_by + '/' + page_num.toString();
        return this.http.get<{ electronics_id: number, name: string, price: number }[]>(url);
    }

}