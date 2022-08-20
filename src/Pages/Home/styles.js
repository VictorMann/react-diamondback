import styled from "styled-components";

export const Container = styled.div`

.carrosel-main:hover .slick-arrow {
  opacity: 1;
}
.carrosel-main:hover .slick-prev {
  left: 2%;
}
.carrosel-main:hover .slick-next {
  right: 2%;
}
.carrosel-main img {
  max-width: 100%;
  // width: 100%;
}
.my-slide {
  display: flex !important;
  justify-content: center;
}
.slick-arrow {
  position: absolute;
  top: 50%;
  display: inline-block;
  text-align: center;
  font-size: 4em;
  color: rgba(0, 0, 0, .5);
  background: transparent;
  border: none;
  transform: translateY(-50%);
  opacity: 0;
  z-index: 1;

  transition: left .3s, right .3s, opacity .3s;
}
.slick-arrow:focus,
.slick-arrow:active {
  outline: none;
}
.slick-prev {
  left: -2%;
}
.slick-next {
  right: -2%;
}
.slick-dots {
  list-style: none;
  position: absolute;
  bottom: 1%;
  width: 100%;
  text-align: center;
  padding: 0;
  margin: 0;
}
.slick-dots li {
  color: transparent;
  display: inline-block;
  width: 1em;
  height: 1em;
  background: rgba(0, 0, 0, .6);
  margin-right: 5px;
  border-radius: 50%;

  button {
    width: inherit;
    height: inherit;
    opacity: 0;
  }
}
.slick-dots li.slick-active {
  background: #738696;
}
`;

export const FakeCarrossel = styled.div`
width: 100%;
height: 350px;
background-color: #ccc;
`;