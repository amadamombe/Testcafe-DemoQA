import { t } from "testcafe";
import BaseSelectors from "../../page-object/common/baseSelectors";
import LogUtils from "../../utils/logUtils";


export default class BaseActions {

    public async clickSubmitButton(): Promise<void> {
        const button = BaseSelectors.clickSubmitButton()

        await t.
            click(button);
        LogUtils.logClickedSubmitButton();
    }

}