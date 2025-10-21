import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('SignUp submitted:', { email, phone, password });
    // Add your signup logic here
    // After successful signup, navigate to login or dashboard
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
        </div>

        <div className="auth-content">
          <div className="welcome-section">
            <h2>Let's Start!</h2>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <input
                type="email"
                placeholder="yourmail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="tel"
                placeholder="+91 1234-567890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                minLength={8}
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

            <div className="form-group">
              <input
                type="password"
                placeholder="••••••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="form-input"
                required
                minLength={8}
              />
            </div>

            <div className="auth-footer">
              <p className="terms-text">
                By continuing, you agree to{' '}
                <span className="terms-link">T&C</span>
              </p>

              <button type="submit" className="auth-button">
                Sign Up
              </button>

              <div className="social-section">
                <p className="social-text">or sign up with</p>
                <div className="social-buttons">
                  <button type="button" className="social-btn" aria-label="Sign up with Instagram">
                    <Instagram size={20} />
                  </button>
                  <button type="button" className="social-btn" aria-label="Sign up with Facebook">
                    <Facebook size={20} />
                  </button>
                </div>
              </div>

              <p className="redirect-text">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="redirect-link"
                >
                  Log In
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;