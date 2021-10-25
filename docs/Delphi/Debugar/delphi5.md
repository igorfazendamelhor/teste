---
sidebar_position: 2
---

# Como debugar no Delphi

Primeiramente, vá no código do projeto no Delphi e inicie um *Breakpoint* no início do código específico que deseja debugar: 

import dbImageUrl from '@site/static/img/db.png';

<img src={dbImageUrl} />

Siga a linha de indentação até o final do código desejado e coloque um *Breakpoint* no final para especificar o fim do debug:

import db1ImageUrl from '@site/static/img/db1.png';

<img src={db1ImageUrl} />

Quando for clicado dentro do layout em um elemento onde existe *debugger* implementado no código, ele irá apontar no Delphi e irá inicializar a debugação:

import db2ImageUrl from '@site/static/img/db2.png';

<img src={db2ImageUrl} />

Vá clicando F8 ou F9 e pulando linhas de comando até chegar no *Breakpoint* final:

import db3ImageUrl from '@site/static/img/db3.png';

<img src={db3ImageUrl} />

Clique F9 para finalizar ou iniciar um novo debug.

