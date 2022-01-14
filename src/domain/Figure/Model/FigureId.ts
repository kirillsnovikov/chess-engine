import { Id } from "../types";

export class FigureId {
  constructor(private _id: Id) {
    if (_id === "") {
      throw Error("ID cant be as empty string");
    }
  }

  get value() {
    return this._id;
  }
}
