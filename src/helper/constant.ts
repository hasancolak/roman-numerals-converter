export const MaxValue = 3999;

/**
 * @Object InitialState
 */
export const InitialState = {
  roman: {
    min: 1,
    max: 3999,
    step: 1,
    title: "To Roman Converter",
    label: "Integer Number",
    name: "roman",
    type: "number",
  },
  integer: {
    title: "To Integer Converter",
    label: "Roman Number",
    name: "integer",
    type: "text",
    pattern: "[A-Za-z]",
  },
};
