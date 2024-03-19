import { Card, CardFooter, Col, Container, Row } from "react-bootstrap"
import { HiOutlineUserGroup } from "react-icons/hi2";
import { AiOutlineDollar, AiOutlineFileDone } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import './style/dashboard.css'
import useGetData from "../custome-hooks/useGetData";
import { useEffect, useState } from "react";

function Dashboard() {
  const { data: user } = useGetData('user')
  const { data: products } = useGetData('products')
  const cards = [
    {
      nbr: '$30200',
      title: 'Total Sales',
      icon: <AiOutlineDollar size={'50px'} />,
      date: '2:15',
      bg: 'purple-moon',
    },
    {
      nbr: 30,
      title: 'Orders',
      icon: <AiOutlineFileDone size={'50px'} />,
      date: '2:15',
      bg:'ultra-voilet',
    },
    {
      nbr: products?.length,
      title: 'Total Products',
      icon: <MdOutlineProductionQuantityLimits size={'50px'} />,
      date: '2:15',
      bg:'pink-moon',
    },
    {
      nbr: user?.length,
      title: 'Total Users',
      icon: <HiOutlineUserGroup size={'50px'} />,
      date: '2:15',
      bg:'cool-blues',
    },
  ]

  return (
    <Container style={{ minHeight: '50vh' }}>
      <Row className="mt-2">
        {
          cards.map((item, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3}  >
              <Card className={item.bg}>
                <Card.Body>
                  <Row>
                    <Col xs={8}>
                      <Card.Title>{item.nbr}</Card.Title>
                      <Card.Text>{item.title}</Card.Text>
                    </Col>
                    <Col xs={4}>
                      {item.icon}
                    </Col>
                  </Row>
                </Card.Body>
                <CardFooter>
                  <Card.Text>
                    update : {item.date} am
                  </Card.Text>
                </CardFooter>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default Dashboard