
window.onload=() =>{

    function toUpperCase(){
        let texto=document.getElementById("texto").value;
        //Cambiamos el texto a mayúsculas
        document.getElementById("texto").value=texto.toUpperCase()
    
    }
    function toUpperCasePropioElemento(element){   
        //Cambiamos el texto a mayúsculas
        element.value=element.value.toUpperCase()
    
    }

    let elemento = document.getElementById("texto");
    /*
    Manera chapucera*/
    /*
    elemento.addEventListener("keyup",function(){
    toUpperCase();
    });
    /*/
    elemento.addEventListener("keyup",(event) =>{    
        event.target.value=event.target.value.toUpperCase();
    });
}           
