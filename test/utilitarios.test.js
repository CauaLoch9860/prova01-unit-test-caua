const Utilitarios = require("../src/utilitarios");

let utils;

beforeEach(() => {
  utils = new Utilitarios();
});

describe("Classe Utilitarios", () => {
  describe("Manipulação de strings", () => {
    it("deve inverter string", () => {
      expect(utils.inverterString("abc")).toBe("cba");
    });

    it("deve contar caracteres", () => {
      expect(utils.contarCaracteres("abcd")).toBe(4);
    });

    it("deve transformar em maiúsculas", () => {
      expect(utils.paraMaiusculas("abc")).toBe("ABC");
    });

    it("deve transformar em minúsculas", () => {
      expect(utils.paraMinusculas("ABC")).toBe("abc");
    });

    it("deve deixar a primeira letra maiúscula", () => {
      expect(utils.primeiraLetraMaiuscula("teste")).toBe("Teste");
    });

    it("deve remover espaços no início e fim", () => {
      expect(utils.removerEspacos("   hello   ")).toBe("hello");
    });

    it("deve repetir texto N vezes", () => {
      expect(utils.repetirTexto("oi", 3)).toBe("oioioi");
    });

    it("deve juntar array com separador", () => {
      expect(utils.juntarArray(["a", "b", "c"], "-")).toBe("a-b-c");
    });

    it("deve contar palavras corretamente", () => {
      expect(utils.contarPalavras("um dois   tres")).toBe(3);
    });

    it("deve identificar palíndromos", () => {
      expect(utils.ehPalindromo("Ana")).toBe(true);
      expect(utils.ehPalindromo("banana")).toBe(false);
    });
  });

  describe("Operações matemáticas", () => {
    it("deve somar dois números", () => {
      expect(utils.somar(2, 3)).toBe(5);
    });

    it("deve subtrair dois números", () => {
      expect(utils.subtrair(5, 3)).toBe(2);
    });

    it("deve multiplicar dois números", () => {
      expect(utils.multiplicar(4, 3)).toBe(12);
    });

    it("deve dividir dois números", () => {
      expect(utils.dividir(10, 2)).toBe(5);
    });

    it("deve lançar erro ao dividir por zero", () => {
      expect(() => utils.dividir(5, 0)).toThrow(Error);
      expect(() => utils.dividir(5, 0)).toThrow("Divisão por zero");
    });

    it("deve verificar se número é par", () => {
      expect(utils.ehPar(4)).toBe(true);
      expect(utils.ehPar(5)).toBe(false);
    });

    it("deve calcular média do array", () => {
      expect(utils.mediaArray([2, 4, 6])).toBe(4);
    });

    it("deve retornar 0 ao calcular média de array vazio", () => {
      expect(utils.mediaArray([])).toBe(0);
    });
  });

  describe("Manipulação de arrays", () => {
    it("deve retornar primeiro elemento", () => {
      expect(utils.primeiroElemento([1, 2, 3])).toBe(1);
    });

    it("deve retornar último elemento", () => {
      expect(utils.ultimoElemento([1, 2, 3])).toBe(3);
    });

    it("deve retornar tamanho do array", () => {
      expect(utils.tamanhoArray([1, 2, 3])).toBe(3);
    });

    it("deve ordenar array", () => {
      expect(utils.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    it("deve inverter array", () => {
      expect(utils.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    it("deve remover duplicados", () => {
      expect(utils.removerDuplicados([1, 1, 2, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe("Outros utilitários", () => {
    it("deve gerar número aleatório dentro do limite", () => {
      const numero = utils.gerarNumeroAleatorio(10);
      expect(numero).toBeGreaterThanOrEqual(0);
      expect(numero).toBeLessThan(10);
    });

    it("deve verificar se valor é número", () => {
      expect(utils.ehNumero(123)).toBe(true);
      expect(utils.ehNumero("abc")).toBe(false);
      expect(utils.ehNumero(NaN)).toBe(false);
    });

    it("deve mesclar objetos", () => {
      const obj1 = { a: 1 };
      const obj2 = { b: 2 };
      expect(utils.mesclarObjetos(obj1, obj2)).toEqual({ a: 1, b: 2 });
    });
  });
});
