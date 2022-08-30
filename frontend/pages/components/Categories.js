import { useEffect} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import {getCategories} from "../../store/actions/categoriesAction"
function Category({getCategoriesAction, categories}) {
   
    let gotCategories
    useEffect(() => {
		getCategoriesAction()
	} , [])
    gotCategories = categories.map((cat)=> <a className='list-item' key={"categ-"+cat.id}>{cat.name}</a>)
    
    useEffect(()=>{
    }, [categories])
    return(
        <div className="page-info">
            <div className="page-header">
                <h2>Категории</h2>
            </div>

           {gotCategories}
	    </div>
    )
        
}

const mapDispatchToProps = dispatch => ({
    getCategoriesAction: bindActionCreators(getCategories , dispatch),
})

const mapStateToProps = state => ({
    categories:state.categReducers.categories
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Category);


