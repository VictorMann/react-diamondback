import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import * as C from './styles';
import "slick-carousel/slick/slick.css";

import api from '../../Api';
import { setCarr } from '../../redux/reducers/carrosselReducer';

function Page() {
  const dispatch = useDispatch();
  const cat = useSelector(state => state.cat);
  const carr = useSelector(state => state.carr);
  const [carrossel, setCarrossel] = useState([]);
  const [vitrine, setVitrine] = useState([]);
  const [fakeCarrossel, setFakeCarrossel] = useState(true);

  useEffect(() => {
    const fn = async () => {
      let data = [];
      if (!carr.length) {
        data = await api.carrossel();
        dispatch(setCarr(data));
      }
      setCarrossel(carr);
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

  useEffect(() => {
    const fn = async () => {
      let data = await api.vitrine();
      setVitrine(data);
    };
    fn();
  }, []);

  const settings = {
    className: "carrosel-main",
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
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
      {cat.list.length > 0 &&
        <ul className='category-list'>
          {cat.list.map(item => (
            <li key={item.id}>
              <Link to={`/${item.slug}`}>{item.nome}</Link>
            </li>
          ))}
        </ul>
      }

      {vitrine.length > 0 &&
        <section className="ctn-h-p">
          {vitrine.map(item => (
            <figure key={item.slug} className="gprod">
              <div className="ctn-img">
                <Link to={`/p/${item.slug}`}>
                    <img src={item.image} alt={item.titulo} />
                </Link>
              </div>
              <figcaption>
                <Link to={`/p/${item.slug}`}>{item.titulo}</Link>
              </figcaption>
            </figure>
          ))}
        </section>
      }

    </C.Container>
  )
}

export default Page;