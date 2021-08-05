import React from 'react'
import styled from 'styled-components';
const UserInformation = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    border: 1px solid black;
    box-shadow: 1px 0 10px 5px #aaa;
    max-width: 500px;
    padding: 10px;
`;
const UserName = styled.div`
    font-weight: bold;
    font-size: 25px;
`;
const UserInfo = styled.div`

`;
const UserAdd1 = styled.div`
    font-style: italic;
`;
const UserAdd2 = styled.div`
    font-size: 18px;
`;
const UserImg = styled.img`
    height: 200px;
    width: 200px;
    margin: 18px;
`;
const UserCard = (props) => {
    return (
        <div>
            <UserInformation>
            <UserImg src={props.userInfo.picture.large}></UserImg>
            <UserName>{props.userInfo.name.title+" "+props.userInfo.name.first+" "+props.userInfo.name.last}</UserName>
            from
            <UserAdd1>{props.userInfo.location.street.number + " " +props.userInfo.location.street.name + " " + props.userInfo.location.city}</UserAdd1>
            <UserAdd2>{props.userInfo.location.state + " " + props.userInfo.location.postcode}</UserAdd2>
            <UserInfo>{props.userInfo.gender}</UserInfo>
            <UserInfo>{props.userInfo.email}</UserInfo>
            <UserInfo>{props.userInfo.cell}</UserInfo>
            </UserInformation>
        </div>
    )
}
export default UserCard;