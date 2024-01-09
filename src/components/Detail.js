import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    db.collection("Movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
        }
      });
  }, []);
  console.log(movie);
  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.BackgroundImg} />
          </Background>
          <ImageTitle>
            <img src={movie.CardImg} />
          </ImageTitle>
          <Controls>
            <PlayBtn>
              <img src="/images/play-icon-black.png" />
              <span>PLAY</span>
            </PlayBtn>
            <TrailerBtn>
              <img src="/images/play-icon-white.png" />
              <span>Trailer</span>
            </TrailerBtn>
            <AddBtn>
              <span>+</span>
            </AddBtn>
            <GroupMatchBtn>
              <img src="/images/group-icon.png" />
            </GroupMatchBtn>
          </Controls>
          <SubTitle>{movie.Genres}</SubTitle>
          <Description>{movie.Description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  min-width: 200px;
  width: 35vw;
  margin-top: 60px;
  margin-bottom: 30px;
  border: 3px solid rgba(249, 249, 249, 0.3);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition all: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayBtn = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.5px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
`;

const AddBtn = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.7);
  border: white;
  cursor: pointer;
  span {
    font-size: 30px;
    color: white;
  }
`;

const GroupMatchBtn = styled(AddBtn)`
  background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height:1.4;
  font-size:20px;
  margin-top:16px;
  color: rgb(249,249,249)
  max-width:760px;
`;
