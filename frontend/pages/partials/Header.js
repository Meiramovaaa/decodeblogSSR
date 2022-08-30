import search from '../../public/images/search.svg'
import HeaderButtons from '../components/profile/HeaderButtons';
function Header() {
  const ISSERVER = typeof window === "undefined";
  let checkUser  , userInfo , pathProfile
  if(!ISSERVER) {
      checkUser = localStorage.getItem("user")
      if(checkUser != null){
        try{
          userInfo = JSON.parse(checkUser)
          pathProfile = `/profile/${userInfo.id}`
        }catch(e){
            console.log(e);
        }
        
      }else{
        pathProfile = {}
      }
  }


    return (
      <header className="header container">
        <div className="header-logo">
            <a href="/">Decode Blog</a>	
        </div>
        <form className="header-search" method="GET" action="/">
          <input type="hidden" name="page" value="0"/>
          <input type="text" className="input-search" placeholder="" name="q" />
          <button type="submit" className="button button-search">
            <img src={search.src} alt=""/>	
            Найти
          </button>
        </form>
	      <div>
          <HeaderButtons path={userInfo ? userInfo : ""}/>
        </div>
      </header>

    );
  }
  
  export default Header;
  