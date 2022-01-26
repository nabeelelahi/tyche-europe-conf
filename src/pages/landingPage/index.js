import React from "react";
import { useNavigate } from "react-router";
import { Carousel } from '3d-react-carousal';
import { Nav } from '../../components'
import {
  maincard,
  card1,
  card2,
  card3,
  card4,
} from '../../assets'
import './styles.css'

const Card = ({ title, img }) => {

  const navigate = useNavigate()

  return (
    <div
      className="landing-card"
      onClick={() => navigate('/configurator')}
    >
      <img src={img} alt="" />
      <p style={{ color: "black", }}>{title}</p>
    </div>
  )
};

let slides = [
  <Card title={"Create your own bracelet"} img={maincard} />,
  <Card title={"with Symbolic leafs"} img={card1} />,
  <Card title={"with Zodiac leafs"} img={card2} />,
  <Card title={"with Stones"} img={card3} />,
  <Card title={"with Alphabetic leafs"} img={card4} />,
];

function LandingPage() {
  return (
    <>
      <Nav />
      <div className="landing-body">
        <div className="layer">
          <Carousel slides={slides} />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
