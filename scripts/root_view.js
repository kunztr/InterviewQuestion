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

    //Creates string of HTML tags and content
    _createTags(data) {
        var componentBuilder = `<div class="tags">`; //Stores HTML tags and content for single component
        //Goes through each json object and builds a tag
        for(var i in data){
            componentBuilder += this._buildTag(data[i]);
        }
        componentBuilder += `</div>`;        
        return componentBuilder;
    }
    
    //Builds tag based on json object
    _buildTag(tagProperties){
        var tagBuilder = `<span class="tag ` + tagProperties.color;
        //Adds all mods, assuming mods are stored in an array
        for(var j in tagProperties.mods){
                    tagBuilder += ` ` + tagProperties.mods;
                }
                tagBuilder += `">`;
                //Adds label to tag as long as label key exists
                if(tagProperties.hasOwnProperty("label")){
                    tagBuilder += tagProperties.label;
                }
            tagBuilder += `</span>`;
        return tagBuilder;
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

class ComponentText extends View {
    template() {        
        return;
    }

}