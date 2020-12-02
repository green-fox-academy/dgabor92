// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
  private _backgroundColor: string;
  private _textOnIt: string;
  private _textColor: string;

  constructor(backgroungColor: string, textOnIt: string, textColor: string) {
    this._backgroundColor = backgroungColor;
    this._textColor = textColor;
    this._textOnIt = textOnIt;
  }
}

let example1 = new PostIt('orange', 'Idea 1', 'blue');
console.log(example1);

let example2 = new PostIt('pink', 'Awesome', 'black');
console.log(example2);

let example3 = new PostIt('yellow', 'Superb!', 'green');
console.log(example3);
