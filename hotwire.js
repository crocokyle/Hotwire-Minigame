
var ToolSelected = false;

function hover(element) {
    if (ToolSelected == false) {
        if (element.id === "wire-nut") {
        var imageURL = "img/wire_nut_highlight.png"
        }
        else if (element.id === "wire-strippers") {
        var imageURL = "img/wire_strippers_highlight.png"
        }
        element.setAttribute('src', imageURL);
    }
}

function unhover(element) {
    if (ToolSelected == false) {
        if (element.id === "wire-nut") {
        var imageURL = "img/wire_nut.png"
        }
        else if (element.id === "wire-strippers") {
        var imageURL = "img/wire-strippers.png"
        }
        element.setAttribute('src', imageURL);
    }
}
    
$(document).ready(function(){
    $("#wire-strippers").click(function(){
        if (ToolSelected) {
            ToolSelected = false;
            $('#wire-strippers').attr("src", "img/wire-strippers.png"); /* Not highlited*/
            $('#wire-nut').attr("src", "img/wire_nut.png"); /* Not highlited*/
            $('#hotwire-minigame').css({'cursor': 'default'});
        } else {
            ToolSelected = "wire-strippers";
            $('#wire-strippers').attr("src", "img/wire_strippers_highlight.png"); /* highlited*/
            $('#hotwire-minigame').css({'cursor': 'url(cursors/wire-stripper.ico), default'});
        }
        console.log(ToolSelected);
    });

    $("#wire-nut").click(function(){
        if (ToolSelected) {
            ToolSelected = false;
            $('#wire-strippers').attr("src", "img/wire-strippers.png"); /* Not highlited*/
            $('#wire-nut').attr("src", "img/wire_nut.png"); /* Not highlited*/
            $('#hotwire-minigame').css({'cursor': 'default'});
        } else {
            ToolSelected = "wire-nut";
            $('#wire-nut').attr("src", "img/wire_nut_highlight.png"); /* highlited*/
            $('#hotwire-minigame').css({'cursor': 'url(cursors/wire-nut.ico), default'});
        }
        console.log(ToolSelected);
    });

    $("#temp_wires").click(function(){
        if (ToolSelected) {
            $("#hotwire-minigame").css("background-image", "url(img/bg-ON.gif)");
            var snd = new Audio("sounds/ACC-Power.wav"); // buffers automatically when created
            snd.play();
        }
    }); 
});
