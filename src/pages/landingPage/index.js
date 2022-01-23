// import React from "react";
// import { Layout } from "antd";
// import Link from "next/link";
// import dynamic from "next/dynamic";
// import { Logo, Bracelets } from "../../assets";

// const CarouselComp = dynamic(() => import("../../components/casousalComp"), {
//   ssr: false,
// });

// const { Header } = Layout;

// const Card = ({ title }) => (
//   <div className="landing-card">
//     <Link href="/conf">
//       <a style={{ textDecoration: "none" }}>
//         <p style={{ color: "black" }}>{title}</p>
//       </a>
//     </Link>
//   </div>
// );

// let slides = [
//   <Card title={"Create your own bracelet"} />,
//   <Card title={"with Zodiac leafs"} />,
//   <Card title={"with Alphabetic leafs"} />,
//   <Card title={"with Symbolic leafs"} />,
//   <Card title={"with Stones"} />,
// ];

// function LandingPage() {
//   return (
//     <>
//       <Header className="conf-header">
//         <img alt="" src={Logo} />
//       </Header>
//       <div className="landing-body">
//         <div className="layer">
//           <CarouselComp slides={slides} />
//         </div>
//       </div>
//     </>
//   );
// }

// export default LandingPage;
