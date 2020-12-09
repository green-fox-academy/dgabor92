'use strict';

export default class Sum {
  sumAllNumber(lists: number[]): number {
    let result: number = 0;
    for (let i: number = 0; i < lists.length; i++) {
      result += lists[i];
    }
    return result;
  }
  listAllNumber(lists: number[]): number[] {
    let result: number[] = [];
    for (let i: number = 0; i < lists.length; i++) {
      result.push(lists[i]);
    }
    return result;
  }
}

let array = new Sum();

console.log(array.sumAllNumber([1, 2, 3, 4]));
