import { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {getCategories} from '../../store/actions/categoriesAction'
import { useRouter } from 'next/router';
import { getBlogById , updateBlog } from '../../store/actions/blogAction';
function EditBlogForm({getCategoriesAction , categories , blogInfo , getBlogByIdAction , authorId , blogId , updateBlogAction , blogs}) {
    const router = useRouter();
    const [title , setTitle] = useState('');
	const [description , setDescription] = useState('')
	const [categoryId , setCategoryId] = useState(1)
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [errMess , setErrMess] = useState('')
	const ISSERVER = typeof window === "undefined";
	const formData = new FormData();
	
	let categList
	const onChangeImage = (e) =>	{
		setSelectedFile(e.target.files[0]);
		setIsFilePicked(true)
	}
	const onChangeTitle = e => {
		setTitle(e.target.value)
	}
	const onChangeDescription = e => {
		setDescription(e.target.value)
	}
	const onChangeCategory = e => {
		setCategoryId(e.target.value)
	}
	
	const sendData = e => {
		e.preventDefault()
		if (title.length < 3 || description.length < 3) {
            setErrMess('Заполните все поля') 
        }else{
            updateBlogAction({id: blogId , title , description , categoryId , selectedFile , isFilePicked})
        }
	}
    useEffect(() => {
		getCategoriesAction(),
        getBlogByIdAction(blogId)
    } , [])
	useEffect(()=>{
		console.log(categories);
    }, [categories])
	useEffect(()=>{
        if(blogInfo.title){
            setTitle(blogInfo.title)
            setDescription(blogInfo.description)
            setCategoryId(blogInfo.category_id)
        }
    }, [blogInfo])
    useEffect(()=>{
		if(blogs > 0){
			router.push(`/profile/${authorId}`);
		}
    }, [blogs])
  return (
    <div>
        <form className="form" method="POST" onSubmit={sendData}>
			<fieldset className="fieldset">
				<input className="input" type="text" placeholder="Заголовок" value={title} onChange={onChangeTitle}/>
			</fieldset>
			<fieldset className="fieldset">
				<select name="category" id="" className="input" onChange={onChangeCategory}>
					{categories.map(item => item.id == categoryId ? <option key={"categ-"+item.id} value={item.id} selected>{item.name}</option> : <option key={"categ-"+item.id} value={item.id}>{item.name}</option> )}
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
	getBlogByIdAction: bindActionCreators(getBlogById , dispatch),
    updateBlogAction: bindActionCreators(updateBlog , dispatch)
})
const mapStateToProps = state => ({
    categories: state.categReducers.categories,
	blogInfo: state.blogReducers.blogInfo,
    blogs: state.blogReducers.blogs
})

export default connect(mapStateToProps , mapDispatchToProps)(EditBlogForm);

