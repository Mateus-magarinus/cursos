const LivroControlador = require('../controladores/LivroControlador');
const livroControlador = new LivroControlador();

const Livro = require('../modelos/Livro');
const BaseControlador = require('../controladores/BaseControlador');

module.exports = (app) => {
    const rotasLivros = LivroControlador.rotas();

    app.use(rotasLivros.autenticadas, function(req, resp, next) {
        if (req.isAuthenticated()) {
            next();
        } else {
            resp.redirect(BaseControlador.rotas().login);
        }
    });

    app.get(rotasLivros.lista, livroControlador.lista())

    app.route(rotasLivros.cadastro)
        .get(livroControlador.formularioCadastra())
        .post(Livro.validacoes(), livroControlador.cadastra())
        .put(livroControlador.edita());

    app.get(rotasLivros.edicao, livroControlador.formularioEdicao());

    app.delete(rotasLivros.delecao, livroControlador.remove());
};