import { Link } from 'react-router-dom';
import * as C from './styles';

import { TitlePage, AreaLimit } from '../../Components/Template/styles';

function Page() {
  return (
    <C.Container>
      <AreaLimit>
        <TitlePage>Seja um revendedor Diamondback</TitlePage>
        <p>A DIAMONDBACK é uma das marcas de bicicletas mais conhecidas do mundo! São produtos para o lazer, atividades esportivas, melhoria da mobilidade e manutenção.</p>
        <p>Nossos parceiros são parte essencial em nossos negócios. E por conta disso, trabalhamos, exclusivamente com o segmento B2B, vendendo nossos produtos somente para pessoas jurídicas, mediante aprovação de cadastro.</p>
        <p>Se você possui um negócio, tem interesse em ter os produtos DIAMONDBACK em sua loja e usufruir de todas as vantagens de um Revendedor Autorizado, além de comercializar produtos importados, de ótima qualidade e exclusivos no Brasil</p>
        <p>Para dúvidas ou informações, entre em contato com nosso Depto. de Vendas pelo telefone: (11) 2824-3333 ou pelo e-mail: contato@diamondback.com.br de 2ª a 6ª feira das 8h às 18h para obter mais informações.</p>
        <p>Invista no seu negócio, venha fazer parte deste time.</p>
        <div className='ar-btn'>
          <Link to="/contato#rev" className="btn btn-sm btn-primary">Deseja fazer parte do nosso time?</Link>
        </div>
      </AreaLimit>
    </C.Container>
  )
}

export default Page;