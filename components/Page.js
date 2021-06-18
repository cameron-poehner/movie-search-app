import Header from './Header';
import Home from '../pages/index';
import Footer from './Footer'


export default function Page({ children }) {
    return(
        <div>
            <Header />
            { children }
            <Footer />
        </div>
    )
}