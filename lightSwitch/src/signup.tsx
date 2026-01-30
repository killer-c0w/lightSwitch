import './Auth.css'

interface SignupProps {
  onNavigate: (page: 'home' | 'login' | 'signup') => void;
}

function Signup({ onNavigate }: SignupProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Add signup logic here
    console.log('Signup submitted');
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button type="submit" className="auth-submit">Sign Up</button>
        </form>
        <p className="auth-switch">
          Already have an account?{' '}
          <span onClick={() => onNavigate('login')}>Login</span>
        </p>
        <button className="back-btn" onClick={() => onNavigate('home')}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default Signup