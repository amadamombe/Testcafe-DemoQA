import FormActions from '../../actions/formActions/formActions';
import BaseActions from '../../actions/commonActions/baseActions';

// Fixture serves as the name of our feature.
// page() opens the test URL on your browser of choice
fixture('TestCafe demoqa').page(
  'https://demoqa.com/automation-practice-form'
);

test("Fill in practice form", async t => {
  const formActions: FormActions = new FormActions();
  const baseActions: BaseActions = new BaseActions();
  await formActions.addUsernameAndSurname();
  await FormActions.addUserEmail();
  await FormActions.selectGender();
  await FormActions.addMobileNumber();
  await FormActions.selectDOB();
  await FormActions.addSubject();
  await FormActions.selectHobbies();
  await formActions.selectPictures();
  await FormActions.addCurrentAddress();
  await formActions.selectStateAndCity();
  await baseActions.clickSubmitButton();
});











