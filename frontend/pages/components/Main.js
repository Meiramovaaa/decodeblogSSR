
import Category from "./Categories";
import Blogs from "./Blogs"
import { useEffect} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';

import {getAllBlogs} from "../../store/actions/blogAction"
function Main({getBlogsAction, allBlogs}) {
    useEffect(() => {
        getBlogsAction()
    } , [])
    useEffect(() => {
    } , [allBlogs])
    
    return(
        <section className="container page">
            <div className="page-content">
                    <h2 className="page-title">Блоги по программированию</h2>
                    <p className="page-desc">Популярные и лучшие публикации по программированию для начинающих
                                            и профессиональных программистов и IT-специалистов.
                    </p>

                    <div className="blogs">
                        {allBlogs? allBlogs.map(blog => <Blogs key={`blog-${blog.id}`} blog={blog} page="index" />) : ''}
                    </div>
	        </div>
            <Category/>
        </section>
    )
        
}
  
const mapDispatchToProps = dispatch => ({
    getBlogsAction: bindActionCreators(getAllBlogs , dispatch),
})

const mapStateToProps = state => ({
    allBlogs:state.blogReducers.allBlogs
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
  