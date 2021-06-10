import Link from 'next/link';
import Navbar from './Navbar';

export default function Header({ query, data }) {
    return(
        <div>
            <Navbar query={query} data={data} />
        </div>
    )
}