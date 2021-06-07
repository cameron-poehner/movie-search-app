import MovieCard from '../../components/MovieCard'

export async function getServerSideProps({ query }) {
    const { id } = query;
    const url = `http://www.omdbapi.com/?i=${id}&apikey=65137754`
     const res = await fetch(url);
     const data = await res.json();
     return {
         props: {
             data 
         }
     }

}

export default function SingleMoviePage({ data }) {
    console.log(data)
    // const { Search } = data;
    return (
        <MovieCard data={data} />
    )
}