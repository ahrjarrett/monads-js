// Identity on the server

const Monad = () => {
  let prototype = Object.create(null)
  return function(value) {
    let monad = Object.create(prototype)
    monad.bind = (fn, ...args) => fn(value, ...args)
    return monad
  }
}

//// Example Usage:
//const identity = Monad()
//const monad = identity('hello wurld')
//monad.bind(console.log, 'it’s me, the identity monad')
//// => hello wurld it’s me, the identity monad

module.exports = Monad
