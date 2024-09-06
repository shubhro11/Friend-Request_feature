let stat = document.querySelector("#stat");

// let remove = document.getElementById("removeFriend")
let add = document.getElementById("addFriend")
let flag = 0

// add.addEventListener("click", function(){
//     stat.innerHTML = "You are now Friends"
//     stat.style.color = "blue"
// })
// remove.addEventListener("click", function(){
//     stat.innerHTML = "Strangers"
//     stat.style.color = "red"
// })

add.addEventListener("click", function(){
    if(flag == 0){
        stat.innerHTML = "You are now Friends";
        stat.style.color = "blue";
        add.style.color = "white";
        add.style.backgroundColor = "rgb(220, 53, 69)";
        add.innerHTML = "Remove Friend";
        flag = 1
    }
    else{
        stat.innerHTML = "Strangers";
        stat.style.color = "black";
        add.style.color = "white";
        add.style.backgroundColor = "rgb(28, 180, 53)";
        add.innerHTML = "Add Friend";
        flag = 0
    }
})