import { IStock } from "./IStock";

export default class StockMiniChart implements IStock {
  StockItens: string;
  Locale: string;
  RenderControl(): HTMLElement {
    let divMain = document.createElement("div");
    divMain.className = "tradingview-widget-container";

    let divWidgetContainer = document.createElement("div");
    divWidgetContainer.className = "tradingview-widget-container__widget";
    let stockScript = document.createElement("script");
    stockScript.type = "text/javascript";
    stockScript.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
    stockScript.async = true;
    stockScript.innerText = JSON.stringify(this.ParseItens());

    divMain.appendChild(divWidgetContainer);
    divMain.appendChild(stockScript);

    return divMain;
  }

  ParseItens(): any {
    return {
      symbol:
        this.StockItens !== undefined || this.StockItens !== ""
          ? this.StockItens
          : "FX:EURUSD",
      width: 350,
      height: 220,
      locale: this.Locale !== undefined ? this.Locale : "en-us",
      dateRange: "12m",
      colorTheme: "light",
      trendLineColor: "#37a6ef",
      underLineColor: "#E3F2FD",
      isTransparent: false,
      autosize: true,
      largeChartUrl: "",
    };
  }
}
