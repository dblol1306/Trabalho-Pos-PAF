ItgRst = {

     "Koba" : {

     Nome: "Lucas Henrique Kobayashi de Oliveira",
     Idade: "24 anos",
     Cidade: "São Paulo",
     Anivesário: "04 de Abril",
     O_que_faz_na_banda: "Guitarrista",
     Foto_integrante: "Imagem/Koba.jpg"
   },

     "PeLanza" : {

     Nome: "Pedro Gabriel Lanza Reis",
     Idade: "24 anos",
     Cidade: "São Paulo",
     Anivesário: "14 de Abril",
     O_que_faz_na_banda: "Voz e Baixo",
     Foto_integrante: "Imagens/pe-lanza.jpg"
   },

     "Thomas" : {

     Nome: "Thomas Alexander Machado D’Avilla",
     Idade: "25 anos",
     Cidade: "São Paulo",
     Anivesário: "28 de Agosto",
     O_que_faz_na_banda: "Bateirista",
     Foto_integrante: "Imagens/Thomas.jpg"
   },

     "PeLu" : {

     Nome: "Pedro Lucas Munhoz",
     Idade: "26 anos",
     Cidade: "São Paulo",
     Anivesário: "14 de Janeiro",
     O_que_faz_na_banda: "Guitarrista",
     Foto_integrante: "Imagens/Pe-Lu.jpg"
     }


     function getParameterByName(name, url) {
       if (!url) url = window.location.href;
       name = name.replace(/[\[\]]/g, "\\$&");
       var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
           results = regex.exec(url);
       if (!results) return null;
       if (!results[2]) return '';
       return decodeURIComponent(results[2].replace(/\+/g, " "));
     }

      function exibeDetalhes(item) {
      document.getElementById("Foto_integrante_detalhes").src = item.Foto_integrante;
      document.getElementById("Nome_detalhes").innerHTML = item.Nome;
      document.getElementById("Idade_Detalhes").innerHTML = item.Idade;
      document.getElementById("Cidade_Detalhes").innerHTML = item.Cidade;
      document.getElementById("Aniversário_Detalhes").innerHTML = item.Aniversário;
      document.getElementById("O_que_faz_na_banda_Detalhes").innerHTML = item.O_que_faz_na_banda;
}
