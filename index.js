const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "ERROR BORRA TU MAMADA") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error BORRA TU MAMADA";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "ERROR BORRA TU MAMAMADA") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})




//AQUI LLAMO A LOS BOTONES Y PANTALLA
// const pantalla = document.querySelector(".pantalla")
// const botones = document.querySelectorAll(".btn")

// botones.forEach(boton => {
//     boton.addEventListener("click" , () => {
//         const botonApretado = boton.textContent;

//         if(boton.id==="0"){
//             pantalla.textContent="0";
//             return;
//         }

//         if(boton.id ===" borrar"){
//             if(pantalla.textContent.length===1 || pantalla.textContent=== "ERROR QUITA TU MAMADA"){
//                 pantalla.textContent="0";
//             }else{
//             pantalla.textContent= pantalla.textContent.slice(0,-1);
//             }
//             return;
//         }

//         if(boton.id==="igual"){
//             try{
//                 pantalla.textContent=eval(pantalla.textContent);
//             } catch{
//                 pantalla.textContent="ERROR QUITA TU MAMADA";
//             }
//             return;
//         }


//         if(pantalla.textContent==="0" || pantalla.textContent=== "ERROR QUITA TU MAMADA"){
//             pantalla.textContent=botonApretado;}
//         else{
//             pantalla.textContent+=botonApretado;
//         }    
      
//     })
// })

