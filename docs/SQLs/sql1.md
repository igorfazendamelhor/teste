---
sidebar_position: 2
---

# Correção lançamentos LCDPR

### Para corrigir lançamentos sem tipo de lançamento do livro caixa.
```
-- UPDATE EM CAMPOS TIPO_LANC = NULL  DA TABELA FINANCEIRO
-- ALIMENTANDO COM CAMPO  TIPO_LANC DA TABELA CONTAS_PLANO

execute block
as --Declara as variaveis
DECLARE codigofinan INT;
DECLARE planodecontas INT;
DECLARE tipodolanc INT;
DECLARE tipolancdoplanodeconta;
begin

  for --Percorre o select que puxa todos os registros do BOVINOS_MOVIMENTO
    SELECT A.CODIGO, A.PLANO_CONTA, A.TIPO_LANC FROM FINANCEIRO A
    WHERE A.PRODUTOR = 11 
    into codigofinan, planodecontas, tipodolanc
  do
  begin
   
    SELECT A.TIPO_LANC FROM CONTAS_PLANO A
    WHERE PRODUTOR = 11
    AND A.CODIGO = :planodecontas
    into tipolancdoplanodeconta


    if tipodolanc is null then   
    begin 
      --Da o update no registro anterior
      --Se for o primeiro registro desse boi será tudo NULL
      update FINANCEIRO A set A.TIPO_LANC = :tipolancdoplanodeconta,  where A.CODIGO = :codigofinan;
    end
   end
end
```