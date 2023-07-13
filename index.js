import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://projectscrimba-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const QuizListInDB = ref(database, "QuizDatabase")


const answerListEl = document.getElementById("answer-list-el")


onValue(QuizListInDB, function(snapshot) {
  
    let itemsArray = Object.entries(snapshot.val())
    
    console.log(itemsArray)
    for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i]

         appendDataToForm(currentItem)
    }
})


function appendDataToForm(item) {
    let itemID = item[0]
    let itemValue = item[1]
    
    let newEl = document.createElement("li")
    
    newEl.textContent = itemValue
    
 
    answerListEl.append(newEl)
}
