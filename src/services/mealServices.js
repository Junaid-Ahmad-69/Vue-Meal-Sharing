import axiosClient from "@/api/client.js";

export const mealServices = {
    getListMeals(){
        return axiosClient.get('/list.php?i=list')
    },
    getCategoryMeal (){
        return axiosClient.get('/categories.php')
    },
    getAreaList (){
        return axiosClient.get('/list.php?a=list')
    },
    getAreaMeals(val){
        return axiosClient.get(`search.php?s=${val}`)
    }
}