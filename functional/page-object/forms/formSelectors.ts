import { Selector } from "testcafe";


class FormSelectors {

    addFirstName: Selector;
    addLastName: Selector;
    addUserEmail: Selector;
    selectGender: Selector;
    enterUserNumber: Selector;
    enterDOB: Selector;
    addSubjects: Selector;
    selectHobbies: Selector;
    uploadFile: Selector;
    addCurrentAddress: Selector;
    //selectCity: Selector;
    selectState: Selector;

    constructor() {
        this.addFirstName = Selector('#firstName');
        this.addLastName = Selector('#lastName');
        this.addUserEmail = Selector('#userEmail');
        this.selectGender = Selector('#gender-radio-1');
        this.selectGender = Selector('#gender-radio-1');
        this.enterUserNumber = Selector('#userNumber');
        this.enterDOB = Selector('Method not implemented.'); //.child().withAttribute()
        this.addSubjects = Selector('#subjectsContainer');
        this.selectHobbies = Selector('#hobbies-checkbox-2');
        this.uploadFile = Selector('#uploadPicture');
        this.addCurrentAddress = Selector('#currentAddress');
        // this.selectState = Selector('state > div > div.css-1hwfws3 > div.css-1uccc91-singleValue');

        this.selectState = Selector('#state')
        .withAttribute('NCR')
        
        

        // this.selectCity = Selector('#city > div > div.css-1hwfws3 > div.css-1uccc91-singleValue');

    }
}

export default new FormSelectors();