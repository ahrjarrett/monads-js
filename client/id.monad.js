// Identity for the browser

// Monad returns a function "unit" that takes a value that replaces the null in the object monad that is bound to the function "bind"
// This allows us to initialize the object and pass in functions that will return some kind of operation or procedure on "value"
function Monad() {
  var prototype = Object.create(null)
  return function unit(value) {
    var monad = Object.create(prototype)
    monad.bind = function(func, args) {
      return func.apply(undefined,
        [].concat(Array.prototype.slice.apply(args || [])))
    }
    return monad
  }
}

// Example use:

//var identity = Monad()
//var monad = identity("Hello")
//monad.bind(alert, "cruel wurld") // Alerts "Hello cruel world"
