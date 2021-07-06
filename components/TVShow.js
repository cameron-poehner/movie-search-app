import { makeStyles } from '@material-ui/core/styles';
import TVHeading from './TVHeading';
import { starsList, genreList } from '../lib/helper'
import CastMember from '../components/CastMember'
import TitlesCard from '../components/TitlesCard'
import { MicNone } from '@material-ui/icons';

export default function TVShow ({ query, data }) {
    const classes = useStyles();
    console.log('tv show', query);
    console.log('tv show data', data);

    const { poster_path, created_by, tagline, credits, videos, similar, overview, genres } = data;
    const { cast } = credits;
    const recommended = similar.results;

    const { results } = videos;
    // const id = results.map(result => result.key);

    const stars = cast.slice(0, 3);

    console.log('result', recommended)

    // console.log('id', id);

    return (
        <div className={classes.root}>
            <TVHeading data={data} query={query} />
            <div className={classes.container}>
                <img
                  className={classes.Poster}
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${poster_path}`}
                  alt=""
                />
                <div className={classes.descContainer}>
                    <p className={classes.tagling}>
                        <span>Tagline: </span>
                        {tagline}
                    </p>
                    <p className={classes.creators}>
                        <span className={classes.span}>{created_by.length === 1 ? 'Creator' : 'Creators'}:</span>
                        {starsList(created_by)}
                    </p>
                    <p className={classes.creators}>
                        <span className={classes.span}>Stars:</span>
                        {starsList(stars)}
                    </p>
                </div>
            </div>
                <h3>Videos</h3>
            <div className={classes.videos}>
            {results.map(video => 
                <iframe 
                key={video.id} 
                src={`https://www.youtube.com/embed/${video.key}`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                samesite="secure"
                className={classes.video}>
              </iframe>
              )}
              </div>
              <section className={classes.details}>
                <h2 className={classes.cast}>Cast</h2>
            {cast.map(member => <CastMember key={member.id} member={member} />)}
            </section>
            <h2>More Like This</h2>
            <section className={classes.similar}>
                {recommended.map(movie => <TitlesCard key={movie.id} movie={movie} />)}
            </section>
            <section>
                <h2>StoryLine</h2>
                <p>{overview}</p>
                <div><strong>Tagline: </strong>{tagline}</div>
                <div><strong>Genres: </strong>{genreList(genres)}</div>
            </section>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        color: 'white',
        height: 'auto',
        margin: '2rem',
        width: '70vw'
    },
    container: {
        width: '70vw',
        boxSizing: 'border-box',
        fontFamily: 'Roboto',
        letterSpacing: '1px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start',
        background: 'black',
        height: '100%',
    },
    descContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '70%',
        padding: '4rem'
    },
    Poster: {
        boxSizing: 'border-box',
        height: '100%',
        width: '260px'
    },
    span: {
        marginRight: '1rem'
    },
    videos: {
        overflowX: 'scroll',
        margin: '0',
        padding: '0',
        overscrollBehaviorX: 'contain',
        boxSizing: 'content-box',
        display: 'flex',
        justifyContent: 'start',
      
        // padding: '1rem',
        // paddingLeft: '0',
    },
    video: {
        margin: '2rem',
        marginLeft: '0',
        minWidth: '560px',
        minHeight: '315px',
        boxSizing: 'content-box',
        overscrollBehaviorX: 'none'
    },
    similar: {
        width: 'auto',
        overflowX: 'scroll',
        display: 'flex',
        justifyContent: 'start',
        flexWrap:'no-wrap',
        boxSizing: 'border-box',
        position: 'relative',
        marginRight: '2rem',
        paddingRight: '2rem'
    },
}))