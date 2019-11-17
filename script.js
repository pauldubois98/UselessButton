//var btn = document.getElementById("button")
//var toast = document.getElementById("toast")

var on=0

function toast2(){
    setTimeout(() => {
        toast.setAttribute("display", "block");
        console.log('ok');
        
    }, 2000);
}

function toast() {
    var x = document.getElementById("toast");
    x.className = "show";
    
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }