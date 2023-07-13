import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://projectscrimba-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const QuisListInDB = ref(database, "QuizDatabase")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list-el")


let shoppingList = []

function addToList() {
    let inputValue = inputFieldEl.value
    shoppingList.push(inputValue)
    console.log(shoppingList)
}



function render(list) {
    let renderedList = ""
    for (let i = 0; i < list.length; i++) {
        renderedList += `<li> ${list[i]}</li>`
        shoppingListEl.innerHTML = renderedList
    }
}

addButtonEl.addEventListener("click", function() {
   let inputValue = inputFieldEl.value
    addToList()
    inputFieldEl.value = " "
    render(shoppingList)
    push(shoppingListInDB, inputValue)
    
    
    // Challenge: Append a new <li> with text content inputValue to the 'shopping-list' <ul>
})

