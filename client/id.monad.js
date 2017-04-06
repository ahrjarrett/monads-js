// Identity for the browser

// Monad returns a function "unit" that takes a value that replaces the null in the object monad that is bound to the function "bind"
// This allows us to initialize the object and pass in functions that will return some kind of operation or procedure on "value"
function Monad() {
  return function unit(value) {
    var monad = Object.create(null)
    monad.bind = function(func) {
      return func(value)
    }
    return monad
  }
}

// Example use:
//var identity = Monad()
//var monad = identity("Hello wurld")
//monad.bind(alert) // Alerts "Hello wurld"
