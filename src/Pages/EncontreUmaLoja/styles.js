import styled from "styled-components";

export const Container = styled.div`
& > div:first-child {
  position: relative;
}

.ctn-mapa {
  text-align: center;
  padding-bottom: 20px;
}
.cx-mapa {
  position: relative;
  display: inline-block;
}
.mapa {
  position: relative;
  opacity: .4;
  z-index: 1;
}
.mapa-fake,
.mapa-img-estado-hover {
  position: relative;
  background: url("/assets/imgs/mapa/mapa.png") no-repeat 0 0;
  background-size: contain;
}
.mapa-img-estado-hover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.cnt-legenda {
  position: absolute;
  right: 0;
  bottom: 10px;
}
.legenda {
  display: inline-block;
  width: 100%;
  max-width: 220px;
  box-shadow: 3px 3px 0 #888;
}
.leg {
  display: inline-block;
  width: .9em;
  height: .9em;
  background: transparent;
  vertical-align: middle;
  margin-right: .35em;
}
.leg-default {
  background: #848484;
}
.leg-orange {
  background: #d55f48;
}
.ctn-mini-estado {
  position: absolute;
  left: 50px;
  bottom: 100px;
  text-align: center;
}
.ctn-mini-estado .rev {
  display: block;
  color: red;
}
`;