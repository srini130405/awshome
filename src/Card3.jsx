import React from 'react';
import styled from 'styled-components';

const Card3 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <svg className="App-logo" xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" x="0px" y="0px" width="140" height="140" viewBox="0 0 48 48">

       
<path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
</svg>
          <rect width={512} height={512} rx="15%" fill="#f7df1e" />
          <path fill="#25241c" d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
       
        <div className="header">
          <center> HTML5</center>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    background-color: 'orange';
    border: 3px solid orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 700;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 20px 20px;
    color: orange;
    border-radius: 30px;
        width:100px;
    height:100px;
  }

  .App-logo {
    pointer-events: none;
    width: 130px;
    height:130px;
    margin-bottom: 20px;
  }

  .App-button {
    padding: 10px 20px;
    background-color: transparent;
    color: orange;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    border: 3px solid orange;
    border-radius: 5em;
    margin-top: 20px;
    transition: 0.2s;
  }
   .header{
    font-size:20px;
    }
  .App-button:hover {
    color: orange;
    background-color: orange;
  }`;

export default Card3;
