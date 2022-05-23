import { RacerController } from "./Controllers/RacerController.js";

class App {
  // valuesController = new ValuesController();
  racerController = new RacerController()
}

window["app"] = new App();
