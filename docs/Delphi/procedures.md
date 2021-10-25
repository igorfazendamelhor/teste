---
sidebar_position: 3
---

# Procedures

## Procedures utilizadas no formulário padrão

### FormCreate

import procedureImageUrl from '@site/static/img/procedure.png';

<img src={procedureImageUrl} />

Serve para criar form em tempo de execução, e também para a gente abrir previamente dados do Banco de Dados ou variáveis que devem ser usadas ao criar a página.

### FormDestroy

import procedure1ImageUrl from '@site/static/img/procedure1.png';

<img src={procedure1ImageUrl} />

Serve para destruir form em tempo de execução e também para fechar todas as querys do Banco de Dados.

### IWBTNACAO

import procedure2ImageUrl from '@site/static/img/procedure2.png';

<img src={procedure2ImageUrl} />

O botão *SetaAcao* serve para capturar variáveis que venham do cliente através do HTML, do lado do HTML usando o script. 

### IWTemplateProcessorHTML

Serve para carregar o modelo externo do HTML para o Delphi;

Substitui as tags dentro do HTML da página.

import procedure3ImageUrl from '@site/static/img/procedure3.png';

<img src={procedure3ImageUrl} />

- Se na tag for chamado "Menu Principal" no HTML,
então o valor recebe noem do menu principal;
- Se na tag for chamado "Usuário Atual" no HTML,
e se nessa condição o comprimento for maior que 15,
entao o valor recebe cópia do usuario com os parâmetros 1, 15, concatenando com "...",
se não, recebe UpperCase no usuário (letras maiúsculas);
- Se na tag for chamado "Data Último Acesso",
então o valor vai receber dataultimoacesso;
- Se na tag for chamado "Crudtela" no HTML,
então o valor vai receber controle do GLBCrud;
- Se na tag for chamado "Cliente" no HTML,
então o valor vai receber cliente;
- Fim da procedure.



