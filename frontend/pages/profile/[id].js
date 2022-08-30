import Header from "../partials/Header"
import {useRouter } from "next/router";
import { useEffect, useState} from 'react';

import UserInfo from "../components/profile/userInfo"
import Content from "../components/profile/content";
function Profile() {
    const router = useRouter()
    const [id, setId] = useState("")
    useEffect(()=>{
        if(router.asPath !== router.route ){
            setId(router.query.id)
        }
    }, [router.isReady])
    let profileContent
    if(id != 0){
        profileContent = <div><section className="container page"><Content userId={id}/><UserInfo userId={id}/></section></div>
    }
    return (
        <div>
        <Header/>
        {profileContent}
        </div>
    )
}
export default Profile