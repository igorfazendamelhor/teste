---
sidebar_position: 1
---

# Subir Repositório

## Criar um projeto no GitLab:
- Ir na pasta do projeto e abrir o Git Dash dentro dela.
- Inserir as seguintes linhas de comando (exemplos que são gerados):

- **Para logar no seu repositório:**
```
  git config --global user.name "Igor Fazenda Melhor"
  git config --global user.email "igor@fazendamelhor.com.br"
```

- **Para uma pasta existente:**
```
  git init
  git remote add origin https://gitlab.com/fazenda-melhor/fazenda-melhor.git
  git add .
  git commit -m "Initial commit"
  git push -u origin master
```