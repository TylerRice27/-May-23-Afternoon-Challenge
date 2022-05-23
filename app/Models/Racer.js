
export class Racer {

    constructor(name, id) {

        this.name = name
        this.id = id

    }


    get Template() {
        return `
       <div class="street row bg-dark">
        <div class="track col-md-12 bg-dark">
          <span class="racer icon fs-2">
            "🐯"
          </span>

        </div>

      </div>

`
    }

}


