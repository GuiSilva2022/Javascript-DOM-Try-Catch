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
    
        try{
            if (numb == '') throw 'Informe um valor';
            if (numb<5) throw 'Informe um valor maior que 5 e menor que 10'
            if (numb>10) throw 'Informe um valor maior que 5 e menor que 10'
        }
        catch(erro){
            document.getElementById("outputnumb").innerHTML = erro;
        }
        finally{
        alert("O número escolhido foi  " + numb);
    }
        console.log(numb)
    }


    
