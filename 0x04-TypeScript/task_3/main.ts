import { RowID, RowElement } from "./interface"
import * as CRUD from "./crud"

let row: RowElement = {
  firstName: "John",
  lastName: "Doe",
}

const newRowID: RowID = CRUD.insertRow(row)
const updatedRow: RowElement = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
}

CRUD.updateRow(newRowID, updatedRow)
CRUD.deleteRow(newRowID)
