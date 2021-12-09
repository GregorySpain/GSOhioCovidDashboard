import { useCookies } from 'react-cookie';
import MyAlert from './MyAlert';

function CookieHandler() {
    const [cookies, setCookies] = useCookies(["user"]);
    
    const existingCookie = cookies.beenHere;
    let welcomeMessage = '';
    if (existingCookie === 'yes') {
        welcomeMessage = "Welcome Back";
    } else {
        welcomeMessage = "Thank you for visiting"
        setCookies('beenHere', 'yes', { maxAge: '50000' })
    }
    
    return (
        <MyAlert message={welcomeMessage} />
    );
}

export default CookieHandler;