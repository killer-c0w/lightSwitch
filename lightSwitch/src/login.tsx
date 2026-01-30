import './Auth.css'

interface LoginProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

function Login({ onNavigate }: LoginProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Add login logic here
    console.log('Login submitted');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-submit">Login</button>
        </form>
        <p className="auth-switch">
          Don't have an account?{' '}
          <span onClick={() => onNavigate('signup')}>Sign Up</span>
        </p>
        <button className="back-btn" onClick={() => onNavigate('home')}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Login