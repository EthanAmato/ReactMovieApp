import '../css/Movie.css';
import React from 'react';
import PropTypes from 'prop-types';

const GENERIC_MOVIE_TITLE = "New Movie Title";
const GENERIC_MOVIE_BODY = "New Movie Description"


function Movie(props){
    //We are going to create state variables in a special way
    //because we want React to track when these vars change so it
    //knows when 2 update the webpage

    //Right now, notes is getting text content from properties
    let [title,setTitle] = React.useState(GENERIC_MOVIE_TITLE);
    let [body,setBody] = React.useState(GENERIC_MOVIE_BODY);
    let [editMode, setEditMode] = React.useState(false); //if set to true make Movie display a form, if false make it display a Movie
    let [hasWatched, setWatched] = React.useState(false);


    let titleContent = React.createRef();
    let bodyContent = React.createRef();
    let watched = React.createRef();

    function handleEdit(){
        setEditMode(true);
    }

    function handleDelete(){
        props.deleteHandler(props.id);
    }

    function handleSave() {
        setTitle(titleContent.current.value) //the ref holds the actual tag, so you need to get the value of the current title in the DOM
        setBody(bodyContent.current.value)
        setEditMode(false)
    }

    

    function changeWatched() {
        if (hasWatched === true) {
            setWatched(false);
        } else {
            setWatched(true);
        }
    }
    
    let titleElement, bodyElement, buttonArea, watchedButton;
    if (editMode) {
        titleElement = <textarea ref = {titleContent} className = "title-textarea" defaultValue = {title}/>
        bodyElement = <textarea ref = {bodyContent} className = "body-textarea" defaultValue = {body}/> //ref means that whatever is in this form will store in var automatically
        buttonArea = <div><button className='btn btn-primary' onClick={handleSave}>Save</button></div>
    } else {
        titleElement = <h5 className='card-title'>{title}</h5>
        bodyElement = <p>{body}</p>
        if(hasWatched === false) {watchedButton = <div><button className = 'btn btn-danger' onClick= {changeWatched}>Marked as Unwatched</button></div>}
        else {watchedButton = <div><button className = 'btn btn-primary' onClick= {changeWatched}>Marked as Watched</button></div>}
        buttonArea = 
            (<div>
                <button className='btn btn-info' onClick={handleEdit}>Edit</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button> 
                {/* how do we let board know about delete button 2 remove from array */}
            </div>)
    }

    return (
        <div className="col-sm-6">
            <div className = "card card-view">
                <div className='card-body'>
                    {titleElement}
                    {bodyElement}
                    {watchedButton}
                    {buttonArea}
                </div>
            </div>
        </div>
    )
}
 
Movie.propTypes = {
    title: PropTypes.string //tells that title should come in as a string. Mild enforcement and conversion into a datatype
}
export default Movie;