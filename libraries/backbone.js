const backbone = window.Backbone;
delete window.Backbone;
export const {
    View,
    Collection,
    Model,
    Events,
    Router,
    history,
    sync
} = backbone;
