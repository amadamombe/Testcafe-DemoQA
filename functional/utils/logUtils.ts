export default class LogUtils {
    public static log(text: string): void {
        console.log(text);
    }

    public static logError(error: any): void {
        console.error(error);
    }

    public static logAddedUser(userName: string, userSurname: string): void {
        console.log(`Added a user: '${userName} ${userSurname}'`);
    }

    public static logAddedEmail(email: string): void{
        console.log(`Added user email address: '${email}'`);
    }

    public static logSelectedGender(gender: string): void{
        console.log(`Selected the gender option: '${gender}'`);
    }

    public static logAddedMobileNumber(number: string): void{
        console.log(`Added mobile number: '${number}'`);
    }

    public static logAddedDOB(year: string, month: string, day: string): void{
        console.log(`Added the DOB: '${year}' - ${month}' - ${day}'`);
    }

    public static logAddedSubject(text: string): void{
        console.log(`Added the Subject: '${text}'`);
    }

    public static logSelectedHobby(hobby: string): void{
        console.log(`Selected the hobby: '${hobby}'`);
    }

    public static logFileUpload(fileName: string){
        console.log(`Uploaded file with name:'${fileName}'`);
    }

    public static logCurrAddress(address: string) {
        console.log(`Added current address: '${address}'`);
    }

    public static logClickedSubmitButton() {
        console.log(`Clicked the submit button`);
    }

    
}

