class RedGuyApi {

    options = {};

    constructor(token,options = {}) {
        options.token = token;

        if(typeof options.v === "undefined") {
            options.v = "1.1";
        }

        this.options = options;
    }

    Math() {
        return new (require("./Math"))(this.options);
    }

    Store() {
        return new (require("./Store"))(this.options);
    }

    Users() {
        return new (require("./Users"))(this.options);
    }

    Event() {
        return new (require("./Event"))(this.options);
    }

    Teams() {
        return new (require("./Teams"))(this.options);
    }

    Minecraft() {
        return new (require("./Minecraft"))(this.options);
    }
}

module.exports = RedGuyApi;