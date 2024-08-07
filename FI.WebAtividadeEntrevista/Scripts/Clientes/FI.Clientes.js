﻿$(document).ready(function () {
    $('#formCadastro').submit(function (e) {
        e.preventDefault();

        var nome = $(this).find("#Nome").val();
        var cep = $(this).find("#CEP").val();
        var email = $(this).find("#Email").val();
        var sobrenome = $(this).find("#Sobrenome").val();
        var nacionalidade = $(this).find("#Nacionalidade").val();
        var estado = $(this).find("#Estado").val();
        var cidade = $(this).find("#Cidade").val();
        var logradouro = $(this).find("#Logradouro").val();
        var telefone = $(this).find("#Telefone").val();
        var cpf = $(this).find("#CPF").val();
        var cpfBeneficiario = $(this).find("#CPFBeneficiario").val();
        var nomeBeneficiario = $(this).find("#NomeBeneficiario").val();
        var IDCliente = $(this).find("#IDCliente").val();

        var data = {
            "Nome": nome,
            "CEP": cep,
            "Email": email,
            "Sobrenome": sobrenome,
            "Nacionalidade": nacionalidade,
            "Estado": estado,
            "Cidade": cidade,
            "Logradouro": logradouro,
            "Telefone": telefone,
            "CPF": cpf,
            "CPFBeneficiario": cpfBeneficiario,
            "NomeBeneficiario": nomeBeneficiario,
            "IDCliente": IDCliente
        };

        $.ajax({
            url: urlPost,
            method: "POST",
            data: data,
            error: function (r) {
                if (r.status == 400)
                    ModalDialog("Ocorreu um erro", r.responseJSON);
                else if (r.status == 500)
                    ModalDialog("Ocorreu um erro", "Ocorreu um erro interno no servidor.");
            },
            success: function (r) {
                ModalDialog("Sucesso!", r);
                $("#formCadastro")[0].reset();
            }
        });
    });
});

function ModalDialog(titulo, texto) {
    var random = Math.random().toString().replace('.', '');
    var texto = '<div id="' + random + '" class="modal fade">                                                               ' +
        '        <div class="modal-dialog">                                                                                 ' +
        '            <div class="modal-content">                                                                            ' +
        '                <div class="modal-header">                                                                         ' +
        '                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>         ' +
        '                    <h4 class="modal-title">' + titulo + '</h4>                                                    ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-body">                                                                           ' +
        '                    <p>' + texto + '</p>                                                                           ' +
        '                </div>                                                                                             ' +
        '                <div class="modal-footer">                                                                         ' +
        '                    <button type="button" class="btn btn-default" data-dismiss="modal">Fechar</button>             ' +
        '                                                                                                                   ' +
        '                </div>                                                                                             ' +
        '            </div><!-- /.modal-content -->                                                                         ' +
        '  </div><!-- /.modal-dialog -->                                                                                    ' +
        '</div> <!-- /.modal -->                                                                                        ';

    $('body').append(texto);
    $('#' + random).modal('show');
}
