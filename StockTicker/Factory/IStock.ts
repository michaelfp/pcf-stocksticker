export interface IStock {
  StockItens: string;
  Locale: string;
  RenderControl(): HTMLElement;
  ParseItens(): any;
}
