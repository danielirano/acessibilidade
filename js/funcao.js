$(document).ready(
    function(){
        $ ("#tCpf").blur(
        function(){
            let cpf = $("#tCpf").val();
            let cpfNovo = "";
            for(let x = 0; x <= cpf.length; x++){
                cpfNovo += cpf.charAt(x);
                if(x == 2 || x == 5){
                    cpfNovo += ".";
                }else if (x == 8){
                    cpfNovo += "-";
                }
             }
              $("#tCpf").val(cpfNovo);
            }
            );
        $("form").submit(
            function(){
                $("form").append("<p id='formato> </p>")
                let objeto = {
                    "nome": $("#tNome").val(),
                    "email": $("#tEmail").val(),
                    "cpf": $("#tCpf").val(),
                    "senha": $("#tSenha").val(),

                };
                let html = JSON.stringify(objeto,0,4);
                $("#formato").text(html);
            
                return false;
            }
        )
    }
)
