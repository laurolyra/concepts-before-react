# Map, Filter, Reduce - Exercícios
*Tradução da postagem escrita por David Abram em https://crocoder.dev/blog/map-filter-reduce-exercises/*

É realmente difícil testar seu conhecimento de programação depois de ter completado um tutorial ou asssistido uma palestra.  Nós preparamos alguns exercícios para ajudar os desenvolvedores iniciantes a consolidar seu conhecimento de **Map, Filter, Reduce** e outros métodos de Array úteis. Todos os exercícios contêm uma breve descrição do problema, código inicial, links para documentação relevante no MDN e resultados esperados. Tente resolver os problemas sem olhar a solução antes.

Se você precisar de ajuda adicional, você pode dar uma olhada nos nossos <a href="https://youtu.be/pkRW2RJ2LzQ" target="_blank">vídeos sobre Arrays</a> da série **#lockdown learning** na qual conversamos sobre **Map, Filter, Reduce** ou contate o autor do artigo diretamente.

---

Na função de desenvolvedor **Javascript**, você irá se deparar com arrays. Arrays de números, arrays de objetos, arrays de arrays de objetos, arrays multidimensionais e você vai precisar simplificar, transformar ou manipulá-las.

Você pode utilizar 'for loops aninhados' para resolver a maioria dos problemas que encontrar, mas isso torna o código difícil de ler e de entender.

Eu gostaria de provar a você que, ao utilizar os métodos **Map, Filter, Reduce**, não somente tornará o código mais legível, mas você estará, também, apto a melhor analisar o problema e escrever o código com facilidade.

