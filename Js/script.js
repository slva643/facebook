function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email !== null && email !== "" && password !== null && password !== "") {
        greet();
        forgot();
        create();
    }else {
        alert("Fist Enter All Required Information")
    }

    function greet() {
        alert("Acess aproved! Your entry tucket to the Facebook has been stamped. ✅.")
    }

    function forgot() {
        alert("Your password is like a rare Pokémon-difficult to catch and even harder to remember")
    }

    function create() {
        alert("Congratulations! You accont creation is complete, Get ready to write your own digital story and make your mark on the online world")
    }
}