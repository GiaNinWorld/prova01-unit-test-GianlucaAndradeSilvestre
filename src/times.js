class TimeFutebol {
    constructor(nome, cidade, anoFundacao) {
        this.nome = nome;
        this.cidade = cidade;
        this.anoFundacao = anoFundacao;
        this.jogadores = [];
        this.vitorias = 0;
        this.empates = 0;
        this.derrotas = 0;
        this.golsMarcados = 0;
        this.golsSofridos = 0;
    }

    adicionarJogador(nome) {
        this.jogadores.push(nome);
        return this.jogadores;
    }

    removerJogador(nome) {
        this.jogadores = this.jogadores.filter(jogador => jogador !== nome);
        return this.jogadores;
    }

    quantidadeJogadores() {
        return this.jogadores.length;
    }

    possuiJogador(nome) {
        return this.jogadores.includes(nome);
    }

    registrarVitoria(golsMarcados, golsSofridos) {
        this.vitorias++;
        this.golsMarcados += golsMarcados;
        this.golsSofridos += golsSofridos;
    }

    registrarEmpate(golsMarcados, golsSofridos) {
        this.empates++;
        this.golsMarcados += golsMarcados;
        this.golsSofridos += golsSofridos;
    }

    registrarDerrota(golsMarcados, golsSofridos) {
        this.derrotas++;
        this.golsMarcados += golsMarcados;
        this.golsSofridos += golsSofridos;
    }

    totalJogos() {
        return this.vitorias + this.empates + this.derrotas;
    }

    pontos() {
        return (this.vitorias * 3) + this.empates;
    }

    saldoDeGols() {
        return this.golsMarcados - this.golsSofridos;
    }

    mediaGolsMarcados() {
        if (this.totalJogos() === 0) return 0;
        return this.golsMarcados / this.totalJogos();
    }

    mediaGolsSofridos() {
        if (this.totalJogos() === 0) return 0;
        return this.golsSofridos / this.totalJogos();
    }

    percentualVitorias() {
        if (this.totalJogos() === 0) return 0;
        return (this.vitorias / this.totalJogos()) * 100;
    }

    percentualDerrotas() {
        if (this.totalJogos() === 0) return 0;
        return (this.derrotas / this.totalJogos()) * 100;
    }

    estaInvicto() {
        return this.derrotas === 0;
    }

    temMaisVitoriasQueDerrotas() {
        return this.vitorias > this.derrotas;
    }

    classificacao() {
        if (this.pontos() >= 70) {
            return 'Excelente';
        }

        if (this.pontos() >= 40) {
            return 'Boa';
        }

        return 'Regular';
    }

    idadeDoClube(anoAtual) {
        return anoAtual - this.anoFundacao;
    }

    resumo() {
        return `${this.nome} - ${this.cidade}: ${this.pontos()} pontos`;
    }

    resetarEstatisticas() {
        this.vitorias = 0;
        this.empates = 0;
        this.derrotas = 0;
        this.golsMarcados = 0;
        this.golsSofridos = 0;
    }
}

module.exports = TimeFutebol;