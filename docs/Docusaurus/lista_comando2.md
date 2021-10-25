---
sidebar_position: 1
---

# Lista de comandos

### Tamanho da fonte dos títulos/subtítulos

Para deixar os títulos maiores ou menores, você pode utilizar #, ## ou ###. Percorrendo dessa forma o tamanho das fontes de maiores para menores (decrescente).

### Caixa para a inserção de códigos

Para inserir determinado texto ou código dentro de uma caixa de código, você pode utilizar os elementos ``` no início e ao final do texto. 

Por exemplo:

```
Teste Fazenda Melhor
```

### Inserir caixa de alerta

Para inserir uma caixa de alerta, como uma lâmpada (ideia) e danger (perigo), você utiliza :::tip ou :::danger no início do texto e no final adicione :::.

Por exemplo:

:::tip
Teste Fazenda Melhor
:::

:::danger
Teste Fazenda Melhor
:::

### Inserir imagens 

Para inserir imagens, a imagem precisa estar convertida em um modelo aceitável. Depois disso você utiliza o seguinte comando:

```
import DocusaurusImageUrl from '@site/static/img/docusaurus.png';

<img src={DocusaurusImageUrl} />;
```
A imagem deve estar na pasta do diretório e deve ser chamada igual ao que a função está chamando.