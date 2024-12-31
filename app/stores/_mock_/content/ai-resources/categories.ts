import { data } from "./resources"
import _ from "lodash"

const getCategories = () => {
  return _.omit(data, ["resources"])
}

