export default class Scroll {

    constructor() {
        this.last_pos = 0
    }

    ScrollDirection() {
        let current = window.pageYOffset;
        if (current > last_pos) {
            this.last_pos = current;
            return true;
        }
        if (current < last_pos) {
            this.last_pos = current;
            return false;
        }
    }
}


// export default Scroll;
// module.exports = Scroll;