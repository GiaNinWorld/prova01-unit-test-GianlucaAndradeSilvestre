const TimeFutebol = require("../src/times");

describe("Times de Futebol", () => {
    let time;

    beforeEach(() => {
        //1. Arrange
        time = new TimeFutebol("Palmeiras", "São Paulo", 1914);
    });

    test("Adicionar Jogador", () => {
        //2. Act
        time.adicionarJogador("Veiga");

        //3. Assert
        expect(time.jogadores).toEqual(["Veiga"]);
    });

    test("Remover Jogador", () => {
        //2. Act
        time.adicionarJogador("Veiga");
        time.adicionarJogador("Dudu");
        time.removerJogador("Veiga");

        //3. Assert
        expect(time.jogadores).toEqual(["Dudu"]);
    });

    test("Quantidade de Jogadores no plantel", () => {
        //2. Act
        time.adicionarJogador("Veiga");
        time.adicionarJogador("Ewerton");
        time.adicionarJogador("Dudu");

        //3. Assert
        expect(time.quantidadeJogadores()).toBe(3);
    });

    test("Se possui determinado jogador no plantel", () => {
        //2. Act
        time.adicionarJogador("Lionel Messi");
        time.adicionarJogador("Gustavo Gomez");

        //3. Assert
        expect(time.possuiJogador("Lionel Messi")).toBe(true);
    });

    test("Registra Vitórias", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);

        //3. Assert
        expect(time.vitorias).toBe(4);
    });

    test("Registrar Empates", () => {
        //2. Act
        time.registrarEmpate(4,1);
        time.registrarEmpate(3,0);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);

        //3. Assert
        expect(time.empates).toBe(4);
    });

    test("Registrar Derrotas", () => {
        //2. Act
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(5,0);

        //3. Assert
        expect(time.derrotas).toBe(3);
    });

    test("Total de jogos", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(3,0);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(5,0);

        //3. Assert
        expect(time.totalJogos()).toBe(11);
    });

    test("Pontuação do brasileirão assaí série A", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(3,0);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(5,0);

        //3. Assert
        expect(time.pontos()).toBe(16);
    });

    test("Verificar se está invicto", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(3,0);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(5,0);

        //3. Assert
        expect(time.estaInvicto()).toBe(false);
    });

    test("Se há mais vitórias que derrotas", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(3,0);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(5,0);

        //3. Assert
        expect(time.temMaisVitoriasQueDerrotas()).toBe(true);
    });

    test("Quantos anos o clube tem", () => {
        //2. Act
        const anoAtual = 2026;

        //3. Assert
        expect(time.idadeDoClube(anoAtual)).toBe(112);
    });

    test("Saldo de gols", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(3,0);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(1,0);

        //3. Assert
        expect(time.saldoDeGols()).toBe(31);
    });

    test("Média de gols marcados", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(1,0);

        //3. Assert
        expect(time.mediaGolsMarcados()).toBe(3.1);
    });

    test("Média de gols sofridos", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(1,0);

        //3. Assert
        expect(time.mediaGolsSofridos()).toBe(0.3);
    });

    test("Classificação", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);

        //3. Assert
        expect(time.classificacao()).toBe("Boa");
    });

    test("Classificação excelente", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0); 
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(1,0);

        //3. Assert
        expect(time.classificacao()).toBe("Excelente");
    });

    test("Resetar estatísticas", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0); 
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);
        time.registrarDerrota(4,1);
        time.registrarDerrota(3,0);
        time.registrarDerrota(1,0);
        time.resetarEstatisticas();

        //3. Assert
        expect(time.vitorias).toBe(0);
        expect(time.derrotas).toBe(0);
        expect(time.empates).toBe(0);
    });

    test("Percentual de derrotas", () => {
        //2. Act
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(4,1);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0);
        time.registrarVitoria(3,0); 
        time.registrarVitoria(5,0);
        time.registrarVitoria(1,0);
        time.registrarEmpate(4,1);
        time.registrarEmpate(5,0);
        time.registrarEmpate(1,0);

        //3. Assert
        expect(time.percentualDerrotas()).toBe(0);
    });
});