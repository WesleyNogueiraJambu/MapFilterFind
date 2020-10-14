var animais = [{
    id: 1,
    nome: 'Capivara',
    tipo: 'Mamífero roedor',
    nome_tipo: '',
    primeiro_tipo: ''
  },{
    id: 2,
    nome: 'Onça-pintada',
    tipo: 'Mamífero carnívoro',
    nome_tipo: '',
    primeiro_tipo: ''
  },{
    id: 3,
    nome: 'Jacaré',
    tipo: 'Carnívoro voraz',
    nome_tipo: '',
    primeiro_tipo: ''
  }];

console.log(animais);

// Uso do map para mapear os valores de nome_tipo e fazer a alteração do seu valor.
  var map_resultado = animais.map(animal => {
    return animal.nome_tipo = animal.nome + ' - ' + animal.tipo;
  });

  console.log(map_resultado);

// Filter de animais carnívoros
  var filter_resultado = animais.filter(animal => {
    return animal.tipo.toLowerCase().includes('carnívoro'); // Uso do método includes() para verificar se dentro da string existe o dado 'carnívoro'.
  });

  console.log(filter_resultado);

// Find do animal com o id 2.
  var find_resultado = animais.find(animal => animal.id === 2);

  console.log(find_resultado);

// Some para verificar se existe um padrão.
  var some_resultado = animais.some(animal => animal.nome === 'Jacaré')
  true
// Retorna true se o padrão existir.

  var some_resultado = animais.some(animal => animal.nome === 'Macaco')
  false
// Retorna false se o padrão não existir.

// Filter para retornar um parâmetro específico e map para mapear os dados e fazer a mudança do campo de primeiro_tipo.
  var parametro = 'mamífero';
  var filter_map_result = animais.filter(animal => {
    return animal.tipo.toLowerCase().includes(parametro);
  }).map(animal => {
    return animal.primeiro_tipo = parametro.charAt(0).toUpperCase() + parametro.slice(1)
    // Uso dos métodos charAt(0).toUpperCase() para deixar a primeira letra em maiúsculo.
    // Uso do slice(1) para retornar a string sem a primeira letra.
  });

  console.log(filter_map_result);

console.log(animais);
