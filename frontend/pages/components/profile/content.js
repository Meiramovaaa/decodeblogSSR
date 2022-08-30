import {useState, useEffect} from "react"
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import {getUser} from "../../../store/actions/UserAction"
import {getUserBlogs, deleteBlog} from "../../../store/actions/blogAction"
import Blogs from "../Blogs"

function Content({
    getUserAction, 
    getUserBlogsAction, 
    users, 
    userId,
    userBlogs,
    deleteBlogAction,
    result}) {
    useEffect(()=>{
        getUserAction(userId)
        getUserBlogsAction(userId)
    },[])
    console.log(users);
    useEffect(()=>{},[users])
    useEffect(()=>{}, [userBlogs])
    const deleteBlog = (id) => {
        deleteBlogAction(id)
    }
    useEffect(() => {
        if(typeof result == 'string'){
            getUserBlogsAction(userId)
        }
        
    } , [result])
    console.log(userBlogs, '----blogsuser');
    return(
        <div className="page-content">
            <div className="page-header"><h2>Мои блоги</h2><a className="button" href="/newblog">Новый блог</a></div>
            <div className="blogs">
                {userBlogs ? userBlogs.map(blog => <Blogs blogDelete={deleteBlog}  key={"blogs-"+blog.id} user={users ? users.id : ''} blog={blog}/> ) : ''}
            </div>
	    </div>
    )
        
}

const mapDispatchToProps = dispatch => ({
    getUserAction: bindActionCreators(getUser , dispatch),
    getUserBlogsAction:bindActionCreators(getUserBlogs, dispatch),
    deleteBlogAction: bindActionCreators(deleteBlog , dispatch)
})

const mapStateToProps = state => ({
    users: state.usersReducers.users,
    userBlogs: state.blogReducers.userBlogs,
    result: state.blogReducers.result,
})


export default connect(mapStateToProps, mapDispatchToProps)(Content);


