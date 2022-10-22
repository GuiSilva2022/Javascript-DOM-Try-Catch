const inputnumbButton = document.getElementById("inputnumbbutton");
inputnumbButton.addEventListener("click", clicknumbButton);

function clicknumbButton(){

        numb = document.getElementById("inputnumb").value
        document.getElementById("outputnumb").innerHTML = "";
    
        try{
            if (numb == '') throw '  𝙀𝙧𝙧𝙖𝙙𝙤';
            if (numb == 'SDFLHQWH') throw ' 𝘼 𝙨𝙚𝙣𝙝𝙖 𝒑𝒂𝒓𝒂 𝒔𝒂𝒊𝒓 𝒅𝒂 𝒔𝒂𝒍𝒂 𝒆́: "𝙢𝙚𝙣𝙩𝙚𝙨 𝙚𝙡𝙚𝙩𝙧𝙞𝙯𝙖𝙙𝙖𝙨"';
    else{
        throw ' 𝙀𝙧𝙧𝙖𝙙𝙤';
    }
            
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


    
