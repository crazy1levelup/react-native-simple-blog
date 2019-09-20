import React,{useReducer} from 'react';
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'delete_blogpost':
            return state.filter((blog) => blog.id !== action.id)
        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.body.id ? action.body : blogPost
            })
        case 'get_blogpost':
            return action.body;
        default:
            return state;
    }
}

const getBlogPost = (dispatch) => {
    return async () => {
        const response = await jsonServer.get("/blogposts");
        dispatch({type:'get_blogpost', body:response.data})
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
      
        await jsonServer.post('/blogposts', {title, content});
  callback();
    }
}
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
                dispatch({type: 'delete_blogpost', id: id})

    }
}

const editBlogPost = (dispatch) => {
    return async (id,title,content,callback) => {
        // dispatch({type:'edit_blogpost', body:{id,title,content}});
        await jsonServer.put(`/blogposts/${id}`, {title,content});
        callback();
    }
}


export const {Context, Provider} =createDataContext(blogReducer, {addBlogPost,deleteBlogPost,editBlogPost,getBlogPost}, [])

