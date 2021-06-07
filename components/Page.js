import Header from './Header';
import Home from '../pages/index';


export default function Page({ children }) {
    return(
        <div>
            <Header />
            { children }
        </div>
    )
}