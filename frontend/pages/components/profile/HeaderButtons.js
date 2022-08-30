import { useEffect, useState } from "react";

function HeaderButtons(path){
    const [userId, setUserId] = useState(0)

    useEffect(() => {
        setUserId(path.path.id)
    },[])
    let pathName = `/profile/${userId}`
    let returnedElement
    if(userId !== undefined){ 
        returnedElement = <a href={pathName}><img className="avatar" src="/images/avatar.png" alt="Avatar"/></a>
    }else{
        returnedElement = <div className="button-group"><a href="/signup" className="button">Регистрация</a><a href="/signin " className="button">Вход</a></div>
    }
    return (
        <div>
            {returnedElement}
        </div>
    )
} 

export default HeaderButtons;
  