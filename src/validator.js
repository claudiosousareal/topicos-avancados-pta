function validarChamado(titulo) {
    if (!titulo) {
        throw new Error("O título do chamado não pode ser vazio.");
    }

    return true;
}

module.exports = validarChamado;