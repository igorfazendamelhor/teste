---
sidebar_position: 2
---

# Lista de comandos

## Ajuda
```
  #Exibe informações de ajuda sobre Git
  git help
```

## Vincular nome e e-mail
```
  git config --global user.name "Fulano de Tal"
  git config --global user.email fulanodetal@gmail.com.br
```
 
## Verificar nome e e-mail vinculado
```
  git config user.name
  git config user.email
```

## Trocar usuário depois de ter acessado com outro usuário
- Acessar **Gerenciador de Credenciais** no Windows.
- Acessar **Credenciais Genéricas**. 
- Remover **credenciais do GitLab**.
- Após isso usar os seguintes comandos no terminal para acessar o novo usuário:
```
  git config --global user.name "Fulano de Tal"
  git config --global user.email fulanodetal@gmail.com.br
```

## Commitar suas alterações para o repositório remoto (**git add e push**)
- Para visualizar quais arquivos possuem alterações na sua versão local (que ainda não foram commitadas):
```
  git status  
```

- Preparar quais alterações deseja commitar (o comando **git add** é usado para informar quais arquivos ou diretórios você quer commitar, mas antes são adicionados a um índice): 
```
  # Prepara todos os arquivos (que não estão listados no .gitignore) 
  git add .

  # Prepara um arquivo ou diretório especifico 
  git add nomedoarquivo.md 
```

- Confirmar as alterações que foram adicionadas pelo **git add** no índice: 
```
  # É possível adicionar uma mensagem de referência a esse commit, nomea-lo
  git commit –m “coloque sua mensagem aqui”
```

- Resetar esse último commit, caso tenha sido feito errado: 
```
  git reset HEAD~1  
```

- Subir as alterações commitadas para o repositório remoto (alterações que foram adicionadas no índice usando o **git add**): 
```
  git push origin master  
```

## Clonar repositórios
- O **git clone** é usado para copiar um repositório Git existente em um novo diretório local.
- Abrir o terminal na pasta que você quer armazenar o repositório e digitar o seguintes comandos:

```
  git clone https://gitlab.com/contato152/documentacao-fazenda-melhor.git
```

## Puxar repositórios 
- O comando **git pull** é usado para buscar e baixar conteúdo de repositórios remotos e fazer a atualização imediata ao repositório local para que os conteúdos sejam iguais.
- Abrir o terminal na pasta que você quer atualizar o repositório e digitar o seguintes comandos:
```
  # Incorpora as alterações de um repositório remoto no ramo local
  git pull
```

## git branch
Antes de utilizar o **git branch** é necessário entender o sistema de ramificações do git:
- O git utiliza um sistema de ramificações, dessa forma, é possível criar ramos (branch´s) com alterações diferentes, sem comprometer o ramo principal.
- O **git branch** é um comando usado para realizar operações com branches, ou seja, ramificações do código. Essas operações podem ser criar, listar, renomear ou excluir. Você pode pensar em uma ramificação de código como se você “duplicasse” o código de um lugar para outro e criasse um novo ambiente de desenvolvimento.

Na imagem abaixo, a partir de determinados pontos do código, foram criadas outras ramificações (branch´s).
Uma ramificação não depende da outra para continuar sendo desenvolvida, isso significa que o branch principal não é alterado e continuará funcionando enquanto arrumamos algum bug ou desenvolvemos uma nova feature.
Quando elas estiverem prontas, aí sim poderemos juntar esse código no branch principal.

![Exemplo Branches](https://lh5.googleusercontent.com/ByJxAPDtlT6I3uHFZeoXRiYwyrVkdIY6Iho8chNGp4DL9Ke8snH9SKCYs10G0bWf-xc_DMgcRIpvrQw0LbQ809tdpi6SBx7lyQ2W6ZRI5EhUFO4jkVLPw3SuAxoGik97qWYg_Kmm)

Qual a diferença entre branch local e branch remoto?
- Branch local é uma ramificação do seu código que apenas você vê, ou seja, está apenas no seu computador localmente. Por exemplo, quando você cria um branch (com **git branch nomedobranch**), ele estará visível apenas para você. 

- Já um branch remoto, é quando esse branch está alocado em um outro local remotamente, geralmente público ou restrito a um grupo de pessoas. Quando você usa o comando **git push origin nomedobranch** você está pegando o seu branch local e colocando ele para origin, um “lugar” remoto.

Como usar um branch do Git:

```
  # Para criar um novo branch basta usar o comando:
  git branch nomedobranch
```

Mas perceba que esse comando só vai criar o branch. Você continuará no branch que já estava. Para começar a fazer alterações no novo branch, você precisa alterar para esse branch usando git

```
  # Alterar para branch pelo nome
  checkout nomedobranch

  # Uma outra forma mais simples de fazer isso é usando a opção -b do git checkout, que cria e já muda para o branch criado
  git checkout -b nomedobranch
```

Listando os branchs criados

- Para saber a lista de branches que existem no seu repositório 

```
  git branch
```

Como renomear branches

- Quando você quiser trocar o nome do seu branch, vá até o seu branch e execute o comando

```
  git branch -m novonome
```

Excluindo um branch

- Para excluir um branch local basta usar o comando

```
  git branch -d nomedobranch
```

## git merge
Esse comando incorpora as alterações dos commits para dentro do ramo atual. 
Este comando é utilizado pelo git pull para incorporar as alterações vindos de outro repositório e pode ser utilizado manualmente para mesclar as alterações do outro ramo para um outro.

- Para fazer merge de um outro branch ao seu branch ativo (ex. master), use
```
  # o git tentará fazer o merge (fundir) as alterações
  git merge nomedobranch
```

Infelizmente, isto nem sempre é possível e resulta em conflitos
-Você é responsável por fazer o merge estes conflitos manualmente editando os arquivos exibidos pelo git. Depois de alterar, você precisa marcá-los como merged com
```
  git add arquivo
```
- Antes de fazer o merge das alterações, você pode também pré-visualizá-as usando
```
  git diff <branch origem> <branch destino>
```


## Comando stash, armazenar alterações
Utilizando o comando **git stash** é possível armazenar alterações que ainda não estão prontas para serem commitadas.
- No terminal você deve inserir os seguintes comandos:
```
  git stash
```
- Para armazenar com uma mensagem de referência: 
```
  git stash save "esta é uma mensagem para exibir na lista como referência"
```
- Toda vez que é realizado um **git stash** ele é empilhado/armazenado em uma **lista**, de uma forma que possamos visualizar utilizando o comando:
```
  git stash list

  # ou para mais informações (métodos de registro) 
  git stash list --stat
```
- Para excluir uma posição (referente a um **stash**) dessa lista é necessário remover manualmente: 
```
  # Excluir o último stash realizado (o mais recente) 
  git stash drop

  # Ou para excluir pelo nome
  git stash drop <nome>

  # Para excluir todo o histórico guardado
  git stash clear
```
- Reaplicar as alterações que foram armazenadas com **git stash**: 
```
  # Utilizando o 'stash pop', ele reaplica as alterações do último 'stash' armazenado (mais recente) e exclui esse 'stash'
  git stash pop

  # Utilizando o 'stash apply', ele reaplica as alterações do último 'stash' armazenado (mais recente) mas mantém o 'stash'
  git stash apply

  # Usando o 'apply' passando o parâmetro da posição do 'stash' armazenado na lista
  git stash apply stash@{3}
```