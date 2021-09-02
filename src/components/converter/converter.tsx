import "./converter.scss";
import React, { useState } from "react";
import Input from "../input/input";
import Button from "../button/button";
import RomanNumerals from "../../helper/romanNumarals";
import { validateInput } from "../../helper/utils";
import { InitialState } from "../../helper/constant";

/**
 * @function Converter is a component showing and managing conversion from roman numerals to interger and from integer to roman numerals
 * @param  {converter}
 */
const Converter = ({ converter, ...pops }: any) => {
  const { title, ...rest } =
    InitialState[converter as keyof typeof InitialState];
  const [state, setState] = useState({ roman: "", integer: "" });
  const [result, setResult] = useState<{
    roman: string;
    integer: number | null;
  }>({ roman: "", integer: null });

  const [error, setError] = useState({ roman: "", integer: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (validateInput(value)) {
      setError({ ...error, [name]: "Invalid input" });
      setState({
        ...state,
        [name]: isNaN(value) ? value.toUpperCase() : value,
      });
    } else {
      setError({ ...error, [name]: "" });
      setState({
        ...state,
        [name]: isNaN(value) ? value.toUpperCase() : value,
      });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { roman, integer } = state;

    if (converter === "roman") {
      setResult({
        ...result,
        roman: error.roman === "" ? RomanNumerals.toRoman(roman) : "",
      });
    } else {
      setResult({
        ...result,
        integer: error.integer === "" ? RomanNumerals.fromRoman(integer) : null,
      });
    }
  };

  return (
    <div className="converter-container">
      <h2>{title}</h2>

      <div className={"converter-content converter-content__" + converter}>
        <Input
          value={state[converter as keyof typeof state]}
          handleChange={handleChange}
          error={error[converter as keyof typeof state]}
          {...rest}
        ></Input>
        <Button text="Convert" onClick={handleSubmit} type="button"></Button>
        <div className="result">{result[converter as keyof typeof result]}</div>
      </div>
    </div>
  );
};

export default Converter;
