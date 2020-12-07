'use strict';
import Student from './student';
import Mentor from './mentor';
export default class Cohort {
  private _name: string;
  private _students: Student[];
  private _mentors: Mentor[];

  constructor(name: string) {
    this._name = name;
    this._students = [];
    this._mentors = [];
  }

  addStudent(Student) {
    this._students.push(Student);
  }
  addMentor(Mentor) {
    this._mentors.push(Mentor);
  }
  info() {
    console.log(this._name, this._students.length, this._mentors.length);
  }
}
