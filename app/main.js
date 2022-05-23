import { ValuesController } from "./Controllers/RacerController.js";

class App {
  valuesController = new ValuesController();
}

window["app"] = new App();
