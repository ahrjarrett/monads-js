// Identity on the server

const Monad = () => {
  return function(value) {
    let monad = Object.create(null)
    monad.bind = (fn) => fn(value)
    return monad
  }
}

// Example Usage:
const identity = Monad()
const monad = identity('hello wurld')
monad.bind(console.log)

module.exports = Monad
