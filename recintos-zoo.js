class RecintosZoo {
  constructor() {
    // Aqui você pode definir os dados iniciais, como recintos e os animais presentes neles.
    this.recintos = [
      { nome: 'MACACO', quantidade: 5 },
      { nome: 'ELEFANTE', quantidade: 3 },
      { nome: 'TIGRE', quantidade: 2 },
      // Adicione outros animais e recintos conforme necessário
    ];
  }

  analisaRecintos(animal, numeroRecintos) {
    // Lógica principal para analisar os recintos
    const recinto = this.recintos.find(rec => rec.nome === animal.toUpperCase());

    if (recinto) {
      if (recinto.quantidade >= numeroRecintos) {
        return `Há ${recinto.quantidade} ${animal}(s) disponíveis em ${numeroRecintos} recinto(s).`;
      } else {
        return `Não há ${numeroRecintos} recintos disponíveis para ${animal}. Apenas ${recinto.quantidade} recintos disponíveis.`;
      }
    } else {
      return `Animal ${animal} não encontrado no zoológico.`;
    }
  }
}

// Exportando
export { RecintosZoo as RecintosZoo };

