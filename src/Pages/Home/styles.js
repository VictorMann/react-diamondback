import styled from "styled-components";

export const Container = styled.div`
img {
  max-width: 100%;
}
.carrosel-main {
  overflow: hidden;
}
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

.category-list {
  display: flex;
  list-type: none;
  padding: 0;
  margin: 0 auto;
  // max-width: 1200px;
  
  li { 
    display: flex;
    flex: 1;
    margin: .5em;
    margin-left: 0;

    &:first-child {
      margin-left: .5em;
    }
    
    a {
      text-transform: uppercase;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-family: 'Fjalla One', sans-serif;
      color: #738696;
      background: #2a2f33;
      font-size: 2em;
      padding: 1.2em 0;
      transition: color .2s ease-in-out;

      &:hover {
        color: #ee4624;
      }
    }
  }
}

.ctn-h-p {
  display: flex;
  flex-wrap: wrap;
  background: #DDD;
  padding-bottom: 5px;
}
.gprod {
  position: relative;
  width: calc(33.33333% - 5px);
  margin-left: 5px;
  margin-top: 5px;
  background: white;
  font: 700 1.2em 'Mada', sans-serif;
  color: #333;
  text-align: center;
}
.gprod a {
  color: inherit;
  text-transform: uppercase;
}

.ctn-img {
  padding: 20px;
  padding-bottom: 3em;
}
.gprod figcaption {
  position: absolute;
  width: 100%;
  bottom: .5em;
}
`;

export const FakeCarrossel = styled.div`
width: 100%;
height: 350px;
background-color: #ccc;
`;