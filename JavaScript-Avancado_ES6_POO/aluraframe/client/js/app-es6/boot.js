import{curretInstance} from './controllers/NegociacaoController';
import {} from './polyfill/fetch';

let negociacaoController = curretInstance();

let $ = document.querySelector.bind(document);

$('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
$('#apaga').onclick = negociacaoController.apaga.bind(negociacaoController);
