import { makeStyles } from '@material-ui/core/styles'

export default function VideoSlider({ videos }) {
    const classes = useStyles();

    const { results } = videos;

    return (
        <div className={classes.root}>
            <h3 className={classes.videosHeading}>Videos</h3>
    
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
            </div>
    )
}

const useStyles = makeStyles((theme) => ({
    videosHeading: {
        padding: '1rem',
        fontFamily: 'Roboto',
        fontSize: '2.5rem',
        fontWeight: '200',
        letterSpacing: '2px'
    },
    videos: {
        overflowX: 'scroll',
        margin: '1rem',
        marginTop: '0',
        paddingTop: '0',
        padding: '1rem',
        overscrollBehaviorX: 'contain',
        boxSizing: 'content-box',
        display: 'flex',
        justifyContent: 'start',
    },
    video: {
        margin: '2rem',
        marginLeft: '0',
        minWidth: '560px',
        minHeight: '315px',
        boxSizing: 'content-box',
        overscrollBehaviorX: 'none'
    },
}))