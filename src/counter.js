/* 
 * Singleton class that generates ids 
 * to be used as unique variable names
 */

let value = 0

module.exports = {
  increment: () => value++,
  get: () => value
}
