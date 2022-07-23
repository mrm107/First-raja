class Scroll {

    constructor() {
        this.last_pos = 0
    }
    ScrollDirection() {
        let current = window.pageYOffset;
        if (current > this.last_pos) {
            this.last_pos = current;
            return true;
        }
        if (current < this.last_pos) {
            this.last_pos = current;
            return false;
        }
    }
}


// export Scroll;
// module.exports = Scroll;