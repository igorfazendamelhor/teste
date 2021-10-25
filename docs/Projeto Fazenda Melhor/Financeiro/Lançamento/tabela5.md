---
sidebar_position: 2
---

# Tabelas de dependência de gravação

### Lançamento

import lancamentoImageUrl from '@site/static/img/lancamento.png';

<img src={lancamentoImageUrl} />

Para gravar o lançamento é necessário preencher os seguintes campos:

- **Tipo de Documento**;
- **Pessoas**;
- **Centro de Custo**;
- **Plano de Contas**: A maioria dos planos de contas possuem um tipo financeiro de despesa ou receita já selecionados no campo. 

import despesaImageUrl from '@site/static/img/despesa.png';

<img src={despesaImageUrl} />

import receitaImageUrl from '@site/static/img/receita.png';

<img src={receitaImageUrl} />

Exceto em alguns planos de contas onde o campo muda, esses planos de conta são:
 
 ***Empréstimo***: O tipo financeiro liberado é Entrada/liberação e Saída/liquidação.

import emprestimoImageUrl from '@site/static/img/emprestimo.png';

<img src={emprestimoImageUrl} />

 
 ***Pedidos a Receber***: O tipo financeiro liberado é Entrada/devolução de pedido e Saída/pagamento de pedido. 


import pedidosImageUrl from '@site/static/img/pedidos.png';

<img src={pedidosImageUrl} />


 ***Adiantamento***: O tipo financeiro liberado é Entrada/devolução de adiantamento e Saída/adiantamento.


import adiantamentoImageUrl from '@site/static/img/adiantamento.png';

<img src={adiantamentoImageUrl} />


- **Valor**; 
- **Observação**;
- **Documento**;
- **Propriedade**;
- **Proprietário**: caso na tela Cadastro de Proprietário a Forma de Apuração seja *direta*, aparecerá um campo proprietário na tela de lançamentos dentro da tela principal (deve ser preenchido obrigatoriamente). Caso a Forma de apuração escolhida for *rateio*, irá aparecer o campo proprietário na tela de detalhes da tela de lançamentos (preenchimento não obrigatório). 
