import { moviesResults } from '../store/moviesSlice'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux'
import Link from 'next/link'

export async function getServerSideProps({ query }) {
    const { id } = query;
    const url = `http://www.omdbapi.com/?s=${id}&apikey=65137754`
     const res = await fetch(url);
     const data = await res.json();
     return {
         props: {
             data 
         }
     }

}

export default function MoviesList({ Search }) {
    console.log('data', Search)
    return (
        
            <li>
                {Search.map(movie => {
                  const { Title, Year, imdbID } = movie;
                  return (
                    <li key={imdbID}>
                      <Link href="/">
                        <a>
                        {Title}
                        </a>
                      </Link>
                    </li>
                )})}
             MoviesList
            
            </li>

    
    )
}


