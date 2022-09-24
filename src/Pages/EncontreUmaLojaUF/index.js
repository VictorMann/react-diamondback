import * as C from './styles';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TitlePage, AreaLimit } from '../../Components/Template/styles';

import api from '../../Api';

function Page() {
  const { uf } = useParams();
  const [estado, setEstado] = useState('');
  const [revendas, setRevendas] = useState([]);

  useEffect(() => {
    const fn = async () => {
      const data = await api.revendas(uf);
      setEstado(data.estado);
      setRevendas(data.revendas);
    };
    fn();

  }, []);

  return (
    <C.Container>
      <AreaLimit>
        {estado &&
          <TitlePage>
            Revendas em {estado}
            <Link to="/encontre-uma-loja" className="btn btn-primary pull-right">
              voltar ao mapa <i className="glyphicon glyphicon-triangle-right"></i>
            </Link>
          </TitlePage>
        }
        
        <div className="ctn-cartao">
          {revendas.map((item, idx) => (
            <div key={idx} className="cartao">
              <h4 className="title">{item.nome}</h4>
              <ul className="list-unstyled body">
                <li>End: {item.endereco}</li>
                <li>Cidade: {item.cidade}, {item.cep}</li>
                <li>Bairro: {item.bairro}</li>
                <li>Telefone: {item.telefone}</li>
                <li>Email: {item.email}</li>
                <li>Site: <a href={`http://${item.site}`} target="_blank">{item.site}</a></li>
              </ul>
            </div>
          ))}
        </div>
      </AreaLimit>
    </C.Container>
  )
}

export default Page;