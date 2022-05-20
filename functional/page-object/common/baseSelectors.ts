import { Selector, t } from "testcafe";

class BaseSelectors {
    clickSubmitButton: Selector;

    constructor(){
        this.clickSubmitButton = Selector('#submit');
    }
}

export default new BaseSelectors();