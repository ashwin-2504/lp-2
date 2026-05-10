import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [message, setMessage] = useState('')
  const [messageClass, setMessageClass] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Mock credentials
    const validUser = 'admin';
    const validPass = 'admin';

    if (username === validUser && password === validPass) {
      setIsLoggedIn(true);
      setMessage('');
    } else {
      setMessage('Invalid username or password!');
      setMessageClass('text-danger');
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setMessage('');
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm border-0">
            
            {isLoggedIn ? (
              <div className="text-center py-3">
                <div className="mb-3 text-success">
                  <h1 style={{ fontSize: '4rem' }}>✓</h1>
                </div>
                <h3 className="fw-bold mb-2">Login Successful!</h3>
                <p className="text-muted mb-4">Welcome back to your account.</p>
                <div className="d-grid">
                  <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="fw-bold mb-3 text-center">Login</h3>
                <p className="text-muted text-center mb-4">ReactJS Auth Demo</p>
                
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Password</label>
                    <input 
                      type="password" 
                      className="form-control" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
                
                {message && (
                  <div className={`mt-3 text-center small ${messageClass}`}>
                    {message}
                  </div>
                )}
                
                <p className="text-center mt-3 small text-muted">Hint: admin / admin</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default App

