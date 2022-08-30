import { useState , useEffect} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { useRouter } from 'next/router';
import {signinUsers} from '../../store/actions/UserAction';
// import {usersReducers} from '../../store/reducers/users.reducers'
import redirect from 'nextjs-redirect'

function SigninForm({user , signinUserAction , errors}) {
    const router = useRouter();

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [errMess , setErrMess] = useState('');

    const onChangeEmail = e => {
        setEmail(e.target.value)
    }
    const onChangePassword = e => {
        setPassword(e.target.value)
    }

    const sendData = (e) => {
        e.preventDefault()
        if (email.length < 3 || password.length < 3) {
            setErrMess('Заполните все поля') 
        }else{
            signinUserAction({email , password})

        }
    };
    useEffect(()=>{
        if(user.id && !user.mes){
            router.push(`/`);
        }else if(user.mes){
            setErrMess(user.mes)
        }
      }, [user])
    return(
        <div className="auth-form">
            <h1>Вход</h1>
			<form className="form" onSubmit={sendData} method="POST">
                <fieldset className="fieldset">
                    <input className="input" type="text" value={email} onChange={onChangeEmail}  placeholder="Введите email"/>
                </fieldset>
                <fieldset className="fieldset">
                    <input className="input" type="password" value={password} onChange={onChangePassword}  name="password" placeholder="Введите пароль" />
                </fieldset>

                <fieldset className="fieldset">
                    <button className="button" type="submit">Войти</button>
                </fieldset>
                <p>{errMess}</p>
			</form>
		</div>
    );
  }
  
const mapDispatchToProps = dispatch => ({
    signinUserAction: bindActionCreators(signinUsers , dispatch),
})
const mapStateToProps = state => ({
    user: state.usersReducers.users,
    errors: state.usersReducers.errors
})

export default connect(mapStateToProps , mapDispatchToProps)(SigninForm);
  