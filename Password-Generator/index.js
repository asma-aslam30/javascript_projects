const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password_1_El=document.getElementById("password_1_el")
let password_2_El=document.getElementById("password_2_el")

function generate_a_char(){
    let random_nr = Math.floor(Math.random() * characters.length);
    let random_item=characters[random_nr]
    return random_item
}

function generate_password(length_of_password){
    let i = 0;
    const n = length_of_password;
    password_1=""
    password_2=""
    do {
        password_1+=generate_a_char();
        password_2+=generate_a_char();
        i++;
    } while(i < n);
    password_1_El.textContent=password_1
    password_2_El.textContent=password_2
}
