import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"


import './App.css'

function App() {

  let [username, setUsername] = useState('');
  let handleChange = e => setUsername(e.target.value);
  let redirectPage = useNavigate();



  function searchUser() {
    localStorage.setItem('git-username', username);
    redirectPage('/profile')
  }

  

  return (

    <div>
      
      <div className='search'>
     <FontAwesomeIcon icon={faGithub} className='octo-cat'/>
  
        <form onSubmit={searchUser}>
      <label htmlFor="username">Search for Github User Data</label>
        <input type="text" name="username"  onChange={handleChange}
          value={username}/>
      </form>
    </div>
      <footer>
        <p>&copy: abbey 2023</p>
      </footer>
    </div>
    
  )
}

export default App
