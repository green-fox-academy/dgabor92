// Create Sharpie class
// We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
// When creating an instance, we need to specify the color and the width
// Every sharpie object is created with a default 100 as inkAmount
// We can use() the sharpie objects which decreases inkAmount

'use strict';

export default class Sharpie {
  private _color: string;
  private _width: number;
  private _inkAmount: number;

  constructor(color: string, width: number) {
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  }
  use() {
    return this._inkAmount--;
  }

get color(){
return this._color;
}
get width(){
return this._width;
}
}
