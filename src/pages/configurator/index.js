import React, { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Row, Col, Layout } from "antd";
import {
  CloseOutlined,
  DownOutlined,
  UpOutlined,
  ZoomInOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Logo, Links } from "../../assets";
import {
  BraceletModal,
  DroppableComp,
  DraggableComp,
  LoaderComp,
} from "../../components";
import { categories } from "../../config";
import { http } from "../../services";
import Client from 'shopify-buy';
import './configurator.css'

const { Header } = Layout;

export default function Configurator() {

  const client = Client.buildClient({
    storefrontAccessToken: 'b115721510b772788c02a084c1ecf5ea',
    domain: 'tyche-jewelry-official.myshopify.com'
  });

  const [braceletPrice, setBraceletPrice] = useState(160);

  const [selections, setSelections] = useState([]);

  const [leaves, setLeaves] = useState([]);

  const [categoryState, setCategoryState] = useState("symbol");

  const [item, setItem] = useState(null);

  const [categoryIndex, setCategoryIndex] = useState(0);

  const [size, setSize] = useState(16);

  const [linkPrize, setLinkPrize] = useState(0);

  const [isAddToCart, setIsAddToCart] = useState(false);

  const [checkoutId, setCheckoutId] = useState(null);

  const [webURL, setWebURL] = useState(null);

  const [bracelet, setBracelet] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [visible, setVisible] = useState(false);

  const [collection, setCollections] = useState(null);

  const [single, setSingle] = useState(null);

  const addToCartMargin =
    selections.length === 23
      ? "340px"
      : selections.length === 22
        ? "320px"
        : selections.length === 21
          ? "305px"
          : selections.length === 20
            ? "295px"
            : selections.length === 19
              ? "270px"
              : selections.length === 18
                ? "255px"
                : selections.length === 17
                  ? "240px"
                  : selections.length === 16
                    ? "225px"
                    : selections.length === 15
                      ? "210px"
                      : selections.length === 14
                        ? "200px"
                        : selections.length === 13
                          ? "190px"
                          : selections.length === 12
                            ? "180px"
                            : selections.length === 11
                              ? "170px"
                              : selections.length === 10
                                ? "160px"
                                : selections.length === 9
                                  ? "125px"
                                  : selections.length === 8
                                    ? "100px"
                                    : selections.length === 7 && "75px";

  useEffect(() => {
    selectionAndPrize();
  }, []);

  useEffect(() => {
    client.collection.fetchAllWithProducts().then((collections) => {
      client.collection.fetchWithProducts(collections[categoryIndex].id, { productsFirst: 50 }).then((collection) => {
        const tempArray = [];

        collection.products.forEach((item, index) => {
          const obj = {
            id: item.id,
            title: item.title,
            img: item.images[2].src,
            variantId: item.variants[0].id,
            price: item.variants[0].price,
            category: collections[categoryIndex].title
          }
          tempArray.push(obj)
        })
        setTimeout(() => setLeaves(tempArray), 50)
        setLeaves(tempArray);
      });
    });
  }, [categoryIndex])

  useEffect(() => {

    client.checkout.create().then((checkout) => {
      setCheckoutId(checkout.id);
      setWebURL(checkout.webUrl)
    });

    const handle = 'einzelnes-leaf';

    client.product.fetchByHandle(handle).then((product) => {
      setSingle(product);
    });

  }, [])

  async function dragEnd(res) {
    setItem(null);
    const { source, destination } = res;

    if (destination && source.droppableId === "beats") {
      if (destination.droppableId === "beats") return;

      let tempArray = bracelet;

      tempArray[destination.index] = leaves[source.index];

      addVariantToCart(leaves[source.index].variantId, 1)

      setBracelet(null);

      setTimeout(() => setBracelet(tempArray), 0.5);

      selectionAndPrize();
    } else if (
      Number(source.droppableId) >= 0 &&
      Number(source.droppableId) < 23
    ) {
      if (!destination) return;
      if (
        Number(destination.droppableId) >= 0 &&
        Number(destination.droppableId) < 23
      ) {
        let tempArray = bracelet;

        await removeVarientFromCart(tempArray[destination.index].variantId)
        .then(() => {
          
          tempArray[destination.index] = tempArray[source.index];

          tempArray[source.index] = null;
  
          setBracelet(null);
  
          setTimeout(() => setBracelet(tempArray), 0.5);
  
          selectionAndPrize();

        })

      } else {
        let tempArray = bracelet;

        await removeVarientFromCart(tempArray[source.index].variantId)
        .then(() => {

          tempArray[source.index] = null;

          setBracelet(null);

          setTimeout(() => setBracelet(tempArray), 0.5);

          selectionAndPrize();
        })

      }
    }
  }

  function selectionAndPrize() {
    let cartArray = [];
    let emptyArray = [];

    let total = linkPrize;

    bracelet.forEach((item) => {
      if (item?.price) {
        cartArray.push(item);
      }
      else {
        emptyArray.push(null);
      }
    });

    console.log(emptyArray, 'nulling')

    cartArray.map((item, index) => {
      total += Number(item.price);
    });

    emptyArray.map((arr, ind) => {
      total += 10;
    })

    setBraceletPrice(total);

    setSelections([]);

    setTimeout(() => setSelections(cartArray), 50);
  }

  function onSizeChange(op) {
    let tempArray = bracelet;

    if (op === "add" && tempArray) {
      tempArray.length = size + 1;
      tempArray[tempArray?.length - 1] = null;
    } else if (op === "sub" && tempArray) {
      tempArray.length = size - 1;
      tempArray[tempArray?.length - 1] = null;
    }

    setBracelet(null);

    setTimeout(() => {
      setBracelet(tempArray);
    }, 0.5);
  }

  function addSub(op) {
    if (op === "add") {
      setSize((prev) => prev + 1);
    }
    if (op === "sub") {
      setSize((prev) => prev - 1);
    }

    onSizeChange(op);
  }

  function onCategorieChange(item, index) {
    setCategoryIndex(index);
    setCategoryState(item.state);
  }

  function clearSelection() {
    let tempArray = [];

    bracelet.forEach((item) => {
      tempArray.push(null);
    });

    setBraceletPrice(0);

    setSelections([]);

    setTimeout(() => {
      setSelections([]);
      setBracelet(tempArray);
    }, 50);
  }

  async function addVariantToCart(variantId, quantity) {

    if (variantId) {
      const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }]

      const res = await client.checkout.addLineItems(checkoutId, lineItemsToAdd)

      return res
    }

  }

  async function proceedToCheckout() {

    let x = [];
    bracelet.forEach((item, index) => {
      if (!item) {
        x.push(null)
      }
    })

    addVariantToCart(single.variants[0].id, x.length)
      .then(() => {
        client.checkout.fetch(checkoutId).then((checkout) => {
          // checkout.lineItems && window.open(webURL)
          if (checkout.lineItems) window.location.href = webURL;
        })
      })

  }


  async function removeVarientFromCart(variantId){
   
    client.checkout.fetch(checkoutId).then((checkout) => {

      checkout.lineItems.forEach(async item => {

        if (item.variant.id, variantId) {

          const lineItemsToUpdate = [
            item.id
          ];

          await client.checkout.removeLineItems(checkoutId, lineItemsToUpdate)

        }
      })
    })
  }


  return (
    <DragDropContext onDragEnd={dragEnd}>
      <Header className="conf-header">
        <img alt="" src={Logo} />
      </Header>
      <Row className="conf-row">
        <Col lg={17} md={16} sm={24} xs={24}>
          <div className="left-container">
            <Row>
              <Col lg={1} xs={24}>
                <div className="left-icon-container">
                  {/* <img alt="" src={Heart} /> */}
                  <ZoomInOutlined
                    style={{ fontSize: "30px", color: "#949494" }}
                    onClick={() => setVisible(true)}
                  />
                  <DeleteOutlined
                    style={{ fontSize: "30px", color: "#949494" }}
                    onClick={clearSelection}
                  />
                  {/* <img alt="" src={Color} /> */}
                </div>
              </Col>
              <Col
                className="left-top"
                lg={{ offset: 1, span: 22 }}
                xs={{ offset: 0, span: 24 }}
              >
                <div className="bracelet-container">
                  <div className="bracelet">
                    {bracelet && (
                      <>
                        {bracelet?.map((item, index) => (
                          <div className="bracelet-leaf-body">
                            <DroppableComp droppableId={`${index}`}>
                              <DraggableComp
                                index={index}
                                draggableId={`bracelet-draggable-${index}`}
                              >
                                {item ? (
                                  <img
                                    className="leaf"
                                    src={item?.img}
                                    alt=""
                                  />
                                ) : (
                                  <img
                                    className="leaf"
                                    src="https://cdn.shopify.com/s/files/1/0620/5358/1019/products/DSC_5293-1_9a0bc38c-836c-48f9-a6d9-c00a2211b0d9.png?v=1640993777"
                                    alt=""
                                  />
                                )}
                              </DraggableComp>
                            </DroppableComp>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
                <div className="categories-container">
                  <Row gutter={[16, 16]} className="categories-row">
                    {categories.map((item, index) => (
                      <Col key={item.title} lg={6} xs={12}>
                        <div
                          onClick={() => onCategorieChange(item, index)}
                          style={{
                            border:
                              categoryIndex === index && "2px solid #dddddd",
                          }}
                          className="categories-card"
                        >
                          <img alt="" src={item.img} />
                          {item.title}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
            <DroppableComp droppableId="beats">
              <Row gutter={[16, 16]} className="beats-container">
                {leaves ? (
                  <>
                    {leaves?.map((item, index) => {
                      return (
                        <Col key={item.title} lg={3} md={3} sm={4} xs={6}>
                          <DraggableComp
                            draggableId={item.title}
                            index={index}
                          >
                            <div
                              className="beats-cards"
                              onClick={() => {
                                setItem(item);
                                setIsAddToCart(false);
                              }}
                            >
                              <img src={item.img} alt="" />
                            </div>
                          </DraggableComp>
                        </Col>
                      );
                    })}
                  </>
                ) : (
                  <LoaderComp />
                )}
              </Row>
            </DroppableComp>
          </div>
        </Col>
        <Col
          lg={{ offset: 0, span: 7 }}
          md={{ offset: 0, span: 8 }}
          sm={{ offset: 5, span: 14 }}
          xs={{ offset: 0, span: 24 }}
        >
          <div className="right-container">
            <div className="right-card">
              <div
                onClick={() => setIsAddToCart(!isAddToCart)}
                className="top-button-box"
              >
                <Row>
                  {isAddToCart ? (
                    <Col span={24}>
                      <div
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          paddingTop: "7.5px",
                          borderTopLeftRadius: "75px",
                        }}
                        className="top-button-right"
                      >
                        <p> YOUR SELECTION </p>
                      </div>
                    </Col>
                  ) : (
                    <>
                      <Col span={12}>
                        <div
                          style={{ backgroundColor: "#000", color: "#fff" }}
                          className="top-button-left"
                        >
                          €{braceletPrice}
                        </div>
                      </Col>
                      <Col
                        onClick={() => {
                          setIsAddToCart(true);
                          setItem(null);
                        }}
                        span={12}
                      >
                        <div className="top-button-right top-button-right-small">
                          Add to Cart
                        </div>
                      </Col>
                    </>
                  )}
                </Row>
              </div>
              <div className="item-top">
                <div>
                  {!item && isAddToCart ? (
                    <>
                      <img src={Links} alt="" />
                      <UpOutlined
                        onClick={() => setIsAddToCart(false)}
                        style={{
                          fontSize: "25px",
                          color: "#b5b3b3",
                          margin: "1.5vh 1.5vw",
                        }}
                      />
                    </>
                  ) : !item && !isAddToCart ? (
                    <DownOutlined
                      onClick={() => {
                        setIsAddToCart(true);
                        setItem(null);
                      }}
                      style={{
                        fontSize: "25px",
                        color: "#b5b3b3",
                        margin: "1.5vh 1.5vw",
                        marginLeft: '90%'
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              {isAddToCart ? (
                <>
                  <div className="add-to-cart-container">
                    <div className="add-to-cart-text-box">
                      <div className="add-to-cart-text-row">
                        <p className="size">
                          {size} Leaves <span> {` (${size + 2} cm)`}</span>
                        </p>
                        <button
                          disabled={size > 16 ? false : true}
                          style={{ opacity: size > 16 ? "1" : "0.2" }}
                          className="btns"
                          onClick={() => addSub("sub")}
                        >
                          -
                        </button>
                        <button
                          disabled={size < 19 ? false : true}
                          style={{ opacity: size < 19 ? "1" : "0.2" }}
                          className="btns"
                          onClick={() => addSub("add")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <hr />
                    <div
                      className="add-to-cart-scroll-area"
                      style={{ paddingTop: addToCartMargin }}
                    >
                      {selections.map((item) => (
                        <div key={item.title} className="image-text-row">
                          <div>
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                          </div>
                          <p>€ {item.price}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="bottom-buttons"
                    onClick={proceedToCheckout}
                  >
                    <p>Add to cart</p>
                    <h4> €{braceletPrice}</h4>
                  </div>
                </>
              ) : (
                <div className="right-text-box">
                  {item ? (
                    <div className="item-details">
                      <div className="item-top">
                        <CloseOutlined
                          style={{ fontSize: "25px", color: "#b5b3b3" }}
                          onClick={() => setItem(null)}
                        />
                      </div>
                      <h3>{item.title}</h3>
                      <img src={item.img} alt="" />
                      <h4>Price: € {item.price}</h4>
                    </div>
                  ) : (
                    <>
                      <h2>YOUR SELECTION</h2>
                      {selections.length ? (
                        <div className="selection-flow">
                          <Row gutter={[16, 16]}>
                            {selections.map((item) => (
                              <Col span={12}>
                                <div className="selection-beats">
                                  <img src={item.img} alt="" />
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </div>
                      ) : (
                        <>
                          <p>You haven't selected any</p>
                          <p>
                            Click on the arrow above to cange the length of you
                            bracelet.
                          </p>
                          <span>
                            Every time you will add a Link to your bracelet, it
                            will automatically be saved here in Your Selection.{" "}
                          </span>
                        </>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </Col>
      </Row>
      <BraceletModal
        visible={visible}
        setVisible={setVisible}
        bracelet={bracelet}
      />
    </DragDropContext>
  );
}
