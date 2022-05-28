let state = false;

function functionOnClick() {
    state = !state;
    var haveUser = document.getElementsByClassName("group")[0];
    var loginScreen = document.getElementsByClassName("group")[1];
    console.log(state);
    if (state) {
        haveUser.style.display = "none";
        loginScreen.style.display = "flex";
    }else{
        haveUser.style.display = "flex";
        loginScreen.style.display = "none";
    }
}