import { Id } from "../types";

export class CellId {
  constructor(private _id: Id) {}

  get value() {
    return this._id;
  }
}
