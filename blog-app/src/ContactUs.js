import { useState } from "react";
import { useHistory } from "react-router-dom";

const ContactUs = () => {

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, genre, email };

        fetch('http://localhost:8001/users', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(user)
        }).then(() => {
            history.push('/');
        })
        
    }

    return (
        <div className="create">
          <h2>Contact us</h2>
          <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input 
              type="text" 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Genre:</label>
            <input
              type="text"
              required
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            ></input>
            <label>Email:</label>
            <input 
              type="text" 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
      );
}
 
export default ContactUs;