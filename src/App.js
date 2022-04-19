import './App.css';

function App() {
  return (
    <div className="App">
      <article className='page'>
        <div className='container'>
          <img className='snapchat-icon' src='https://accounts.snapchat.com/accounts/static/images/ghost/snapchat-app-icon.svg' alt='Snapchat' />
          <h1 class="accountsTitle">Log in to Snapchat</h1>
          <div>
            <form id='login_form' className='centered_form'>
              <div className='form_group'>
                <label htmlFor='username' className='control_label'>Username or Email</label>
                <input name='username' autoComplete='off' type='text' id='username' className='form_control'></input>
              </div>
              <div className='form_group'>
                <label htmlFor='password' className='control_label'>Password</label>
                <input name='password' autoComplete='off' type='password' id='password' className='form_control'></input>
              </div>
              <p className='secondary_action'>
                <a href='#' className='forgor'>Forgot Password</a>
              </p>
              <div className='primary_action'>
                <button type='submit' id='loginTrigger' className='btn'>Log In</button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
