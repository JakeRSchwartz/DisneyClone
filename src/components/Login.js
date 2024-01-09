import React from "react";
import styled from "styled-components";

function Login() {
  return <Container>
    <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg"/>
        <Signup>GET ALL THERE</Signup>
        <Description>
            Lorem ipsum dolor, 
            sit amet consectetur adipisicing elit. 
            Mollitia quos nesciunt fuga a optio dolor similique reiciendis saepe modi sequi neque quasi deleniti, consectetur autem voluptas 
            exercitationem vitae ullam quia, vero repellendus quam laboriosam doloremque necessitatibus. Beatae magnam blanditiis officiis.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png"/>
    </CTA>
  </Container>;
}

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display:flex;
  align-items:top;
  justify-content:center;

  &:before {
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    position: absolute;
    no-repeat: fixed;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
    opacity:.7;

  }
`;
const CTA = styled.div`
max-width:660px;
padding:80px 40px;
display:flex;
width:80%;
flex-direction:column;
margin-top:100px;

`;
const CTALogoOne = styled.img`
`;

const Signup = styled.a`
  width:100%;
  background-color: #0063e5;
  font-weight:bold;
  padding:17px 0;
  color:#f99f9f9;
  border-radius: 4px;
  text-align:center;
  font-size:18px;
  cursor:pointer;
  transtion:all 250ms;
  letter-spacing:1.5px;
  margin-top:8px;
  margin-bottom:12px;

  &:hover{
    background: #0483ee
  }
`

const Description = styled.p`
font-size:11px;
letter-spacingL1.5px;
text-align:center;
line-height:1.5;
`;
const CTALogoTwo = styled.img`
padding:0 15px;
`