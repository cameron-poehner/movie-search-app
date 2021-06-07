import MoviesList from '../../components/MoviesList'
import { useSelector, useDispatch } from 'react-redux';
import {  moviesResults } from '../../store/moviesSlice'
import { connect } from 'react-redux'
import { selectResults } from '../../components/Navbar'
import { Title } from '@material-ui/icons';
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

export default function MoviesListPage({ data }) {
    const { Search } = data;
    console.log(Search);
    return (
        <ul>
            
            <MoviesList Search={Search} />
            
        </ul>
    )
}

// const mapStateToProps = state => ({
//     list: state.results.results
// })

// const mapDispatchToProps = { moviesResults };

// export default connect(mapStateToProps, mapDispatchToProps)(MoviesListPage)

{/* {Search.map(movie => {
                const { Title, Year, imdbID} = movie;
                return (
                <li key={imdbID}>
                    <Link href="/"><a>{Title}</a></Link>
                 
                    <p>{Year}</p></li> 
            )})}
            Movies List */}