import React, { useEffect , useState} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Memories from './images/logo.png'
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts.js'
import Posts from './components/Posts/Posts.js'
import Form from './components/Form/Form.js'
import useStyles from './styles';
const App = () => {
    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={Memories} alt="Memories" height="150" justify="center" />

                <Grid spacing={1}>
                    <Grid item xs={12} spacing={3}>
                        <Typography className={classes.heading} variant="h2" align="center">Gamenator</Typography>

                    </Grid>
                    <Grid item xs={12} spacing={3}>
                        <Typography className={classes.heading} variant="h6" align="center">Everything about videogames</Typography>

                    </Grid>
                </Grid>

            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    );
}

export default App;