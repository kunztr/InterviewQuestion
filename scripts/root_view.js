import {View}                            from "/libraries/marionette.js";
import {testData1, testData2, testData3} from "/scripts/test_data/index.js";

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
        const testComponent = this._createTags(testData1);
        this.getRegion("testRegion1").show(testComponent);
    }

    _showSecondTest() {
        const testComponent = this._createTags(testData2);
        this.getRegion("testRegion2").show(testComponent);
    }

    _showThirdTest() {
        const testComponent = this._createTags(testData3);
        this.getRegion("testRegion3").show(testComponent);
    }

    _createTags(data) {
        //TODO:     Instantiate and return component from data
        //TODO:     The component should be a list of tags as shown at
        //TODO:     https://bulma.io/documentation/elements/tag/
        return new PlaceHolder;
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

class PlaceHolder extends View {
    template() {
        return "Not implemented"
    }
}