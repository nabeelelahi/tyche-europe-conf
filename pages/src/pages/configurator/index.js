import React, { useState, useEffect } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import {
    Row,
    Col,
    Layout
} from 'antd'
import {
    CloseOutlined,
    DownOutlined,
    UpOutlined,
    ZoomInOutlined
} from '@ant-design/icons';
import {
    Logo,
    Heart,
    Filter,
    Color,
    Links,
    Leaf
} from '../../assets'
import {
    BraceletModal,
    DroppableComp,
    DraggableComp,
    LoaderComp
} from '../../components'
import { categories } from '../../config'
import { http } from '../../services'


const { Header } = Layout

export default function Configurator() {


    const [braceletPrice, setBraceletPrice] = useState(0.00)

    const [selections, setSelections] = useState([])

    const [leaves, setLeaves] = useState([])

    const [categoryState, setCategoryState] = useState(null)

    const [item, setItem] = useState(null)

    const [categoryIndex, setCategoryIndex] = useState(0)

    const [size, setSize] = useState(15)

    const [linkPrize, setLinkPrize] = useState(0)

    const [isAddToCart, setIsAddToCart] = useState(false)

    const [bracelet, setBracelet] = useState([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null])

    const [visible, setVisible] = useState(false)

    const addToCartMargin =
        selections.length > 23 ? "575px" :
            selections.length > 22 ? "550px" :
                selections.length > 21 ? "500px" :
                    selections.length > 20 ? "475px" :
                        selections.length > 19 ? "450px" :
                            selections.length > 18 ? "425px" :
                                selections.length > 17 ? "400px" :
                                    selections.length > 16 ? "375px" :
                                        selections.length > 15 ? "350px" :
                                            selections.length > 14 ? "325px" :
                                                selections.length > 13 ? "300px" :
                                                    selections.length > 12 ? "275px" :
                                                        selections.length > 10 ? "250px" :
                                                            selections.length > 8 && "225px"

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        selectionAndPrize()
    }, [])

    async function getProducts() {

        const url = `https://tyche-eurpe-api.herokuapp.com/api`

        const response = await http(url)

        if (response) {
            setLeaves(response.products)
            console.log(response.products)
        }

    }

    function dragEnd(res) {

        const { source, destination } = res;

        if (destination && source.droppableId === 'beats') {

            let tempArray = bracelet;

            tempArray[destination.index] = leaves[source.index]

            setBracelet(null)

            setTimeout(() => setBracelet(tempArray), 0.5)

            selectionAndPrize()

        }

        else if (!destination && source.droppableId === 'beats') return

        else if (Number(source.droppableId) >= 0 && Number(source.droppableId) < 23) {

            let tempArray = bracelet;

            tempArray[source.index] = null

            setBracelet(null)

            setTimeout(() => setBracelet(tempArray), 0.5)

            selectionAndPrize()


        }


    }

    function selectionAndPrize() {

        let cartArray = [];

        let total = linkPrize;

        bracelet.forEach((item) => {
            if (item?.price) {
                cartArray.push(item)
            }
        })

        cartArray.map((item, index) => {
            total += Number(item.price)
        })

        setBraceletPrice(total)

        setSelections(cartArray)

    }

    function onSizeChange(op) {

        let tempArray = bracelet;

        tempArray.length = size + 1;

        if (op === "add" && tempArray) {
            tempArray[tempArray?.length - 1] = null;
        }

        setBracelet(null)

        setTimeout(() => {
            setBracelet(tempArray)
            console.log(bracelet)
        }, 0.5)

    }

    function addSub(op) {

        if (op === 'add') {
            setSize(prev => prev + 1)
        }
        if (op === 'sub') {
            setSize(prev => prev - 1)
        }

        onSizeChange(op)
    }

    function onCategorieChange(item, index) {
        setCategoryIndex(index)
        setCategoryState(item.state)
    }


    return (
        <DragDropContext onDragEnd={dragEnd}>
            <Header className="conf-header">
                <img alt="" src={Logo} />
            </Header>
            <Row>
                <Col lg={17} md={16} sm={24} xs={24}>
                    <div className="left-container">
                        <Row>
                            <Col lg={1} xs={1}>
                                <div className="left-icon-container">
                                    <img alt="" src={Heart} />
                                    <ZoomInOutlined
                                        style={{ fontSize: '30px', color: '#949494' }}
                                        onClick={() => setVisible(true)}
                                    />
                                    <img alt="" src={Filter} />
                                    <img alt="" src={Color} />
                                </div>
                            </Col>
                            <Col className="left-top" lg={{ offset: 1, span: 22 }} xs={{ offset: 3, span: 20 }}>
                                <div className="bracelet-container">
                                    <div className="bracelet">
                                        {
                                            bracelet &&
                                            <>
                                                {
                                                    bracelet?.map((item, index) => (
                                                            <div className='bracelet-leaf-body'>
                                                                <DroppableComp
                                                                    droppableId={`${index}`}
                                                                >
                                                                    <DraggableComp
                                                                        index={index}
                                                                        draggableId={`bracelet-draggable-${index}`}
                                                                    >
                                                                        {
                                                                            item ?
                                                                                <img className='leaf' src={item?.img} alt='' /> :
                                                                                <img className='leaf' src={Leaf} alt='' />
                                                                        }
                                                                    </DraggableComp>
                                                                </DroppableComp>
                                                            </div>
                                                        ))
                                                }
                                            </>
                                        }
                                    </div>
                                </div>
                                <div className="categories-container">
                                    <Row gutter={[16, 16]} className="categories-row">
                                        {
                                            categories.map((item, index) => (
                                                <Col key={item.title} lg={6} xs={6}>
                                                    <div
                                                        onClick={() => onCategorieChange(item, index)}
                                                        style={{ border: categoryIndex === index && '2px solid #dddddd' }}
                                                        className="categories-card"
                                                    >
                                                        <img alt="" src={item.img} />
                                                        {item.title}
                                                    </div>
                                                </Col>
                                            ))
                                        }
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <DroppableComp droppableId="beats">
                            <Row className="beats-container">
                            {
                                    leaves ?
                                        <>
                                            {
                                                leaves?.map((item, index) => {
                                                    if (categoryState && categoryState === item.category) {
                                                        if (item.category === categoryState) {
                                                            return (
                                                                <Col key={item.title} span={3}>
                                                                    <DraggableComp
                                                                        draggableId={item.title}
                                                                        index={index}
                                                                    >
                                                                        <div
                                                                            className="beats-cards"
                                                                            onClick={() => setItem(item)}
                                                                        >
                                                                            <img src={item.img} alt="" />
                                                                        </div>
                                                                    </DraggableComp>
                                                                </Col>
                                                            )
                                                        }
                                                    }
                                                    else if (!categoryState) {
                                                        return (
                                                            <Col key={item.title} lg={3}>
                                                                <DraggableComp
                                                                    draggableId={item.title}
                                                                    index={index}
                                                                >
                                                                    <div
                                                                        className="beats-cards"
                                                                        onClick={() => setItem(item)}
                                                                    >
                                                                        <img src={item.img} alt="" />
                                                                    </div>
                                                                </DraggableComp>
                                                            </Col>
                                                        )
                                                    }
                                                })
                                            }
                                        </>
                                        :
                                        <LoaderComp />
                                }
                            </Row>
                        </DroppableComp>
                    </div>
                </Col>
                <Col lg={{ offset: 0, span: 7}} md={{ offset: 0, span: 8}} sm={{ offset: 5, span: 14 }} xs={{ offset: 0, span: 24}}>
                    <div className="right-container">
                        <div className="right-card">
                            <div
                                onClick={() => setIsAddToCart(!isAddToCart)}
                                className="top-button-box"
                            >
                                <Row>
                                    {
                                        isAddToCart ?
                                            <Col span={24}>
                                                <div className="top-button-right">
                                                    <p> YOUR SELECTION </p>
                                                </div>
                                            </Col>
                                            :
                                            <>
                                                <Col span={12}>
                                                    <div style={{ backgroundColor: '#000', color: '#fff' }} className="top-button-left">
                                                        ${braceletPrice}
                                                    </div>
                                                </Col>
                                                <Col
                                                    onClick={() => setIsAddToCart(true)}
                                                    span={12}
                                                >
                                                    <div className="top-button-right top-button-right-small">
                                                        Add to Cart
                                                    </div>
                                                </Col>
                                            </>
                                    }
                                </Row>
                            </div>
                            <div className="item-top">
                                <div>
                                    {
                                        !item && isAddToCart ?
                                            <>
                                                <img src={Links} alt="" />
                                                <UpOutlined
                                                    onClick={() => setIsAddToCart(false)}
                                                    style={{ fontSize: "25px", color: "#b5b3b3", margin: "1.5vh 1.5vw" }}
                                                />
                                            </>
                                            : !item && !isAddToCart ?
                                                <DownOutlined
                                                    onClick={() => setIsAddToCart(true)}
                                                    style={{ fontSize: "25px", color: "#b5b3b3", margin: "1.5vh 1.5vw" }}
                                                />
                                                :
                                                <></>
                                    }
                                </div>
                            </div>
                            {
                                isAddToCart ?
                                    <>
                                        <div className="add-to-cart-container">
                                            <div className="add-to-cart-text-box">
                                                <div className="add-to-cart-text-row">
                                                    <p className="size">{size}</p>
                                                    {
                                                        size < 23 &&
                                                        <div className="btns" onClick={() => addSub('add')}>+</div>
                                                    }
                                                    {
                                                        size > 15 &&
                                                        <div className="btns" onClick={() => addSub('sub')}>-</div>
                                                    }
                                                </div>
                                            </div>
                                            <hr />
                                            <div
                                                className="add-to-cart-text-box over-flow-comps"
                                                style={{ paddingTop: addToCartMargin }}
                                            >
                                                {
                                                    selections.map((item) => (
                                                        <div key={item.title} className="image-text-row">
                                                            <div>
                                                                <img src={item.img} alt="" />
                                                                <p>{item.title}</p>
                                                            </div>
                                                            <p>$ {item.price}</p>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="bottom-buttons">
                                            <p>Add to cart</p>
                                            <h4> ${braceletPrice}</h4>
                                        </div>
                                    </>
                                    :
                                    <div className="right-text-box">
                                        {
                                            item ?
                                                <div className="item-details">
                                                    <div className="item-top">
                                                        <CloseOutlined
                                                            style={{ fontSize: "25px", color: "#b5b3b3" }}
                                                            onClick={() => setItem(null)}
                                                        />
                                                    </div>
                                                    <h3>{item.title}</h3>
                                                    <img src={item.img} alt="" />
                                                    <h4>Price: $ {item.price}</h4>
                                                </div>
                                                :
                                                <>
                                                    <h2>YOUR SELECTION</h2>
                                                    {
                                                        selections.length ?
                                                            <div className='selection-flow'>
                                                                <Row>
                                                                    {
                                                                        selections.map((item) => (
                                                                            <Col lg={12}>
                                                                                <div className="beats-cards">
                                                                                    <img src={item.img} alt="" />
                                                                                </div>
                                                                            </Col>
                                                                        ))
                                                                    }
                                                                </Row>
                                                            </div>
                                                            :
                                                            <>
                                                                <p>You haven't selected any</p>
                                                                <span>Every time you will add a Link to
                                                                    your bracelet, it will automatically
                                                                    be saved here in Your Selection. </span>
                                                            </>
                                                    }
                                                </>
                                        }
                                    </div>

                            }
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

    )
}



