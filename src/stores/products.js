import { defineStore } from "pinia";
import axios from 'axios'
export const useProductsStore = defineStore("products" , {
    state: () => ({
        products: [],
       
    }),
    getters: () => ({
        
    }),
    actions: {
        async getProducts(id) {
            const result = await axios ('https://sc2houduan.bitlandweb.com/addons/shopro/goods/lists?category_id=69');
            if (result.status === 404) {
                this.router.push({ name: "NotFound" });
            }
            const response = await result.json;
            this.products = response
            console.log(this.products)
        }
    }
})