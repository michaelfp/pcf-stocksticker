import { IStock } from "./IStock";

export default class StockTickerChart implements IStock {
  StockItens: string;
  Locale: string;
  RenderControl(): HTMLElement {
    let divMain = document.createElement("div");
    divMain.className = "tradingview-widget-container";

    let divWidgetContainer = document.createElement("div");
    divWidgetContainer.className = "tradingview-widget-container__widget";
    let stockScript = document.createElement("script");
    stockScript.type = "text/javascript";
    stockScript.async = true;
    stockScript.innerText = JSON.stringify(this.ParseItens());
    console.log(stockScript);
    stockScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-tickers.js";
    divMain.appendChild(divWidgetContainer);
    divMain.appendChild(stockScript);

    return divMain;
  }

  ParseItens(): any {
    const stocks = {
      symbols: [{}],
      colorTheme: "light",
      isTransparent: true,
      locale: this.Locale !== undefined ? this.Locale : "en-us",
    };
    if (this.StockItens !== undefined) {
      const stockList = this.StockItens.split(";").map((item) => {
        return {
          proName: item,
          title: "",
        };
      });
      console.log(this.StockItens);
      console.log(stockList);
      stocks.symbols = stockList; // JSON.parse(this.StockItens);
    } else {
      stocks.symbols = [
        {
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "Nasdaq 1000",
        },
        {
          description: "EURO / USD",
          proName: "FX:EURUSD",
        },
      ];
    }
    return stocks;
    console.log(stocks);
  }
}
