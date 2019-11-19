const {Application, View} = window.Marionette;

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
