import { MaxValue } from "./constant";

/**
 * @function validateInput is a methode which validates the value of fields
 * @param  {any} value
 */
export const validateInput = (value: any) =>
  value === "" ||
  (isNaN(value) && value.toUpperCase().match(/[^MDCLXVI]/)) ||
  value > MaxValue;
