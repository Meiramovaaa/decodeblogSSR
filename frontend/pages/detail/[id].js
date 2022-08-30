import Header from "../partials/Header"
import Blogs from "../components/Blogs"
import {useState, useEffect} from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import {getBlogById} from "../../store/actions/blogAction"
import Category from "../components/Categories"
function Detail({getBlogByIdAction, blogInfo}) {
    const router = useRouter();
    const [id , setId] = useState(-1)

    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id)
        }
    } , [router.isReady])

    useEffect(() => {
        if(id >= 0){
            getBlogByIdAction(router.query.id)

        }
    } , [id])
    return (
        <div>
            <Header/>
            <section className="container page">
                <div className="page-content">
                    <Blogs blog={blogInfo}/>
                </div>
                <Category/>
            </section>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getBlogByIdAction: bindActionCreators(getBlogById , dispatch)
})

const mapStateToProps = state => ({
    blogInfo:state.blogReducers.blogInfo
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail)