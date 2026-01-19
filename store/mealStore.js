import {defineStore} from "pinia";
import {mealServices} from "@/services/mealServices.js";

export const useMealStore = defineStore('mealStore', {
    state: ()=> ({
        isLoading : false,
        meals : [],
        categories : [],
        area : [],
        areaMeals: [],
        error: null,
    }),

    getters: {
        // mealCount (){
        //     this.meals = []
        //     return this.meals.length
        // }
    },



    actions: {
        async fetchListMeals() {
            this.isLoading = true;
            this.error = null;
            try {
                const data = await mealServices.getListMeals();
                this.meals = data.meals || [];
            } catch (err) {
                this.errors = err;
            } finally {
                this.isLoading = false;
            }
        },
        async fetchCategoryMeals() {
            this.isLoading = true;
            this.error = null;
            try {
                const data = await mealServices.getCategoryMeal();
                this.categories = data.categories || [];
                console.log(data)
            } catch (err) {
                this.errors = err;
            } finally {
                this.isLoading = false;
            }
        },

        async fetchAreaList() {
            this.isLoading = true;
            this.error = null;
            try {
                const data = await mealServices.getAreaList();
                this.area = data.meals || [];
            } catch (err) {
                this.errors = err;
            } finally {
                this.isLoading = false;
            }
        },
        async fetchAreaMeals(val) {
            this.isLoading = true;
            this.error = null;
            try {
                const data = await mealServices.getAreaMeals(val);
                this.areaMeals = data.meals || [];
            } catch (err) {
                this.errors = err;
            } finally {
                this.isLoading = false;
            }
        },


    },
})