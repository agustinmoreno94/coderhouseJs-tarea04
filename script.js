let cpu = prompt ("Selecciona AMD o Intel")


function cpuPrecios(marcaCpu){
    cpu = marcaCpu;
    cpu = cpu.toLowerCase()
    if (cpu == "amd"){
       cpu = prompt("ryzen 3, ryzen 5 o ryzen 7?")
       switch(cpu.toLowerCase()){
           case "ryzen 3":
           cpu = "El precio es de $11000"
           break;

           case "ryzen 5":
           cpu = "El precio es de $18000"
           break;

           case "ryzen 7":
           cpu = "El precio es de $24000"
           break;
        }
    }

    if (cpu == "intel"){
       cpu = prompt("i3,i5 o i7?")
       switch(cpu.toLowerCase()){
           case "i3":
           cpu = "El precio es de $13000"
           break;

           case "i5":
           cpu = "El precio es de $19000"
           break;

           case "i7":
           cpu = "El precio es de $26000"
           break;
        }
    }

}

cpuPrecios(cpu)
alert(cpu)


