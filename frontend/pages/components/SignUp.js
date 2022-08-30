import {useEffect, useState} from "react"
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { useRouter } from 'next/router';
import {registerUsers} from '../../store/actions/UserAction';
function SignUp({register, registerUserAction, errors}) {
    const [email, setEmail] = useState("")
    const [full_name, setFullName] = useState("")
    const [nickname, setNickname] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [errMess , setErrMess] = useState('');
    const router = useRouter();

    const onChangeEmail = e =>{
        setEmail(e.target.value)
    }
    const onChangeFullName = e =>{
        setFullName(e.target.value)
    }
    const onChangeNickname = e =>{
        setNickname(e.target.value)
    }
    const onChangePassword = e =>{
        setPassword(e.target.value)
    }
    const onChangePassword2 = e =>{
        setPassword2(e.target.value)
    }

    const sendData = (e) => {
        e.preventDefault()
        if (email.length < 3 || full_name.length < 3 || nickname.length < 3 || password.length < 3 || password2.length < 3 ) {
            setErrMess('Заполните все поля') 
        }else{
            registerUserAction({email , full_name , nickname , password , password2})
        }
    };
    useEffect(()=>{
        if(register.id && !register.mes){
            router.push('/signin');
        }else if(register.mes){
            setErrMess(register.mes)
        }
      }, [register])
      useEffect(() => {

      } , [errMess])
    return (
    <div className="auth-form">
        <h1>Регистрация</h1>
        <form className="form" onSubmit={sendData}  method="POST">
            <fieldset className="fieldset">
                <input className="input" type="text" value={email} onChange={onChangeEmail}  placeholder="Введите email" />
            </fieldset>
            <fieldset className="fieldset">
                <input className="input" type="text" value={full_name} onChange={onChangeFullName} placeholder="Полное имя" />
            </fieldset>
            <fieldset className="fieldset">
                <input className="input" type="text" value={nickname} onChange={onChangeNickname} placeholder="Nickname" />
            </fieldset>
            <fieldset className="fieldset">
                <input className="input" type="password" value={password} onChange={onChangePassword} placeholder="Введите пароль" />
            </fieldset>
            <fieldset className="fieldset">
                <input className="input" type="password" value={password2} onChange={onChangePassword2} placeholder="Подтвердить пароль" />
            </fieldset>
            <fieldset className="fieldset">
                <button className="button" type="submit">Зарегистрироваться</button>
            </fieldset>
        </form>
        <p className='errMes'>{errMess}</p>
    </div>
    );
  }

const mapDispatchToProps = dispatch => ({
    registerUserAction: bindActionCreators(registerUsers , dispatch),
})

const mapStateToProps = state => ({
    register: state.usersReducers.register,
    errors: state.usersReducers.errors
})
  
  export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
  