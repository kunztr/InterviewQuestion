import {Application, View} from "./libraries/marionette.js";

const rootView = new (View.extend({

    template() {
        return "This is a test!";
    }

}));

const app = new (Application.extend({

    get region() {
        return "body";
    },

    onStart() {
        this.showView(rootView);
    }

}));

app.start();
