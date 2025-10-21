import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateNewPassword.css';

const CreateNewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate password length
    if (password.length < 8) {
      alert('Your password must be at least 8 characters long.');
      return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    console.log('New password set successfully');
    // Add your password reset logic here
    // After successful reset, navigate to login
    alert('Password reset successful! Please login with your new password.');
    navigate('/login');
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <button className="back-button" onClick={() => navigate(-1)}>
          ←
        </button>

        <div className="auth-header">
          <h1 className="auth-title">Set Password</h1>
        </div>

        <div className="auth-content">
          <div className="password-info">
            <p>Your password must be at least (number) characters long.</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="auth-footer">
              <div className="password-fields">
                <div className="form-group">
                  <label htmlFor="password" className="field-label">
                    Password
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      placeholder="• • • • • • • •"
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
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="field-label">
                    Confirm Password
                  </label>
                  <div className="password-input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      placeholder="• • • • • • • •"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-input"
                      required
                      minLength={8}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label="Toggle confirm password visibility"
                    >
                      {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>
              </div>

              <button type="submit" className="auth-button">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;