const {add, multiply: multiplyFromModule} = require('./calculator')

/**
 * @file index.js is the root file for this example app
 * @author Pavel Kushkov
 * @see <a href="https://jsdoc.app">JSDoc official</a>
 */

/**
 * Student name
 * @type {string}
 */
const studentName = 'Joe Doe'

console.log(studentName)

/**
 * Array of grades
 * @type {Array}
 */
const grades = [98, 97.7, 76, 89]

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: 1,
  text: 'Hello',
}

/**
 * Multiply x by y
 * @param {number} x First value
 * @param {number} y Second value
 * @returns {string} The result of multiplying values
 */
const multiply = (x, y) => {
  return `$${x * y}`
}

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id Student ID
 * @property {string} name Student name
 * @property {string|number} [age] Student age (optional)
 * @property {boolean} isActive Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'Joe Doe',
  age: 20,
  isActive: true,
}

/**
 * Class to create a persson object
 */
class Person {
  /**
   *
   * @param {Object} personInfo Information about the person
   */
  constructor(personInfo) {
    /**
     * @property {string} name Person name
     */
    this.name = personInfo.name
    /**
     * @property {string} age Person age
     */
    this.age = personInfo.age
  }

  /**
   * @property {Function} greet A greeting with the name and age
   * @returns void
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`)
  }
}

/**
 * Person one
 * See {@link Person}
 */
const person1 = new Person({
  name: 'Joe Doe',
  age: 30,
})

console.log(multiply(20, 30))
