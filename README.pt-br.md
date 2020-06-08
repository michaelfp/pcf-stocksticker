**Ações e Widget Forex - Componente Power Apps**

> [!TIP]
> If you want to read in Brazilian language click [here](readme.pt-br.md)

Um componente do Power Apps para mostrar ativos que são negociados nas diversas bolsas de valores e forex ao redor do mundo.

Ticker Componente:
![Ticker](StockTicker_ticker.jpg)

Mini gráfico componente:
![Mini Chart](StockTicker_mini.jpg)

Este componente possui os seguintes atributos:

| Nome do Atributo | Descrição                                                                                                                                                 | Tipo   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| **StockField**   | Campo que mostrará o componente                                                                                                                           | string |
| **StockType**    | O tipo de componente que você gostaria de mostrar: (0) Ticker (1) Mini-gráfico                                                                            | string |
| **StockItens**   | Os códigos dos ativos a serem mostrados. Para o ticker, você precisa usar ponto e vírgula para separar os ativos. O mini gráfico suporta apenas um ativo. | string |
| **StringLocale** | Idioma para mostrar os dados: en, es, uk, pt-br                                                                                                           | string |

Este componente é baseado em widgets da Tradeview ([http://www.tradeview.com](http://www.tradeview.com)). Os códigos dos ativos que você usará precisam ser obtidos no site da Tradeview.

Se precisar de ajuda, entre em contato.
