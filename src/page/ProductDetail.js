import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
    let {id} = useParams()
    const [product, setProducts] = useState(null);
    const getProductDetail = async()=>{
        let url = `https://my-json-server.typicode.com/todyjjang/ryan-hnm/products/${id}`
        let response = await fetch(url)
        let data = await response.json();
        setProducts(data);
    }

    useEffect(()=>{
        getProductDetail()
    },[])

  return (
    <Container>
        <Row>
            <Col className="product-img">
                <img src={product?.img}/>
            </Col>
            <Col>
                <div>{product?.title}</div>
                <div>{product?.price}</div>
                <div>
                    <Dropdown>
                    <Dropdown.Toggle variant="light" id="dropdown-basic">
                        Size
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Small</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Medium</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Large</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown></div>
                <button className="add-button">add to cart</button>         
            </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail