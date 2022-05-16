import './App.css';

function App() {
  return (
    <div className="container">
      <div className="form-card">
        <h2 className='title'>Join the chat</h2>
        <form>
          <p className='label'>Email</p>
          <input type="text" className='input'/>
          <p className='label'>Password</p>
          <input type="text" className='input'/>
          <button className='sign-btn'>Sign In</button>
          <hr />
          <button className='gmailSign-btn'>Sign in with Gmail</button>
        </form>
      </div>
  
    </div>
  );
}

export default App;
