import React from 'react'
import { Link, withRouter} from 'react-router-dom'


const isActive = (history, path) =>{
    if(history.location.pathname === path){
        return{ color: '#000'}
    }
    else{
        return { color : '#fff'}
    }
}

const Menu = (props) =>{
    return (
        <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <Link className="navbar-brand" to="/">Card - Youcodeur</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link style={isActive(props.history,'/')} className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link >
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link style={isActive(props.history, '/signin')} className="nav-link" to="/signin">Connection</Link >
      </li>
      <li className="nav-item">
        <Link style={isActive(props.history, '/signup')} className="nav-link disabled" to="/signup">Register</Link >
      </li>
    </ul>
    
  </div>
</nav>      
        </div>
    )
}

export default withRouter(Menu)