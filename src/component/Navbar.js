import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ["Women", "Divided", "Men", "Kids", "H&M HOME", "Sale", "Sustainability" ]

    const navigate = useNavigate()

    const search = (event)=>{
        if(event.key === "Enter"){
            navigate(`/?q=${event.target.value}`)
        }
    }

    return (
    <div>
        <div className="login-button">
            {authenticate ? (
            <div onClick={() => setAuthenticate(false)}>
                <FontAwesomeIcon icon={faUser} />
                <span>로그아웃</span>
            </div>
            ) : (
            <div onClick={() => navigate("/login")}>
                <FontAwesomeIcon icon={faUser} />
                <span>로그인</span>
            </div>
            )}
         </div>

        <div className="nav-logo">
            <Link to="/">
                <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1024px-H%26M-Logo.svg.png"/>
            </Link>
        </div>

        <div className="menu-area">
            <ul className="menu-list">
                {menuList.map((menu, index)=> (
                <li><a href="#" key={index}>{menu}</a></li>))}
            </ul>
            <div className="search-input">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" onKeyPress={(event)=>search(event)}/>
            </div>
        </div>

    </div>
  )
}

export default Navbar