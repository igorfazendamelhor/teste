---
sidebar_position: 2
---

# Unit

## Anatomia de uma unit

### Nomear/Iniciar formulário

import unitImageUrl from '@site/static/img/unit.png';

<img src={unitImageUrl} />

Aqui você coloca o nome da unit.

### Interface

import unit1ImageUrl from '@site/static/img/unit1.png';

<img src={unit1ImageUrl} />

Na *interface* podem ser declaradas variáveis, constantes, types, funções e procedures. Somente a declaração, não a função como um todo. Todas as declarações podem ser chamadas de pública.

#### Uses (interface) 

import unit2ImageUrl from '@site/static/img/unit2.png';

<img src={unit2ImageUrl} />

Na *uses* da interface são declaradas as units utilizada pela unit principal para rodar a aplicação. O próprio Delphi implementa essas units, mas também podem ser declaradas mais units.

#### Type (interface)

import unit3ImageUrl from '@site/static/img/unit3.png';

<img src={unit3ImageUrl} />

Aqui são declarados os tipos de cada elemento, como o tipo dos componentes, o tipo do formulário, e também declara procedures (cabeçalho).

### Implementation

import unit4ImageUrl from '@site/static/img/unit4.png';

<img src={unit4ImageUrl} />

Semelhante a seção de interface, porém pode ser chamada de privada, ou seja, só será possivel acessar as funções e procedimentos desta seção.

### Estrutura de uma procedure

import unit5ImageUrl from '@site/static/img/unit5.png';

<img src={unit5ImageUrl} />

- Declaramos a procedure com o comando procedure;
- Iniciamos com o comando begin;
- Finalizamos com o comando end;

:::tip 
Obs: O comando "end." deve ser inserido no final da unit para finalizar o formulário.
:::



 


