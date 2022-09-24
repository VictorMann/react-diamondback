import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FsLightbox from 'fslightbox-react';
import * as C from './styles';

import { TitlePage, AreaLimit } from '../../Components/Template/styles';

import api from '../../Api';
import { createElement } from '../../Helpers';

function Page() {
  const { slug } = useParams();
  const [produto, setProduto] = useState('');
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 0
  });

  useEffect(() => {
    setProduto('');
    const fn = async () => {
      const data = await api.getProduct(slug);
      setProduto(data);
    };
    fn();
  }, [slug]);

  const openLightboxOnSlide = number => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  };

  return (
    <>

      {produto &&
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={produto.images}
          type="image"
          sourceIndex={lightboxController.slide} />
      }
    
      <C.Container>
        <AreaLimit>
          {produto &&
            <ul className="breadcrumb">
              <li><a href={`/${produto.categoria?.slug}`}>{produto.categoria?.nome}</a></li>
              <li>{produto.titulo}</li>
            </ul>
          }

          <div className="pr-header">
            <div className="pr-img">
              {produto &&
                <img 
                  src={produto.images[0]}
                  onClick={e => openLightboxOnSlide(0)} />
              }
            </div>
            <div className="pr-title">
              {produto &&
                <h1 className="title">{produto.titulo} [{+lightboxController.toggler}] <small className="cod">cod.: {produto.codigo}</small></h1>
              }
            </div>
          </div>

          {produto && produto.images.length > 1 &&
            <>
              <ul className="pr-thumbnail">
                {produto.images.map((url, idx) => (
                  <li 
                    key={idx} 
                    onClick={e => openLightboxOnSlide(idx)}>
                      
                      <img src={url} />
                  </li>
                ))}
              </ul>
            </>
          }

          <div className='pr-description'>
            <h3 className='title'><span>Descrição</span></h3>
            
            {produto && 
              /* CRIANDO ELEMENTO POR MARCAÇÃO HTML */
              createElement('div', {className: 'description'}, [produto.descricao, 'Sem descrição'], true)
            }
          </div>

          <div className='pr-rel'>
            <h4 className="header-rel">Relacionados</h4>
            {produto &&
              <ul>
                {produto.relacionados.map(item => (
                  <li key={item.slug}>
                    <Link to={`/p/${item.slug}`} title={item.titulo}>
                      <div className="pr-r-img">
                        <figure>
                          <img src={item.image} alt={item.titulo} />
                        </figure>
                        <p className="title">{item.titulo}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            }
          </div>

        </AreaLimit>
      </C.Container>
    </>
  )
}

export default Page;