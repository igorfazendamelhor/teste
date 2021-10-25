---
sidebar_position: 1
---

# Plano de contas padrão

### Para gerar planos de contas em planilha do Excel.

```
SELECT
CODIGO,
CONTAS_PLANO AS NOME,
CASE TIPO_FIN WHEN 'M' THEN 'MOVIMENTO' WHEN 'C' THEN 'RECEITA' WHEN 'D' THEN 'DESPESA' END AS TIPO_FIANCEIRO,
CASE TIPO_GRUPO WHEN 'T' THEN 'TOTALIZADORA' WHEN 'A' THEN 'ANALITICA' END AS TIPO_GRUPO,
CLASSIFICACAO,
LCDPR AS CONTA_BANCARIA_LCDPR,
PAIS_CTA,
BANCO,
NOME_BANCO,
AGENCIA,
NUM_CONTA,
SEQUENCIAL,
CASE TIPO_LANC WHEN 1 THEN '1 - Receita da Atividade Rural' WHEN 2 THEN '2 - Despesas de custeio e investimentos' WHEN 3 THEN '3 - Receita de produtos entregues no ano referente a adiantamento de recursos financeiros' WHEN 4 THEN '4 - Não agregar ao Livro Caixa do Produtor Rural' ELSE 'NÃO INFORMADO' END AS TIPO_LANCAMENTO,
COD_CONTA,
ORDEM_DRA,
JUROS_DESCONTO,
RECEBIDO_CONCEDIDO,
PRINCIPAL
FROM CONTAS_PLANO
WHERE PRODUTOR = 9
```