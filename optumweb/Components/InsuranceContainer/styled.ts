import styled from "styled-components";

const Container = styled.div`
 text-align: center;
  margin: 20px;
  background-color: #f5f5f5;
  color: #333;
`;

const Header = styled.header`
  background-color: #00796b;
  color: white;
  padding: 10px; 
`;

const Navigation = styled.nav`
  background-color: #004d40;
  color: white;
`;

const NavigationList = styled.ul`
  list-style: none;
  padding: 20px;
  margin: 0;
  display: flex;
`;

const NavigationItem = styled.li`
  margin-right: 1em;
`;

const NavigationLink = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 20px;

  &:hover {
    background-color: #00695c;
  }
`;

const Main = styled.main`
  margin: 2em 0;
  `;

const PlanList = styled.ul`
 list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const PlanItem = styled.li`
    background-color: white;
    width: 100%;
  margin: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ResponsivePlan = styled(PlanItem)`
  flex: 1 0 300px;
  margin: 1em;
`;


const PlanTitle = styled.h3`
  margin-bottom: 0.5em;
`;

const PlanDescription = styled.p`
  font-size: 0.9em;
  margin-bottom: 0.5em;
`;
const Button = styled.button`
    margin-top: 10px; 
  padding: 5px 10px; 
  font-size: 1em;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #00796b; /* Teal */
  color: white;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #00695c; /* Dark Teal */
  }
`;
const PlanButton = styled(Button)`
  background-color: #00796b; /* Teal */
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 0.5em;
`;

const Footer = styled.footer`
 margin-top: 20px; 
  background-color: #00796b;
  color: white;
  padding: 10px; 
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  padding: 10px; 
  margin: 10px; 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;
const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ResponsiveCard = styled(Card)`
  flex: 1 0 300px;
  margin: 1em;
`;

const SkipToContent = styled.a`
  position: absolute;
  top: -40px;
  left: 0;
  background-color: #333;
  color: #00695c;
  padding: 10px;
  z-index: 999;
`;

const LiveRegion = styled.div`
  position: absolute;
  left: -9999px;
`;
const Error = styled.div`
    display: flex;
    alignItems: center;

#zipCodeError {
    color: red;
    font-size: 1.2em;
    margin-right: 5px;
     }
`;

export {Container,Header,Navigation,NavigationList,NavigationItem,NavigationLink,Main, Error,PlanList,PlanItem,PlanTitle,PlanDescription,PlanButton, Form,Label,Button,Footer,CardContainer,ResponsiveCard, LiveRegion, SkipToContent, ResponsivePlan}