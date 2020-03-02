const moment = require('moment');
const conexao = require('../infraestrutura/conexao');

class Atendimentos {

    adiciona(atendimento, res) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS');
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        const atendimentoDatado = { ...atendimento, dataCriacao, data };

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
        const clienteEhValido = atendimento.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve possir pelo menos 5 caracteres'
            }
        ];

        const erros = validacoes.filter(campos => !campos.valido);
        const existemErros = erros.length;

        if (existemErros) {

            res.status(400).json(erros);
        } else {

            const sql = 'INSERT INTO Atendimentos SET ?';
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if (erro) {
                    res.status(400).json(erro);
                } else {
                    res.status(201).json(atendimento);
                }

            });
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM Atendimentos';
        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(resultados);
            }

        });
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Atendimentos WHERE id = ${id}`;
        conexao.query(sql, (erro, resultados) => {
            const atendimento = resultados[0];
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json(atendimento);
            }

        });
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD hh:mm:ss');
        }
        const dataEhValida = moment(valores.data).isSameOrAfter(valores.dataCriacao);
        const clienteEhValido = valores.cliente.length >= 5;

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve possir pelo menos 5 caracteres'
            }
        ];

        const erros = validacoes.filter(campos => !campos.valido);
        const existemErros = erros.length;

        if (existemErros) {

            res.status(400).json(erros);
        } else {
            const sql = 'UPDATE Atendimentos SET ? WHERE id = ?';

            conexao.query(sql, [valores, id], (erro, resultados) => {
                if (erro)
                    res.status(400).json(erro);
                else
                    res.status(200).json({id, ...valores});
            });
        }
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id = ?';

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro);
            } else {
                res.status(200).json({id});
            }
        });
    }
}

module.exports = new Atendimentos;