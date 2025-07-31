export default function passwordService() {
    let password: string = '';
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let passwordLength: number = 7;

    for(let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor( Math.random() * characters.length));        
    }

    return password
}