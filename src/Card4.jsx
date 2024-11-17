import React from 'react';
import styled from 'styled-components';

const Card4 = () => {
  return (
    <StyledWrapper>
      <div className="card">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="70" height="70" viewBox="0 0 48 48">
<path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
</svg>
        

          <rect width={512} height={512} rx="15%" fill="#f7df1e" />
          <path fill="#25241c" d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z" />
       
        <div className="header">
          <center>CSS</center>
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
    padding: 20px 0px;
    color: orange;
    border-radius: 30px;
    width:150px;
  }
   .header{
    font-size:20px;
    }
  .App-logo {
    pointer-events: none;
    width: 120px;
    margin-bottom: 0px;

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

  .App-button:hover {
    color: orange;
    background-color: orange;
  }`;

export default Card4;
