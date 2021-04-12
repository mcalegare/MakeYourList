import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url(../../assets/blue.png) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  .typist {
    padding-top: 1vh;
  }

  .typist strong{
    color: ${props=> props.theme.colors.primary};
  }

  .login-form .form-control {
    background: #f7f7f7 none repeat scroll 0 0;
    border: 1px solid #d4d4d4;
    border-radius: 4px;
    font-size: 14px;
    height: 50px;
    line-height: 50px;
  }

  .main-div {
    background: #fff none repeat scroll 0 0;
    border-radius: 2px;
    margin: 0 auto;
  }

  .login-form .form-group {
    margin-bottom:10px;
  }
  .login-form{
    text-align:center;
    margin-top: 25vh;
  }

  .forgot a {
    color: #777777;
    font-size: 14px;
    text-decoration: underline;
  }
  .login-form  .btn.btn-primary {
    background: ${props => props.theme.colors.primary} none repeat scroll 0 0;
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding: 0;
  }
  .forgot {
    text-align: left; margin-bottom:30px;
  }
  .botto-text {
    color: #ffffff;
    font-size: 14px;
    margin: auto;
  }
  .login-form .btn.btn-primary.reset {
    background: #ff9900 none repeat scroll 0 0;
  }
  .back { text-align: left; margin-top:10px;}
  .back a {color: #444444; font-size: 13px;text-decoration: none;}
`;
