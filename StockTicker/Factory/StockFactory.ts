import { IStock } from "./IStock";
import StockMiniChart from "./StockMiniChart";
import StockTickerChart from "./StockTickerChart";

export const enum StockType {
  Ticker,
  MiniChart,
}

export default class StockFactory {
  public static Create(
    type: StockType,
    itens: string,
    localeLanguage: string
  ): IStock {
    switch (type) {
      case StockType.MiniChart:
        let miniChart = new StockMiniChart();
        miniChart.StockItens = itens;
        miniChart.Locale = localeLanguage;
        console.log(miniChart);
        return miniChart;
        break;
      case StockType.Ticker:
        let ticker = new StockTickerChart();
        ticker.StockItens = itens;
        ticker.Locale = localeLanguage;
        console.log(ticker);
        return ticker;
        break;

      default:
        throw new Error("You must select the type of the stock.");
    }
  }
}
