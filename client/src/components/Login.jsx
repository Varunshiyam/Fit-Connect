import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Add your login logic here
    // After successful login, navigate to dashboard or home
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="auth-header">
          <h1 className="auth-title">Log In</h1>
        </div>

        <div className="auth-content">
          <div className="welcome-section">
            <h2>Welcome</h2>
            <p>Let's achieve your goals together. Log in now.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>

            <div className="forgot-password-link">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="link-button"
              >
                Forgot Password?
              </button>
            </div>

            <div className="auth-footer">
              <button type="submit" className="auth-button">
                Log In
              </button>

              <div className="social-section">
                <p className="social-text">or sign in with</p>
                <div className="social-buttons">
                  <button type="button" className="social-btn" aria-label="Sign in with Instagram">
                    <Instagram size={20} />
                  </button>
                  <button type="button" className="social-btn" aria-label="Sign in with Facebook">
                    <Facebook size={20} />
                  </button>
                </div>
              </div>

              <p className="redirect-text">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/signup')}
                  className="redirect-link"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;