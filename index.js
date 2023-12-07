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
        if($(".pagina_pagamento").is(":visible")){

            if($(".dados_comprador_pix").is(":visible")){
                $(".dados_comprador_pix").hide()
            }
            if($(".dados_comprador_cartao").is(":visible")){
                $(".dados_comprador_cartao").hide()
            }

            $("input[name='pagamento']").prop("checked", false);
            $(".pagina_pagamento").hide()
        }else
            var pagina_pagamento = $(".pagina_pagamento")
            pagina_pagamento.show()
            pagina_pagamento.css("display", "flex")



        /* Descobrindo a id do produto */
        let produto_escolhido = $(this).attr("id")

        /* Descobrindo o nome do produto e sua descrição*/
        let chaves = Object.keys(produtos)
        let nome_produto = nomes[chaves.indexOf(produto_escolhido)]
        let descricao = descriçoes[chaves.indexOf(produto_escolhido)]
        let preco = produtos[produto_escolhido]
        

        $("#nome_produto").text(nome_produto)
        $("#descricao").text(descricao)
        $("#preco_tela_pagamento").text("Preço: R$ "+preco.toFixed(2))


        /* Verficando qual o tipo do pagamento */

        $(".tipo").click(function(){
            let tipo_pagamento = $(this).attr("id")
            
            if (tipo_pagamento == "pix"){
                if($(".dados_comprador_cartao").is(":visible")){
                    $(".dados_comprador_cartao").hide()
                }

                let dados_pix = $(".dados_comprador_pix")
                dados_pix.show()
            }
            else{
                if($(".dados_comprador_pix").is(":visible")){
                    $(".dados_comprador_pix").hide()
                }
                let dados_cartao = $(".dados_comprador_cartao")
                dados_cartao.show()
            }
        })
        
    })
    
})