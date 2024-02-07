import styled from 'styled-components';
import BackgroundImage from '../../resources/children.jpg'

export const Container = styled.div`
  margin: auto;
  font-family: 'Arial, sans-serif';
  background-color: #f9f9f9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
`;


export const Header = styled.header`
  background: #1B80D4;
  padding: 20px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const MainContent = styled.main`
  padding: 20px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FeaturedSection = styled.section`
  background-color: #F2BB7A;
  padding: 15px;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ActivitiesSection = styled.section`
  background-color: #98FB98;
  padding: 15px;
  width: 400px;
  margin: auto;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const Footer = styled.footer`
  margin-top: 20px;
  padding: 10px;
  background: #1B80D4;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const SelectChildDropdown = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
`;

export const ConfirmButton = styled.button`
  background-color: #1B80D4;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #1673BF;
  }
`;