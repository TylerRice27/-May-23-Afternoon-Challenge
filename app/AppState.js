import { Racer } from "./Models/Racer.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */

  /** @type {import('./Models/Racer').Racer} */
  values = []
  racers = [new Racer('Batman'), new Racer('Superman'), new Racer('Flash'), new Racer('Joker')]
  cars = []
}




export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
