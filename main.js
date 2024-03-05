$(document).ready(function(){
    $("#button").click(function(){
        let item = $("#novoItem").val();
        if (item === "") return; // Verifica se o campo está vazio
        let li = $("<li>");
        let spanItem = $("<span>").text(item);
        let botaoConfirmar = $("<button>").text("confirmar");
        botaoConfirmar.click(function(){
            spanItem.toggleClass("confirmed");
        });
        let botaoExcluir = $("<button>").text("Excluir");
        botaoExcluir.attr("id","excluirItem");
        botaoExcluir.click(function(){
            li.remove();
        });
        li.append(spanItem, botaoConfirmar, botaoExcluir);
        $(".minhaLista").append(li);
        $("#novoItem").val(""); // Limpa o campo de entrada após adicionar o item
    });
});