// let mealForm = document.getElementById("myMealForm")
// let mealName = document.getElementById("mealName")
// let submitBtn = document.getElementById("btn")
// let instructs = document.getElementById("intruct")
// let mealImg = document.getElementById("mealImg")
// let mealTitle = document.getElementById("mealTitle")

// mealForm.addEventListener("submit",function(e){

//     e.preventDefault()

//     let request = new XMLHttpRequest()

//     let myMeal = mealName.value

//     let apiUrl= `https://www.themealdb.com/api/json/v1/1/search.php?s=${myMeal}`


//     request.open("GET", apiUrl, true)
//     request.send()
//     request.onreadystatechange = function(){
//         if(request.readyState ===4 && request.status===200){
//             let meals = JSON.parse(request.responseText)

//             let ingredient1 = meals.meals[0].strInstructions
//             let mealImage = meals.meals[0].strMealThumb
//             let dishname= meals.meals[0].strMeal
//             mealTitle.textContent = dishname
//             mealImg.setAttribute("src", mealImage)

//            console.log(mealImage)
//         }
//     }
// })

let searchForm = document.getElementById("mealForm")
let dishName = document.getElementById("mealName")
let dishImage =document.getElementById("mealImg")
let dishTitle =document.getElementById("mealTitle")
let dishCategory =document.getElementById("mealCat")
let dishLocation =document.getElementById("mealLocale")
let dishIngredients =document.getElementById("ingredientWrap")
let dishInstruction =document.getElementById("mealInstruct")
let dishSearchResult =document.getElementById("searchResult")

searchForm.addEventListener("submit", function(e){

    e.preventDefault()

    let request = new XMLHttpRequest()

    let myMeal= dishName.value

    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${myMeal}`

    request.open("GET", url, true)
    
    request.send()

    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){

            let meals = JSON.parse(request.responseText)

            let mealImage = meals.meals[0].strMealThumb
            dishImage.setAttribute("src", mealImage)

            let myMealTitle =  meals.meals[0].strMeal
            dishTitle.textContent = myMealTitle

            let myMealCategory =  meals.meals[0].strCategory
            dishCategory.textContent = myMealCategory

            let myMealArea =  meals.meals[0].strArea
            dishLocation.textContent = myMealArea

            let myMealIngredientsOne =  meals.meals[0].strIngredient1
            let myMealIngredientsTwo =  meals.meals[0].strIngredient2
            let myMealIngredientsThree =  meals.meals[0].strIngredient3
            let myMealIngredientsFour =  meals.meals[0].strIngredient4
            let myMealIngredientsFive =  meals.meals[0].strIngredient5
            let myMealIngredientsSix =  meals.meals[0].strIngredient6
            let myMealIngredientsSeven =  meals.meals[0].strIngredient7
            let myMealIngredientsEight =  meals.meals[0].strIngredient8
            let myMealIngredientsNine =  meals.meals[0].strIngredient9
            let myMealIngredientsTen =  meals.meals[0].strIngredient10
            let myMealIngredientsEleven =  meals.meals[0].strIngredient11
            let myMealIngredientsTwelve =  meals.meals[0].strIngredient12
            let myMealIngredientsThirteen =  meals.meals[0].strIngredient13
            let myMealIngredientsFourteen =  meals.meals[0].strIngredient14
            let myMealIngredientsFifteen =  meals.meals[0].strIngredient15
            let myMealIngredientsSixteen =  meals.meals[0].strIngredient16
            let myMealIngredientsSeventeen =  meals.meals[0].strIngredient17
            let myMealIngredientsEighteen =  meals.meals[0].strIngredient18
            let myMealIngredientsNineteen =  meals.meals[0].strIngredient19
            let myMealIngredientsTwenty =  meals.meals[0].strIngredient20
            
            dishIngredients.textContent = myMealIngredientsOne.concat(" ", myMealIngredientsTwo, " ", myMealIngredientsThree, " ", myMealIngredientsFour, " ", myMealIngredientsFive, " " ,myMealIngredientsSix, " ",myMealIngredientsSeven, " ",myMealIngredientsEight, " ", myMealIngredientsNine, " ",myMealIngredientsTen)


            let myMealInstructions =  meals.meals[0].strInstructions
            dishInstruction.textContent = myMealInstructions

            if(dishSearchResult.classList.contains("searchresult-container")){
                dishSearchResult.classList.remove("hide-result")
               
            }




        }
    }
})
