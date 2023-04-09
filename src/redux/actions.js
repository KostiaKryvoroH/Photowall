import { database, dbref } from "../database/config";
import { getDatabase, ref, set, get, onValue, child, update, remove, push } from "firebase/database";


export function startAddingPost(post) {
    return (dispatch) => {
        // return dbref(database, 'posts').update({[post.id]: post})
        //     .then(() => {
        //         dispatch(addPhoto(post))
        //     })
        // return set(ref(database, 'posts/' + post.id), {
        //     post
        // }).then(() => {
        //     dispatch(addPhoto(post))
        // }).catch(error => {
        //     console.log(error)
        // })
        const updates = {};
        updates['posts/' + post.id] = post
        return update(ref(database), updates).then(() => {
                dispatch(addPhoto(post))
            }).catch(error => {
                console.log(error)
            })
        
    }
}

export function startLoadingPost() {
    return (dispatch) => {
        return get(child(dbref, 'posts/')).then((snapshot) => {
                var posts = []
                // snapshot.forEach(childSnaphot => {
                //     Object.entries(childSnaphot).forEach(([key, value])=> {
                //         posts.push(value.val())
                //     })
                // });
                // snapshot.forEach(childSnaphot => {
                //     posts.push(childSnaphot.val())
                // });
                Object.entries(snapshot.val()).forEach(([key, value]) => {
                    posts.push(value)
                })
                dispatch(loadPosts(posts))
            })
    }
}

export function startRemovingPosts(index, id) {
    return (dispatch) => {
        // return database.ref(`posts/${id}`).remove()
        //     .then(() => {
        //         dispatch(removePost(index))
        //     })
        return remove(ref(database, 'posts/' + id))
                .then(()=>{
                    dispatch(removePost(index))
                }).catch(err => {
                    console.log(err)
                })
    }
}

export function startAddingCommnets(comment, postId) {
    return (dispatch) => {
        const updates = {}
        const newCommentKey = push(child(ref(database), 'comments')).key;
        updates[`comments/` + postId + "/" + newCommentKey] = comment;
        return update(ref(database), updates)      
        .then(() => {
            dispatch(addComment(comment, postId))
        }).catch(error => {
            console.log(error)
        })
    }
}

export function startLoadingComments() {
    return (dispatch) => {
        return get(child(dbref, 'comments/')).then((snapshot) => {
            var comments = []
            snapshot.forEach((childSnapshot) => {
                comments[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComments(comments))

        }).catch(error => {
            console.log(error)
        })
        
    }
}



export function removePost(index) {
    return {
        type: 'REMOVE_POST', 
        index: index
    }
}


export function addPhoto(addedPhoto) {
    return {
        type: 'ADD_PHOTO',
        post: addedPhoto
    }
}

export function addComment(comment, postId) {
    return {
        type: 'ADD_COMMENT',
        comment,
        postId
    }
}

export function loadPosts(posts) {
    return {
        type: 'LOAD_POSTS', 
        posts
    }
    
}
export function loadComments(comments) {
    return {
    type: 'LOAD_COMMENTS', 
    comments}
}
// adding post