const inputFileButton = document.getElementById("inputfilebutton");
inputFileButton.addEventListener("click", clickFileButton);

const inputnumbButton = document.getElementById("inputnumbbutton");
inputnumbButton.addEventListener("click", clicknumbButton);

function clickFileButton(){
    arquivo = document.getElementById("inputfile");

    var fr=new FileReader();
    }

function clicknumbButton(){

        numb = document.getElementById("inputnumb").value
        document.getElementById("outputnumb").innerHTML = "";
    
        try{
            if (numb == '') throw 'Informe um valor';
            
            if (numb<=5 || numb>=10) throw 'Informe um valor maior que 5 e menor que 10'
            // if (IsNaN)
        }
        catch(erro){
            document.getElementById("outputnumb").innerHTML = erro;
            console.log("Erro" + erro)
        }
        finally{
        alert("O numero escolhido foi  " + numb);
        numb = document.getElementById("inputnumb").value = ""
    }
        console.log(numb)
    }


    
