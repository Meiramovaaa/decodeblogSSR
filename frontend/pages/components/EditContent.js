import { useState , useEffect} from 'react';
import {useRouter } from "next/router"
import EditBlogHeader from "./EditBlogHeader"
import EditBlogForm from "./EditBlogForm"
function EditForm() {
    const router = useRouter();
    const [id , setId] = useState(router.query.id)
	const ISSERVER = typeof window === "undefined";
	let authorId
    if(!ISSERVER) {
		let user = localStorage.getItem("user")
		if(user != null){
		  try{
			user = JSON.parse(user)
			authorId = user.id
		  }catch(e){
			  console.log(e);
		  }
		}
	} 
    useEffect(() => {
        if (router.asPath !== router.route) {
            setId(router.query.id)
        }
    } , [router.isReady])
    let editContent
    if(id >= 0){
        editContent = <EditBlogForm blogId={id} authorId={authorId}/>
    }
    return(
        <div className="page-block">
            <EditBlogHeader/>
            {editContent}
        </div>
    )
        
}


  

export default EditForm;
  