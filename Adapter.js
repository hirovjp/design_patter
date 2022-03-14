class TruongND {
    do300ropeSkips() {
        console.log("do 100 rope skips...");
    }
    do50pushups() {
        console.log("do 100 pushups...");
    }
}

class Trainee {
    doExercise() {}
}

//Adapter
class Adapter extends Trainee {
    constructor(clone) {
        super();
        this.clone = clone;
    }

    doExercise() {
        this.clone.do300ropeSkips();
        this.clone.do50pushups();
        console.log("Done!");
    }
}

//Main
const dauPhaiTruong = new TruongND();
const trainee = new Adapter(dauPhaiTruong);
trainee.doExercise();