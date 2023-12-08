$(document).ready(function(){
    let produtos = {
        ebook : 0.50,
        camisa : 15000.00,
        ps5: 5.55,
        agua : 0,
        bomba : 0,
        vale : 0
    }

    let nomes = [
        "E-book Marketing Digital",
        "Camisa de Gustavo Geladeira",
        "PS5 Edição de colecionador",
        "Copo com agua do Rio Ipiranga",
        "Bomba do Oppenhaimer",
        "Vale Refeição RU LAGO"
    ]

    let descriçoes = [
        "Ganhe mil milhoes por segundo",
        "Descrição do produto: camisa do Flamengo toda fudida usada pelo\nGustavo Geladeira no jogo contra o corinthians até ele tirar e ser expulso\nda partida. Flamengo ganhou a partida por 7x1",
        "PS5 edição de colecionador feito de ouro de 24 quilates",
        "Copo com água do Rio Ipiranga do momento que o Dom Pedro segundo declarou a independencia do brasil",
        "Bomba atomica que não foi solta pelo robert openheimer assim evitando a morte de milhões de pessoas",
        "Cartaozinho de UMA (1) unidade de refeição do RU lago"

    ]

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
            

            $("#nome_produto").text(nome_produto)
            $("#descricao").text(descricao)
            if(preco != undefined){
                $("#preco_tela_pagamento").text("Preço: R$ "+preco.toFixed(2))
            }


            /* Verficando qual o tipo do pagamento */

            $(".tipo").click(function(){
                let tipo_pagamento = $(this).attr("id")

                if (tipo_pagamento == "pix"){
                    
                    /* PAGAMENTO POR PIX */ 

                    if($(".dados_comprador_cartao").is(":visible")){
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

                    $("#finalizar_compra").click(function(){
                        let cpf = $("#cpf_comprador").val()
                        if($("#nome_comprador").val() != "" && cpf.length == 14){
                            alert("comprou")
                        }
                    }) 
                }
                else{

                    /* PAGAMENTO POR CARTAO */ 

                    if($(".dados_comprador_pix").is(":visible")){
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

                    
                    $("#finalizar_compra").click(function(){
                        let cvc = $("#cvc_cartao").val().length
                        let num = $("#num_cartao").val().length
                        let val = $("#validade_cartao").val().length

                        if($("#nome_comprador").val() != "" && cvc == 3 && num == 19 & val == 8){
                            alert("comprou")
                        }
                    }) 
                }
            })
        
    })
    
})