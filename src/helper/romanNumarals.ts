/**
 * @class  RomanNumerals object is a singelton instance having two public methode
 * @method toRoman : returns the Roman numerals
 * @method fromRoman : returns the integer numerals
 */
class RomanNumerals {
  private static instance: RomanNumerals;

  [romanNumeralArray: string]: any;

  /**
   * The constructer of RomanNumerals is private becuase of it is a single instance
   */
  private constructor() {
    this.romanNumeralsList = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    this.romanNumeralArray = Object.keys(this.romanNumeralsList);
  }

  /**
   * @function getInstance is a methode which creates a single instance of object
   * @returns RomanNumerals
   */
  public static getInstance(): RomanNumerals {
    if (!RomanNumerals.instance) {
      RomanNumerals.instance = new RomanNumerals();
    }

    return RomanNumerals.instance;
  }

  /**
   * @param  {any} intergerNumber
   */
  public toRoman = (intergerNumber: any) => {
    return this.romanNumeralArray.reduce(
      (result: any, romanNumeral: string | number) => {
        while (intergerNumber >= this.romanNumeralsList[romanNumeral]) {
          result += romanNumeral;
          intergerNumber -= this.romanNumeralsList[romanNumeral];
        }

        return result;
      },
      ""
    );
  };

  /**
   * @param  {any} romanNumeral
   */
  public fromRoman = (romanNumeral: any) => {
    return [...this.romanNumeralArray]
      .sort((a, b) => b.length - a.length)
      .reduce((intergerNumber: number, romanCharacter: string | number) => {
        while (romanNumeral.includes(romanCharacter)) {
          intergerNumber += this.romanNumeralsList[romanCharacter];
          romanNumeral = romanNumeral.replace(romanCharacter, "");
        }

        return intergerNumber;
      }, 0);
  };
}

export default RomanNumerals.getInstance() as RomanNumerals;
