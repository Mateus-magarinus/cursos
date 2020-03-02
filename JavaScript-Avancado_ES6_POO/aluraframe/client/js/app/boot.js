'use strict';

System.register(['./controllers/NegociacaoController', './polyfill/fetch'], function (_export, _context) {
  "use strict";

  var curretInstance, negociacaoController, $;
  return {
    setters: [function (_controllersNegociacaoController) {
      curretInstance = _controllersNegociacaoController.curretInstance;
    }, function (_polyfillFetch) {}],
    execute: function () {
      negociacaoController = curretInstance();
      $ = document.querySelector.bind(document);


      $('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      $('#apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map