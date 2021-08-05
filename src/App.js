import './App.css';
import { useState } from 'react';  
import axios from 'axios';
import styled from 'styled-components';
import UserCard from './components/UserCard';
const Content = styled.div`
  display:flex;
  flex-direction:column;
  min-height: 600px;
  justify-content: space-around;
  align-items: center;
  font-family: Consolas;

`;
const HeaderText = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const NavBar = styled.div`
  background-color: black;
  display:flex;
  align-items: center;
  justify-content:center;
  font-weight:bold;
  color: white;
  box-shadow: 1px 0 10px 5px #aaa;
  font-size: 50px;
  font-family: Consolas;
`;
const StyledButton = styled.button`
  background-color:white;
  border: 5px solid black;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Consolas;
  font-weight: bold;
  font-size: 20px;
  transition-duration: 500ms;
  &:hover{
    background-color:black;
    color:white;
  }
`;
const MyCredentials = styled.div`
  display:flex;
  justify-content:center;
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  font-family: Consolas;
  font-weight: bold;
`;
function App() {
  const [content, updateContent] = useState([]);
  const [fetchedCount, updateFetchedCount] = useState(0);
  const buttonPressed = async () => {
    updateFetchedCount(fetchedCount + 1);
    const response = await axios.get('https://randomuser.me/api/');
    updateContent(response.data.results);
  };
  return (
    <>
    <NavBar>Random User Fetcher</NavBar>
    <Content>
    <HeaderText>You have fetched {fetchedCount} user{fetchedCount===1?"":"s"}.</HeaderText>  
    <StyledButton onClick = { () => buttonPressed() }> New User</StyledButton>
    <div>{content.length ? content.map( (user,index) => <UserCard key={index} userInfo={user}/> ) : "Cick button to generate user" }</div>
    </Content>
    <MyCredentials>Made with {"<3"} by Lakshit Dua</MyCredentials>
    </>
  );
}

export default App;
