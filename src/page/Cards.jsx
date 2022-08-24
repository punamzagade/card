import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Demo from "./Demo";

const Container = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  margin: 30px;
`;
const Card = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.bg};
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(20, 0, 0.75);
`;

const Cardcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const Img = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 10px;
`;

const UserShow = styled.div`
  flex: 1;
  margin-top: 20px;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowTopTitle = styled.div`
  font-style: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const UserShowLeftTitle = styled.span`
  font-style: 14px;
  font-weight: 600;
`;
const UserShowRightTitle = styled.span`
  font-style: 14px;
  font-weight: 600;
`;
const UserShowInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const UserShowUsername = styled.span`
  font-weight: 600;
`;

const UserShowInfoTitle = styled.span`
  color: #444;
`;

const Cards = () => {
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const res = await fetch("https://api.pokemontcg.io/v2/cards");
    console.log(res);
    setProduct(await res.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          {product.map((item) => {
            return (
              <Card key={item.id}>
                <Cardcon>
                  <Img src={item.images} />
                </Cardcon>

                <UserShow>
                  <UserShowBottom>
                    <UserShowTopTitle>
                      <UserShowLeftTitle>
                        <b>{item.name}</b>
                      </UserShowLeftTitle>
                      <UserShowRightTitle>
                        <b>HP :</b> {item.hp}
                      </UserShowRightTitle>
                    </UserShowTopTitle>
                    <UserShowInfo>
                      <UserShowUsername>
                        <b>Attacks: </b>
                      </UserShowUsername>
                      <UserShowInfoTitle>{item.attacks}</UserShowInfoTitle>
                    </UserShowInfo>
                    <UserShowInfo>
                      <UserShowUsername>
                        <b>Abilities :</b>
                      </UserShowUsername>
                      <UserShowInfoTitle>N/a</UserShowInfoTitle>
                    </UserShowInfo>
                  </UserShowBottom>
                </UserShow>
              </Card>
            );
          })}
        </Wrapper>
      </Container>
    </div>
  );
};

export default Cards;
