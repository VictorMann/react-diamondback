import { useSelector, useDispatch } from 'react-redux';
import { setName, setAge } from '../../redux/reducers/userReducer';

import * as C from './styles';

import "slick-carousel/slick/slick.css";

import Slider from 'react-slick';
import { useEffect, useState } from 'react';

import api from '../../Api';

function Page() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [carrossel, setCarrossel] = useState([]);
  const [fakeCarrossel, setFakeCarrossel] = useState(true);

  useEffect(() => {
    const fn = async () => {
      let data = await api.carrossel();
      setCarrossel(data);
      setFakeCarrossel(false);
    };
    fn();
  }, []);

  useEffect(() => {
    [].forEach.call(document.querySelectorAll('.carrosel-main .slick-arrow'), (item, index) => {
      let txt = '';
      if (index === 0) txt = '<span class="glyphicon glyphicon-chevron-left"></span>';
      else txt = '<span class="glyphicon glyphicon-chevron-right"></span>';
      item.innerHTML = txt;
    });
  }, [carrossel]);

  const settings = {
    className: "carrosel-main",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const handleNameInput = e => {
    dispatch( setName(e.target.value) );
  };

  return (
    <C.Container>
      {!fakeCarrossel && carrossel.length > 0 &&
        <Slider {...settings}>
          {carrossel.map(item => (
            <div key={item.id} className="my-slide">
              <img src={item.largeURL} alt='' />
            </div>
          ))}
        </Slider>
      }
      {fakeCarrossel &&
        <C.FakeCarrossel />
      }

      <h3>
        {user.name} idade: {user.age}
      </h3>
      <div>
        <input
          type="text" 
          value={user.name}
          onChange={handleNameInput} />
      </div>

    </C.Container>
  )
}

export default Page;