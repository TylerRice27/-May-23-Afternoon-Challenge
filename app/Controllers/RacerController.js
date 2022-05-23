import { racerService } from "../Services/RacerService.js";


export class RacerController {
    constructor() {
        console.log("hello from Racer Controller");


    }

    click() {

        racerService.serviceClick()
    }
}