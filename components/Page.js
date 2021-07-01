import Navbar from './Navbar';
import Home from '../pages/index';
import Footer from './Footer'


export default function Page({ children }) {
    return(
        <div>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}