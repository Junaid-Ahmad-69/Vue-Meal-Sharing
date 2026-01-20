import {defineStore} from "pinia";
import {mealServices} from "@/services/mealServices.js";
import {notification} from "ant-design-vue";

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
        hasMealCount() {
            return this.meals.length === 0
        },
        hasAreaMealCount() {
            return this.areaMeals.length === 0
        },
        hasCategoryCount() {
            return this.categories.length === 0
        },

    },

    actions: {
        async fetchListMeals() {
            this.isLoading = true;
            this.error = null;
            try {
                const data = await mealServices.getListMeals();
                this.meals = data.meals || [];
            } catch (err) {
                this.error = err.message || "Failed to fetch meals";
                // message.error(this.error);
                notification.error({
                    message: 'Error Fetching',
                    description: this.error,
                });
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
            } catch (err) {
                this.error = err.message || "Failed to fetch category meals";
                notification.error({
                    message: 'Error Fetching',
                    description: this.error,
                });

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
                this.error = err.message || "Failed to fetch area list";
                notification.error({
                    message: 'Error Fetching',
                    description: this.error,
                });
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
                this.error = err.message || "Failed to fetch area meals";
                notification.error({
                    message: 'Error Fetching',
                    description: this.error,
                });
            } finally {
                this.isLoading = false;
            }
        },


    },
})