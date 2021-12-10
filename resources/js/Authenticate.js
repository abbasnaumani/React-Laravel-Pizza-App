class Authenticate {
    constructor() {
        this.authenticated = false;
    }

    login() {
        this.authenticated = true;
      //  cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated() {
        return this.authenticated;
    }
}

export default new Authenticate();
