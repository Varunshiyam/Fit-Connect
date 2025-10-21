import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    // Add your password reset logic here
    // After successful request, navigate to create new password
    // In a real app, you'd send an email with a reset link
    navigate('/create-password');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="auth-header">
          <h1 className="auth-title">Forgotten Password</h1>
        </div>

        <div className="auth-content">
          <div className="forgot-section">
            <h2>Forgot Password?</h2>
            <p>Enter your email address below to reset your password.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-footer">
              <div className="email-section">
                <label htmlFor="email" className="email-label">
                  Enter your email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="yourmail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <button type="submit" className="auth-button">
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;