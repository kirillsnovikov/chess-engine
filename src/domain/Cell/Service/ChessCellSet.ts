import { Cell } from "../Model/Cell";
import { CellSetFactory } from "./CellSetFactory";

export const chessCellSet: Cell[] = new CellSetFactory(8).cells;
