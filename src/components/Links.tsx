import React from 'react'
import { Link } from 'react-router-dom';

function Links({name, link, linkTo}:{name:string; link:string, linkTo:string}) {
  return (
    <div style={{color:"green"}}>{name}
        <Link to={link}>{linkTo}</Link>
    </div>
  )
}

export default Links