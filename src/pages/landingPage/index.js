import React from "react";
import { Layout } from "antd";
import { Logo, Bracelets } from "../../assets";
import { useNavigate } from "react-router";
import { Carousel } from '3d-react-carousal';
import './styles.css'

const { Header } = Layout;

const Card = ({ title }) => {

  const navigate = useNavigate()

  return(
    <div 
    className="landing-card"
    onClick={() => navigate('/configurator')}
    >
    <p style={{ color: "black" }}>{title}</p>
  </div>
  )
};

let slides = [
  <Card title={"Create your own bracelet"} />,
  <Card title={"with Zodiac leafs"} />,
  <Card title={"with Alphabetic leafs"} />,
  <Card title={"with Symbolic leafs"} />,
  <Card title={"with Stones"} />,
];

function LandingPage() {
  return (
    <>
      <Header className="conf-header">
        <img alt="" src={Logo} />
      </Header>
      <div className="landing-body">
        <div className="layer">
          <Carousel slides={slides} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
