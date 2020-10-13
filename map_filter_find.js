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

// Map e alterando o valor de nome_tipo
  var map_resultado = animais.map(animal => {
    return animal.nome_tipo = animal.nome + ' - ' + animal.tipo;
  });

  console.log(map_resultado);

// Filter de animais carnívoros
  var filter_resultado = animais.filter(animal => {
    return animal.tipo.toLowerCase().includes('carnívoro');
  });

  console.log(filter_resultado);

// Find do segundo animal
  var find_resultado = animais.find(animal => animal.id === 2);

  console.log(find_resultado);

// Some para verificar se existe um padrão
  var some_resultado = animais.some(animal => animal.nome === 'Jacaré')

// Filter e map
  var parametro = 'mamífero';
  var filter_map_result = animais.filter(animal => {
    return animal.tipo.toLowerCase().includes(parametro);
  }).map(animal => {
    return animal.primeiro_tipo = parametro.charAt(0).toUpperCase() + parametro.slice(1)
  });

  console.log(filter_map_result);

console.log(animais);