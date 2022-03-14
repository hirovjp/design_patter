class TeamMemberView {
    printTeamMemberDetails(memberName, memberRoll) {
        console.log(`Team Member:\n  Name: ${memberName}\n  Roll: ${memberRoll}`);
    }
}
//MVC App
class MVCApp {
    render() {
        const model = new TeamMember("Huanld", "SM");
        const view = new TeamMemberView();
        const controller = new TeamMemberController(model, view);

        controller.updateView();
        controller.setMemberName("TruongND");
        controller.setMemberRoll("Dev");
        controller.updateView();
    }
}

//Main
const app = new MVCApp();
app.render();