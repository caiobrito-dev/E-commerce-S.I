$(document).ready(function(){
    let produtos = {
        ebook : 5.50,
        camisa : 15000,
        ps5: 5.55,
        agua : 0,
        bomba : 0,
    }

    $(".compra").click(function(){
        if($(".pagina_pagamento").is(":visible")){
            $(".pagina_pagamento").hide()
        }else
            $(".pagina_pagamento").show()
        
    })
})