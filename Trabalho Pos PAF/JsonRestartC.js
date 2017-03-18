Rst = {
     "Levo_CMG" : {

     Compositor: "Koba",
     Participação_esp: "Sem Participação",
     Gravadora: "Maynard Music / Art Mix",
     Ano: "2009"

   },

     "Recomeçar" : {

     Compositor: "Koba",
     Participação_esp: "Sem Participação",
     Gravadora: "Maynard Music / Art Mix"
     Ano: "2009"

   },

     "Menina_Estranha" : {

     Compositor:"Koba",
     Participação_esp: "Sem Participação",
     Gravadora: "Geração Z",
     Ano:"2011"

   }
}


ItgRst = {

     "Koba" : {

     Nome: "Lucas Henrique Kobayashi de Oliveira",
     Idade: "24 anos",
     Cidade: "São Paulo",
     Anivesário: "04 de Abril",
     O que faz na banda: "Guitarrista",
     Foto_integrante: imagem/Koba.jpg
   },

     "PeLanza" : {

     Nome: "Pedro Gabriel Lanza Reis",
     Idade: "24 anos",
     Cidade: "São Paulo",
     Anivesário: "14 de Abril",
     O que faz na banda: "Voz e Baixo",
     Foto_integrante:
   },

     "Thomas" : {

     Nome: "Thomas Alexander Machado D’Avilla",
     Idade: "25 anos",
     Cidade: "São Paulo",
     Anivesário: "28 de Agosto",
     O que faz na banda: "Bateirista",
     Foto_integrante:
   },

     "PeLu " : {

     Nome: "Pedro Lucas Munhoz",
     Idade: "26 anos",
     Cidade: "São Paulo",
     Anivesário: "14 de Janeiro",
     O que faz na banda: "Guitarrista",
     Foto_integrante:
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
      document.getElementById("Foto_integrante_detalhes").src = item.Foto_integrante

}