## Exercícios
- [Array ao quadrado](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#array-ao-quadrado)
- [Soma de todo elemento positivo](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#soma-de-todo-elemento-positivo)
- [Calcular média e mediana](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#calcular-m%C3%A9dia-e-mediana)
- [Obter iniciais dos nomes](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#obter-iniciais-dos-nomes)
- [Diferença de idade entre o mais novo e o mais velho](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#diferen%C3%A7a-de-idade-entre-o-mais-novo-e-o-mais-velho)
- ["Numerônimos"](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#numer%C3%B4nimos)
- [n! com `Map` e `Reduce`](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#n-com-map-e-reduce)
- [Conte os elementos em uma array de arrays](https://github.com/laurolyra/concepts-before-react/blob/main/src/common/crocoder_dev_exercises.md#conte-os-elementos-em-uma-array-de-arrays)

---


## Array ao quadrado
Eleve ao quadrado o cada elemento presente na Array. Presuma que a array do _input_ será composta somente de números.
### Links úteis
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/pow" target="_blank">Math.pow()</a>

### Input
`const input = [ 1, 2, 3, 4, 5 ];`
### Resultado esperado
`[ 1, 4, 9, 16, 25]`

<details>
  <summary>Solução (clique para exibir)</summary>
  
  ```
  const input = [ 1, 2, 3, 4, 5 ];

  input.map(function(num) {
    return Math.pow(num, 2);
  });

  // sintaxe com Arrow function 
  input.map(num => Math.pow(num, 2));
  ```
</details>

## Soma de todo elemento positivo

Crie uma função que, se o _input_ for um arrau de números, retorne a suma de todos os números positivos. Se a array for vazia ou se não existem números positivos, retorne 0.

### Links úteis
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter" target="_blank">Array.prototype.filter()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank">Array.prototype.reduce()</a>
### Input
`const input = [ 1, -4, 12, 0, -3, 29, -150];`
### Resultado esperado
`42`

<details>
  <summary>Solução (clique para exibir)</summary>
  
  ```
  const input = [ 1, -4, 12, 0, -3, 29, -150];

  input
  .filter(function(num) {
    return num > 0;
  })
  .reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);

  // sintaxe com Arrow function 
  input.filter(num => num > 0)
  .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  ```
</details>

## Calcular média e mediana 

Calcule a média e a mediana dos números presentes na array de _input_, retorne-as como um objeto com as chaves `media` e `mediana`.

### Links úteis
 - <a href="https://www.alura.com.br/artigos/media-ou-mediana-entendendo-cada-uma?gclid=Cj0KCQjw-daUBhCIARIsALbkjSZ8ShBnaymKFM-Fjxa-B1rEGy-erBFn2gczKLlxZastAy2_67dvCRIaAiQ4EALw_wcB" target="_blank">Conceitos de média e mediana</a>
 - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank">Array.prototype.reduce()</a>
 - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank">Array.prototype.sort()</a>
 - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs" target="_blank">Math.abs()</a>
 - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign" target="_blank">Object.assign()</a>
 ### Input
`const input = [12, 46, 32, 64];`
### Resultado esperado
`{ media: 38.5, mediana: 32 }`

<details>
  <summary>Solução (clique para exibir)</summary>
  
  ```
  const input = [12, 46, 32, 64];
  input.sort((a, b) => a - b);

  input
  .reduce((accumulator, currentValue, index, array) => {

    accumulator.mean += currentValue /  array.length;

    if(Math.abs(index + 1  - array.length / 2) < 1) { 
      accumulator.median = currentValue 
    }

    return accumulator;
  }, { media: 0, mediana: 0 });
  ```
</details>

## Obter iniciais dos nomes

Dado que o _input_ fornecido será uma string com múltiplas palavras separadas por um espaço entre cada uma delas. Abrevie os nomes e retorne as iniciais dos nomes.

### Links úteis
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">Array.prototype.split()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">Array.prototype.join()</a>
 ### Input
`const input = 'George Raymond Richard Martin';`
### Resultado esperado
`'GRRM'`

<details>
  <summary>Solução (clique para exibir)</summary>
  
  ```
  const input = 'George Raymond Richard Martin';

  input
  .split(' ')
  .map(function(word) {
    return word[0];
  })
  .join('');

  // or written with Arrow function 
  input.split(' ').map(word => word[0]).join('');
  ```
</details>

## Diferença de idade entre o mais novo e o mais velho

Encontre a diferença de idade entre o mais velho e o mais novo membro da família, retorne suas respectivas idades e a diferença de idade.
### Links úteis
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/min" target="_blank">Math.min()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max" target="_blank">Math.max()</a>
 ### Input
`const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];`
### Resultado esperado
`[13, 67, 54]`

<details>
  <summary>Solução (clique para exibir)</summary>
  
  ```
  const input = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56,
    },
    {
      name: 'Rachel',
      age: 45,
    },
    {
      name: 'Nate',
      age: 67,
    },
    {
      name: 'Jeniffer',
      age: 65,
    }
  ];

  const ages = input.map(person => person.age);

  [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
  ```
</details>

## "Numerônimos"

Desenvovedores gostam de abreviar tudo: k8s significa Kubernetes, a11y significa acessibilidade, l10n significa localização. Você obterá o numerônimo exibindo a primeira e a última letra da palavra e contando o número de letras entre essas duas. Palavras que possuam menos de 4 letras não serão abreviadas, porque soaria muito estranho. O _input_ será uma frase, e você deverá abreviar todas as palavras que tiverem 4 ou mais letras. Não haverá pontuação nas frases. g2d l2k e6e
### Links úteis
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split" target="_blank">Array.prototype.split()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join" target="_blank">Array.prototype.join()</a>

 ### Input
`const input = 'Every developer likes to mix kubernetes and javascript';`
### Resultado esperado
`'E3y d7r l3s to mix k8s and j8t'`

<details>
  <summary>Solução (clique para exibir)</summary>
  
  ```
  const input = 'Every developer likes to mix kubernetes and javascript';

  const createNumeronym = (word) => word[0] + (word.length - 2) +  word[word.length - 1];

  input
  .split(' ')
  .map(function(word) {
    if(word.length >= 4) {
      return createNumeronym(word);
    }
    return word;
  })
  .join(' ');


  // sintaxe com Arrow function e ternário
  input
  .split(' ')
  .map(word => word.length >= 4 ? createNumeronym(word) : word)
  .join(' ')
  ```
</details>

## n! com `Map` e `Reduce`

Se o _input_ dado for um número, você deve retornar o fatorial daquele número. O fatorial de um número natural `n` é o produto dos números inteiros positivos menores ou iguais a `n`. Então, `2! = 2`, `3! = 6`, `4! = 24` e assim por diante.
### Links úteis
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map" target="_blank">Array.prototype.map()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/fill" target="_blank">Array.prototype.fill()</a>
 - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank">Array.prototype.reduce()</a>
 ### Input
`const input = 6;`
### Resultado esperado
`720`

<details>
  <summary>Solução (clique para exibir)</summary>
  Texto de resolução do problema a ser inserido posteriormente.
</details>

## Conte os elementos em uma array de arrays

Conte as ocorrências de elementos distintos na array bidimensional. O _input_ dado será uma array, e seus elementos serão arrays de strings. O resultado será um objeto cujo nome das propriedades serão os valores dos arrays e o número de suas ocorrências.
### Links úteis
 - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank">Array.prototype.reduce()</a>
  - <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/flat" target="_blank">Array.prototype.flat()</a>

   ### Input
`const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'f'],
    ['d', 'f', 'g'],
  ];`
### Resultado esperado
`{
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }`

<details>
  <summary>Solução (clique para exibir)</summary>
  
  ```
  const input = 6;

  const array = new Array(input).fill(null);
  // valor de array, neste momento, é [null, null, null, null, null, null]

  array
  .map(function(currentValue, index) {
    return index + 1;
  })
  .reduce(function(accumulator, currentValue) {
    return accumulator * currentValue;
  });


  // sintaxe com Arrow function
  new Array(input)
  .fill(null)
  .map((currentValue, index) => index + 1)
  .reduce((accumulator, currentValue) => accumulator * currentValue);
  ```
</details>

---
Once again, many thanks to <a href="https://twitter.com/devabram" target="_blank">David Abram</a> who gently authorized me to translate his article to portuguese. Muito obrigado!
