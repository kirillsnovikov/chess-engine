import { CHESS_FIGURE_TYPE } from "../constants";

export class ChessFigureType {
  constructor(private _title: CHESS_FIGURE_TYPE) {}

  get title() {
    return this._title;
  }
}
