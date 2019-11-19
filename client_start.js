import {Application} from "/libraries/marionette.js";
import {RootView}    from "/scripts/root_view.js";

const app = new class extends Application {

    get region() {
        return "body";
    }

    onStart() {
        this.showView(new RootView);
    }

};

app.start();
