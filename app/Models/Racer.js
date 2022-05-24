
export class Racer {

    constructor(name, id) {

        this.name = name
        this.id = id

    }


    get Template() {
        return `
       <div class="row">
        <div class="track m-3 col-md-12 bg-dark">
          <span class="racer icon fs-2">
            "🐯"
          </span>

        </div>

      </div>

`
    }

}


