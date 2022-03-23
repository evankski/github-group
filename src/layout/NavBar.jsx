import { Link } from 'react-router-dom'

export default function Navbar() {
 
  return(
    <nav>
       <Link to="/">Home</Link>

      <Link>About</Link>

      <Link>Impact</Link>

      <Link>Leadership</Link>

      <Link>Supporters</Link>

      <Link>Blog</Link>
    </nav>
  )
}