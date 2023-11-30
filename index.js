$(document).ready(function(){
    let produtos = {
        ebook : 5.50,
        camisa : 15000,
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
        "Descrição do produto: camisa do flamengo toda fudida usada pelo\ngustavo geladeira no jogo contra o corinthians até ele tirar e ser expulso\nda partida. Flamengo ganhou a partida por 7x1",
        "ps5 edicao de colecionador feito de ouro de 24 quilates",
        "copo com água do rio ipiranga do momento que o dom pedro segundo declarou a independencia do brasil",
        "bomba atomica que nao foi solta pelo robert openheimer assim evitando a morte de milhoes de pessoas",
        "cartaozinho de UMA (1) unidade de refeição do RU lago"

    ]

    $(".compra").click(function(){
                
        /* Descobrindo a id do produto */
        let produto_escolhido = $(this).attr("id")
        alert(produto_escolhido)

        /* Descobrindo o nome do produto e sua descrição*/
        let chaves = Object.keys(produtos)
        let nome_produto = nomes[chaves.indexOf(produto_escolhido)]
        alert(nome_produto)
        let descricao = descriçoes[chaves.indexOf(produto_escolhido)]
        alert(descricao)
        let preco = 0

        /* Percorrendo objeto para encontrar o preco */
        $.each(produtos, function(key, value){
            if(key == produto_escolhido){
                preco = value
                alert(preco)
            }
        });

        $("#nome_produto").text(nome_produto)


        /* Ocultando e visualizando a div */
        if($(".pagina_pagamento").is(":visible")){
            $(".pagina_pagamento").hide()
        }else
            var pagina_pagamento = $(".pagina_pagamento")
            pagina_pagamento.show()
            pagina_pagamento.css("display", "flex")
        
    })
})