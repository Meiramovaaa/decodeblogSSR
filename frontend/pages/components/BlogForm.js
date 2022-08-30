import { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { useRouter } from 'next/router';
import {getCategories} from "../../store/actions/categoriesAction"
import {createBlog} from "../../store/actions/blogAction"
function BlogForm({getCategoriesAction, categories, createBlogAction, blogs}) {
    const router = useRouter()
    const[title, setTitle] = useState('')
    const[description, setDescription] = useState("")
    const [category_id , setCategoryId] = useState('1')
	const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
	const [errMess , setErrMess] = useState('')
	const ISSERVER = typeof window === "undefined";

    let author_id
    if(!ISSERVER) {
		let user = localStorage.getItem("user")
		if(user != null){
		  try{
			user = JSON.parse(user)
			author_id = user.id
		  }catch(e){
			  console.log(e);
		  }
		}
	}  

    const onChangeImage = e=>{
        setSelectedFile(e.target.files[0])
        setIsFilePicked(true)
    }
    const onChangeTitle = e =>{
        setTitle(e.target.value)
    }
    const onChangeCategory = e =>{
        setCategoryId(e.target.value)
    }
    const onChangeDescription = e =>{
        setDescription(e.target.value)
    }

    const sendData = (e) =>{
        e.preventDefault()
		if (title.length < 3 || description.length < 3) {
            setErrMess('Заполните все поля') 
        }else{
            createBlogAction({title , description , category_id , author_id , selectedFile , isFilePicked})
        }
    }

    useEffect(() => {
		getCategoriesAction()
	} , [])
	useEffect(()=>{
    }, [categories])
	useEffect(()=>{
		if(Object.keys(blogs).length > 0){
			router.push(`/profile/${author_id}`);
		}
    }, [blogs])
    return(
        <div>
            <form className="form" method="POST" onSubmit={sendData}>
                <fieldset className="fieldset">
                    <input className="input" type="text" placeholder="Заголовок" value={title} onChange={onChangeTitle}/>
                </fieldset>
                <fieldset className="fieldset">
                    <select name="category" id="" className="input" onChange={onChangeCategory}>
                        {categories.map(item => <option key={"categ-"+item.id} value={item.id}>{item.name}</option>)}
                    </select>
                </fieldset>
                <fieldset className="fieldset">
                    <button className="button button-yellow input-file">
                        <input type="file" name="image" onChange={onChangeImage}/>	
                        Выберите картинку
                    </button>
                </fieldset>
                <fieldset className="fieldset">
                    <textarea className="input input-textarea" value={description} onChange={onChangeDescription} name="description" id="" cols="30" rows="10" placeholder="Описание"></textarea>
                </fieldset>
                <fieldset className="fieldset">
                    <button className="button" type="submit">Сохранить</button>
                </fieldset>
                <p>{errMess}</p>
            </form>
        </div>
    )
        
}

const mapDispatchToProps = dispatch => ({
    getCategoriesAction: bindActionCreators(getCategories , dispatch),
	createBlogAction: bindActionCreators(createBlog , dispatch)
})
const mapStateToProps = state => ({
    categories: state.categReducers.categories,
	blogs: state.blogReducers.blogs
})
  

export default connect(mapStateToProps, mapDispatchToProps)(BlogForm);
  