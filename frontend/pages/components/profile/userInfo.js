import { useEffect} from 'react';
import { useRouter } from 'next/router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUser} from '../../../store/actions/UserAction'
function UserInfo({getUserAction , users , userId}){
    const router = useRouter();
    useEffect(() => {
        if(userId >= 0){
            getUserAction(userId)
        }
    } , [])
    useEffect(() => {

    } , [users])
    const logout = () => {
        localStorage.removeItem('user')
        router.push('/');
    }
    return(
        <div className="page-info">
            <div className="user-profile">
                <img className="user-profile--ava" src="/images/avatar.png" alt=""/>
                <h1>{users.full_name}</h1>
                <h2>В основном пишу про веб - разработку, на React & Redux</h2>
                <p>285 постов за все время</p>
                <a href="" className="button">Редактировать</a>
                <a onClick={logout} className="button button-danger"> Выход</a>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    getUserAction: bindActionCreators(getUser , dispatch),
})
const mapStateToProps = state => ({
    users: state.usersReducers.users
})
export default connect(mapStateToProps , mapDispatchToProps)(UserInfo);
  