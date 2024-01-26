let monInput = document.querySelector("input")
let monBouton = document.querySelector("button")

monBouton.addEventListener('click', function(){
    let tableau = []
    let InputValue = monInput.value
    tableau.push(InputValue)
    monInput.value = ""
    
    for(let i=0; i<tableau.length; i++){
    document.querySelector("ul").innerHTML+=
    `
    <li>${tableau[i]}<button class="list">X</button></li>
    `
    }
    
    // if (document.querySelector("ul").firstChild){
    //     document.querySelector("p").innerHTML = ``
    
    // } else {
    //     document.querySelector("p").innerHTML = `Il n'y a rien`
    // }

   
    if (document.querySelector("ul").childElementCount !== 0){
        document.querySelector("p").innerHTML = ``
    } 
   
    let boutons = document.querySelectorAll(".list")
    boutons.forEach(function(bouton){
        bouton.addEventListener('click', function(){
            bouton.parentElement.remove()
            if (document.querySelector("ul").childElementCount !== 0){
                document.querySelector("p").innerHTML = ``
            } else {
                document.querySelector("p").innerHTML = `Il n'y a rien dans le panier`
            }

        })     
    })
})






