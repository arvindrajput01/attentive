import React from 'react'
import LoginImg from '../../assets/login.jpg'
class Login extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        email: "",
        password: "",
        loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    
    handleSubmit(event) {
        const { email, password } = this.state;
        
        event.preventDefault();
        //this.setState({isLogin: true});
        this.props.isLogin(true);
   
    }

    render(){
        return (
            <div className='relative w-full h-screen bg-zinc-900/80'>
                <img className='absolute w-full h-full object-cover mix-blend-overlay' src={LoginImg} alt="/" />
            
        
            <div className='flex justify-center items-center h-full'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-8' onSubmit={this.handleSubmit} id="LoginId">
                    <h2 className='text-4xl font-bold text-center py-4'>Login</h2>
        
                    <div className='flex flex-col mb-4'>
                        <label>Username</label>
                        <input className='border relative bg-gray-100 p-2' type="text" />
                    </div>
                    <div className='flex flex-col '>
                        <label>Password</label>
                        <input className='border relative bg-gray-100 p-2' type="password" />
                    </div>
                    <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' type="submit">Sign In</button>
                    <p className='flex items-center mt-2'><input className='mr-2 border relative bg-gray-100 p-2' type="checkbox"  />Remember Me</p>
                    <p className='text-center mt-8'>Forgot Password</p>
                </form>
            </div>
            </div>
          )
    }
 
}

export default Login