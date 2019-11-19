import {View} from "/libraries/marionette.js";

export class RootView extends View {

    className() {
        return "root-view";
    }

    regions() {
        return {
            testRegion1: ".test-1",
            testRegion2: ".test-2",
            testRegion3: ".test-3"
        };
    }

    onRender() {
        this._showFirstTest();
        this._showSecondTest();
        this._showThirdTest();
    }

    _showFirstTest() {
        const testData = [];
        const testComponent = this._createTags(testData);
        this.getRegion("testRegion1").show(testComponent);
    }

    _showSecondTest() {
        const testData = [
            {
                label: "Test Tag 1",
                color: "is-primary"
            },
            {
                label: "Test Tag 2",
                color: "is-primary"
            },
            {
                label: "Test Tag 2",
                color: "is-link"
            }
        ];
        const testComponent = this._createTags(testData);
        this.getRegion("testRegion2").show(testComponent);
    }

    _showThirdTest() {
        const testData = [
            {
                label: "Test Tag 1",
                color: "is-warning"
            },
            {
                color: "is-success"
            },
            {
                label: "Test Tag 3"
            },
            {
                label: "Test Tag 4",
                color: "is-primary",
                mods : ["is-light"]
            }
        ];
        const testComponent = this._createTags(testData);
        this.getRegion("testRegion3").show(testComponent);
    }

    _createTags(data) {
        //TODO:     Instantiate and return component from data
        //TODO:     The component should be a list of tags as shown at
        //TODO:     https://bulma.io/documentation/elements/tag/
        return new class extends View {
            template() { return "Not implemented" }
        };
    }

    template() {
        return `
          <div class="box spacer"></div>
          <div class="box test-1"></div>
          <div class="box test-2"></div>
          <div class="box test-3"></div>
        `;
    }

}