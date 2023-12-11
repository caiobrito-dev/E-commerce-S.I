$(document).ready(function(){
    let produtos = {
        ebook : 1000000,
        camisa : 15000,
        ps5 : 1015392,
        meteriorito : 150,
        impala : 395000,
        agua : 1822,
        bomba : 237062,
        vale : 30,
        argamassa : 46.90,
        materia : 150000000,
    }

    let nomes = [
        "E-book Marketing Digital",
        "Camisa de Gustavo Geladeira",
        "PS5 Edição de colecionador",
        "Meteriorito de marte",
        "Impala 67 do ano de 1967",
        "Copo com agua do Rio Ipiranga",
        "Bomba do Oppenheimer",
        "Vale Refeição RU LAGO",
        "Saco de argamassa",
        "Matéria escura vinda da quinta dimensão",
    ]

    let descriçoes = [
        "Ganhe mil milhoes por segundo",
        "Camisa do Flamengo toda fudida usada pelo Gustavo Geladeira no jogo contra o corinthians até ele tirar e ser expulso da partida. Flamengo ganhou a partida por 7x1",
        "PS5 edição de colecionador feito de ouro de 24 quilates",
        "Meteriorito saído da província lunar de marte que caiu em Caibaté e acabou tirando a vida de 2 indivíduos",
        "Impala turbo com Turbina Holset HX-35, Válvula de Alívio SPA Compact, Intercooler frontal,Pressurização em Alumínio 2,5,Escape 2,5 com 1 abafador JK, Pistões IASA 87mm (p/ 700cv), Bielas K1 (p/ 700cv), Parafusos ARP, Anéis NPR, Blockguard, Bomba de Óleo GM 2.4 16v retrabalhada e junta de cabeçote de aço de Astra Flex.",
        "Copo com água do Rio Ipiranga do momento que o Dom Pedro segundo declarou a independencia do brasil",
        "Bomba atomica que não foi solta pelo robert openheimer assim evitando a morte de milhões de pessoas",
        "Cartaozinho de UMA (1) unidade de refeição do RU lago",
        "Um saco de argamassa.",
        "บ̭̺̩ͬ̌ͧา̆̆บ̻͙̞ͮ̿̈ิ̸̯̫̝โ͏̖̺̗ล̔ͮนเ̉̕ร̕ิ่̡̙ม̴ส̍̑͒ง҉ค͠ร̹̤́า̡̦͎̖ม̸ก͙̈́̕ั̳̭̯บบา̈͊̑บ̰̍ิ͘โͭ͊ลน̘͙͡ͅ ̷̃̾̂บ̲̌̀า̹͕̇ͩบ͈͗ͪͅี̭ ̰͉̦́̉̉โ̛̈ͨ̚ม̶̝̓เ̒̍̐͠ลกช̜͓ͪͣน̡̠̺͕ะ҉ ͍́ดอน͚̈ ว̖̮̒̂ร้̢̞͓ͯ̈́͊̄͌า̧̤̫ย͘ ͢ก͠า͊̿̀ร͓̣̅̽̈͟ͅคͩ͝ม̥̔ ̅ล̤̳͖าย̸͉͎̾ͮ ͆บ͍͢า̝̣̻̿̏̌บ̼̹̔̇́ิโ̗ͪล̅͂̚น̼͍͙ ̢̝̺̺ͥ͋̂ก̍ ͎̗̋̂͞น̛͕̹̞ ͦ͏̣ส̳̅ง̷͚̻͉̈́̏̈ครา̭̟̏̍ม̮̤̦ใ̈น̯̐͠เป̰̰̇̃็̶͔̌น̞ͦ ค̦͉̳͑̑͐ว̴า̅͗҉ม̈́จ͠ร̰͊ิ͏ง ̱̫͉͜แ̴̬ค̩̍͘น̣͗̀าด̦̖̹̃̾ͮ ̎̈́̈ร̻า̛̝͓̫̑́̿คͤ̅҉ุ͕̻ณ̡̣̮̽͋เ͖̅ห̥̤̠͜ม͇̦̊̍ื̛̒อ͘น͝ว̼̗ั͟ว͉͇̜ ก̗͎ร̓̽̕ะ̠̝ท̵ิͭง̣͖̮ ̴̭͙͍พ̢̝͕̹ร̵̳̹̓ͨะ̓̂̊เ̩͔͇̈́̃̍จ้̢ͦ͟า ว่̥̝̽̇อ̫̜̟̏̽̃͝ง̥͇̜͊͑͗ไ͝ห้̣ͫใ̰̖̏͆ห้̟̻̲̦̑̈́͒̈́ก̟̞͕ั̜̪̼ͣ͐͑บ̳̭ͥͩว̷̮͙ิ̡ͦ̒ญ̩̣́̔ญ̜͚ͨ͆̈́ͅา͙͠ณ҉ ห̱̭̺͟ล͊ง͞ท̨͚̽า̸̳͇ง̫ข͢องคุ̥̳̖̲̂͢ณ̨ ͇̌͠ก͕̰̹ค้̇͢͜า̠̖ͬͦข̤̩̂̇͘อ̜̻̞͂ͦ̀̚ง̴พวͯͫก̵̠̜̟เข̸̦ͯ̎́ͅͅา̼̟̻ͪ̉͆คื̦̮̒ͤอ̩̱̺̓̎̅ผู้͓͉͇̰̗̈́͒͟ ̱̗̠ͮͮ͒̕แ̙͎ล̴ะ҉ผู้͕̠͕̤̝ͦ͊ͨ̋̔บ่̥͉̘ͫ̀̌͜า҉ข̢อ̱͂̇ͅงพ̸͈̰̗̿̃̀ว͐ͦ҉̗̺ก̖̲̤ͬ̋̅͘เ̳ข͌͋า̲̹͂ͧข้̥̩͂͠า̹͈̲ͨ̉̆͡ง͎ͣ͞ fṕp̨̖̱̫̔ͮ̚ ̧̰̙̑ͪอมู́̉ͮลเก̗ͩี̴่̞͔̫̯́ͥ̈̊ย̠̘́ͭว̘̓กั̭̓บ̢̞̩̱̇̈ͮงู̗̳̟ͬ̍̑͡ ̒̈́ที̥͎̝ ̲̩̣͊ͨͨเก̡ี่̤̤̔ͬ̀̕ย͏̪ว̦ͮข้̹̣͇̂͆̓ͭ͌อͮ̑ͨ͝ง̗?̿ ͑ͅน͔ͧั̷̺͓̩̌ͤ̿ก͓̟̤ͣ̄̋ว̥ͤ͡ิ̛̲̼͈ทย̳̼̦́ͧͬา͍̟̙̇ͥ̍ศͨ͐ͯาส̶̝ͮต͕̳ร̜̖́หา͙̫͝ͅยไ̵ป̼͎͚͠ไห̙̚͠น?̺͎͍ ̥͈พ̖̩̋̓ว̬̻ก̶͉͎เ̖ข̵̍͐า͍̳̆̂ถ̗̼̒̚าม̀ว่͚̦̺͈͕ͨͩ͆͊́า̬̅ศ̰̘พ̼̘̼ห̦̥͡า͔͖̤ย̺̩̱͐͂͐͘ไ͓͍ป̐ไ̷หͤน̣̙͕̋̒͒͠ ͯคุ̺͕̭ͩ̕̚ณภ̭̺̟า̔̀́҉ ͡",

    ]

    let imagens = {
        ebook : "/imgs/mil milhoes.png",
        camisa : "/imgs/flamengo.png",
        ps5 : "/imgs/ps5.png",
        meteriorito : "/imgs/meteriorito.png",
        impala : "/imgs/impala.png",
        agua : "/imgs/agua.png",
        bomba : "/imgs/bomba.png",
        vale : "/imgs/cartao.png",
        argamassa : "/imgs/argamassa.png",
        materia : "/imgs/materia escura.png",
    }

    $(".compra").click(function(){

        /* Ocultando e visualizando a div */
        if($(".escurece").is(":visible")){

            if($(".dados_comprador_pix").is(":visible")){
                $(".dados_comprador_pix").hide()
            }
            if($(".dados_comprador_cartao").is(":visible")){
                $(".dados_comprador_cartao").hide()
            }

            $("input[name='pagamento']").prop("checked", false);
            $(".escurece").hide()

            $(".imagem_compra img").remove()

        
        }else
            var pagina_escurece = $(".escurece")
            if (pagina_escurece != undefined){
                pagina_escurece.css("display", "flex")
            }
           


            /* Descobrindo a id do produto */
            let produto_escolhido = $(this).attr("id")

            /* Descobrindo o nome do produto e sua descrição*/
            let chaves = Object.keys(produtos)
            let nome_produto = nomes[chaves.indexOf(produto_escolhido)]
            let descricao = descriçoes[chaves.indexOf(produto_escolhido)]
            let preco = produtos[produto_escolhido]
            let imagem_produto = $("<img>")
            imagem_produto.attr("src", imagens[produto_escolhido])
            $(".imagem_compra").append(imagem_produto)

            $("#nome_produto").text(nome_produto)
            $("#descricao").text(descricao)
            $(".imagem_compra").append(imagem_produto)
            if(preco != undefined){
                $("#preco_tela_pagamento").text("Preço: R$ "+preco.toFixed(2))
            }


            /* Verficando qual o tipo do pagamento */

            $(".tipo").click(function(){
                let tipo_pagamento = $(this).attr("id")

                if (tipo_pagamento == "pix"){
                    
                    /* PAGAMENTO POR PIX */ 

                    if($(".dados_comprador_cartao").is(":visible")){
                        $("#cvc_cartao").val("")
                        $("#num_cartao").val("")
                        $("#validade_cartao").val("")
                        $("#nome_comprador_cartao").val("")
                        $(".dados_comprador_cartao").hide()
                    }
                    let dados_pix = $(".dados_comprador_pix")
                    dados_pix.show()

                    /* Verificando dados do cpf */
                    $("#cpf_comprador").mask('000.000.000-00')
                    $("#cpf_comprador").on("keyup", function(){
                        let cpf = $("#cpf_comprador").val()
                        if(cpf.length < 14 && cpf.length > 0){
                            $("#aviso_cpf").text("Falta numero")
                        }
                        else{
                            $("#aviso_cpf").text("")
                        }
                    })

                    $("#finalizar_compra_pix").click(function(){
                        let cpf = $("#cpf_comprador").val()
                        if($("#nome_comprador_pix").val() != "" && cpf.length == 14){
                            alert("comprou")
                            $("#nome_comprador_pix").val("")
                            $("#cpf_comprador").val("")                     
                        }
                    }) 
                }
                if (tipo_pagamento == "cartao"){

                    /* PAGAMENTO POR CARTAO */ 

                    if($(".dados_comprador_pix").is(":visible")){
                        $("#nome_comprador_pix").val("")
                        $("#cpf_comprador").val("")
                        $(".dados_comprador_pix").hide()
                    }
                    let dados_cartao = $(".dados_comprador_cartao")
                    dados_cartao.show()

                    $("#validade_cartao").mask("00/00/00")
                    $("#cvc_cartao").mask("000")
                    $("#num_cartao").mask("0000 0000 0000 0000")
                    $("#sem_parcela").text("1X de: R$ " + preco)
                    $("#parcela_2x").text("2X sem juros de: R$ " + (preco/2).toFixed(2)) 
                    $("#parcela_3x").text("3X sem juros de: R$ " + (preco/3).toFixed(2)) 
                    $("#parcela_4x").text("4X com juros de: R$ " + (preco/4 + (preco/100 * 3)).toFixed(2)) 
                    $("#parcela_5x").text("5X com juros de: R$ " + (preco/5 + (preco/100 * 3)).toFixed(2)) 

                    $("#num_cartao").on("keyup", function(){
                        let num = $("#num_cartao").val()
                        if(num.slice(0,2) > 50 && num.slice(0,2) < 56){
                            alert("mastercard")
                        }
                        if(num[0] == 4){
                            alert("visa")
                        }
                        if (num[0] == 6){
                            alert("elo")
                        }
                    
                        
                    })

                    
                    $("#finalizar_compra_cartao").click(function(){
                        let cvc = $("#cvc_cartao").val().length
                        let num = $("#num_cartao").val().length
                        let val = $("#validade_cartao").val().length

                        if($("#nome_comprador_cartao").val() != "" && cvc == 3 && num == 19 && val == 8){
                            alert("comprou")
                            $("#cvc_cartao").val("")
                            $("#num_cartao").val("")
                            $("#validade_cartao").val("")
                            $("#nome_comprador_cartao").val("")                            
                        }        
                           
                    }) 
                }
            })
        
    })
    
})
