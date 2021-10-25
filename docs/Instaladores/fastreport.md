---
sidebar_position: 5
---

# FastReport

## Instalação do FastReport

- Colar a pasta "Fastreport VCL Enterprise (SRC) v6.3.11" dentro do Disco Local C.
- Executar isntalador como administrador.
- Selecionar versão Tokyo 10.2 32bits.
- Selecionar Enterprise.
- Selecionar TeechartStd.
- Selecionar linguage Brazil, marcar "With debug info", "With FireDAC packages" e selecionar "Recompile all packages".
- Clicar em compiile.

- Após isso vai ser gerada a pasta LibD25 dentro da pasta do FastReport.
- Abra o Delphi e clique em Tools, selecionando Options.
- Dentro de Delphi Options, clique em Library e clique nos "..." da caixa Library Path.
-Dentro de "Directories", clique na pasta e adicione LibD25, Res, Source, FastScript e FastQB:
```
C:\Fastreport VCL Enterprise (SRC) v6.3.11\LibD25
C:\Fastreport VCL Enterprise (SRC) v6.3.11\Res
C:\Fastreport VCL Enterprise (SRC) v6.3.11\Source
C:\Fastreport VCL Enterprise (SRC) v6.3.11\FastScript
C:\Fastreport VCL Enterprise (SRC) v6.3.11\FastQB
```
- Clique em Component selecione Install Packages...
- Clique em Add...
- Selecione os arquivos .bpl dentro da pasta C:\Fastreport VCL Enterprise (SRC) v6.3.11\LibD25 e utilizando a Pesquisa, - selecione Any file (*.*) e pesquise "*25.*". 
- Selecione todos os arquivos e clique em abrir 
- Aperte okay para os avisos a seguir.

- Vídeos para auxiliar na instalação do FastReport:
```
https://www.youtube.com/watch?v=EZhnxezgECE&ab_channel=OussamaProfessional
```
Obs.: O vídeo acima está em árabe, porém é bem intuitivo e fácil de entender.

```
https://www.youtube.com/watch?v=yvMHwrIFSY0&ab_channel=SWHSistemas
```