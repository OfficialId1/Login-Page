import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import userimage from './userimage.png';

export default function Login() {
    const Wrapper = styled.div`
        display:flex;
        justify-content:flex-end;
        align-items:center;
        height:100vh;
        width:100vw;
        background-image:url(${userimage});
        background-size: cover;
    `;
    const Container = styled.div`
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:500px;
        height:400px;
        flex-direction:column;
        padding:20px;
        border-radius:15px;
    `;
     const Input = styled.input`
       height:50px;
       border-radius:50px;
       padding:25px;
       background-color: #77777771;
       border:none;
       width:300px;
       outline:none;
       box-shadow:0 0 5px yellow;
    `;
    const Button = styled.button`
       height:50px;
       border-radius:50px;
       background: linear-gradient(orangered,crimson);
       border:none;
       width:300px;
       outline:none;
       color:white;
       font-size:large;
       cursor:pointer;
    `;
  return (
    <Wrapper>
        <Container>
            <Input type="text" placeholder='Username'/>
            <Input type="password" placeholder='Password'/>
            <Button>Login</Button>
            <Link>forget password?</Link>
            <div><Link>Create Account</Link>&emsp;&emsp;&emsp;<Link>Need Help?</Link></div>
        </Container>
    </Wrapper>
  )
}
