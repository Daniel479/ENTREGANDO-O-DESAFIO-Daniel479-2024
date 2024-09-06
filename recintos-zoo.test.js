// Importando a classe usando ES Modules
import { RecintosZoo } from './recintos-zoo.js';

// Testes para validar a função analisaRecintos
describe('Teste da função analisaRecintos', () => {
  it('Deve retornar a quantidade correta de macacos', () => {
    const zoo = new RecintosZoo();
    const resultado = zoo.analisaRecintos('MACACO', 2);
    expect(resultado).toBe('Há 5 MACACO(s) disponíveis em 2 recinto(s).');
  });

  it('Deve retornar mensagem quando não há recintos suficientes', () => {
    const zoo = new RecintosZoo();
    const resultado = zoo.analisaRecintos('ELEFANTE', 4);
    expect(resultado).toBe('Não há 4 recintos disponíveis para ELEFANTE. Apenas 3 recintos disponíveis.');
  });

  it('Deve retornar mensagem quando o animal não for encontrado', () => {
    const zoo = new RecintosZoo();
    const resultado = zoo.analisaRecintos('LEAO', 1);
    expect(resultado).toBe('Animal LEAO não encontrado no zoológico.');
  });
});
