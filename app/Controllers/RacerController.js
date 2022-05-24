import { ProxyState } from "../AppState.js";
import { racerService } from "../Services/RacerService.js";

//Private//
function draw() {
    let racers = ProxyState.racers
    let Template = ''

    racers.forEach(r => Template += r.Template)


    document.getElementById("racer-template").innerHTML = Template
}


//Public//
export class RacerController {
    constructor() {
        console.log("hello from Racer Controller");

        draw()
    }








    click() {

        racerService.serviceClick()
    }
}
