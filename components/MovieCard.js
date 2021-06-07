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

export default function MovieCard() {
    return (
        <div>
            <h2>Title: </h2>
        </div>
    )
}