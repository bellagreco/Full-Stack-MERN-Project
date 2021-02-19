import React, { useState, useEffect } from 'react'
import useStyles from './styles';
import { textField, Button, Typography, Paper, TextField } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: " ",
        title: " ",
        message: " ",
        tags: " ",
        selectedFile: " "
    })
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {

        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));

        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: " ",
            title: " ",
            message: " ",
            tags: " ",
            selectedFile: " "
        })
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography className={classes.title} variant="h6">
                    {!currentId ? 'Creating a new' : 'Editing a'} post
            </Typography>
                <TextField
                    className={classes.input}
                    name="creator"
                    variant="outlined"
                    label="Creator"
                    fullWidth
                    value={postData.creator}
                    // the ... means that we will only allow to change the value of creator and not all the other fields
                    onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                />
                <TextField
                    className={classes.input}
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={postData.title}
                    // the ... means that we will only allow to change the value of creator and not all the other fields
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField
                    className={classes.input}
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    value={postData.message}
                    // the ... means that we will only allow to change the value of creator and not all the other fields
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField
                    className={classes.input}
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    value={postData.tags}
                    // the ... means that we will only allow to change the value of creator and not all the other fields
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                />
                <div className={classes.fileInput} >
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} color="primary" variant="contained" type="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" type="large" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    )
}

export default Form;