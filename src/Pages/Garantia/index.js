import * as C from './styles';

import { TitlePage, AreaLimit } from '../../Components/Template/styles';

function Page() {
  return (
    <C.Container>
      <AreaLimit>
        <TitlePage>Termo de garantia</TitlePage>
        <div>
          <p className="bold">Conforme o CÓDIGO DE DEFESA DO CONSUMIDOR, nossos produtos possuem 90 (noventa) dias de garantia, para defeitos de fabricação, contados a partir da data de emissão da nota fiscal.</p>
          <p>Não serão cobertos pela garantia, produtos que tenham sido mal utilizados ou mal conservados.</p>
          <p>ATENÇÃO quanto ao método de conservação e limpeza do seu produto. A armazenagem e limpeza deverão ser conforme instruções do fabricante para que não haja danos e consequentemente a perda da garantia.</p>
          <p>Eis algumas dicas para aumentar a vida útil dos seus produtos:</p>
          <p><span className="bold">BICICLETAS</span>: A limpeza simples pode ser feita em casa, desde que tomados certos cuidados como a não utilização de máquinas de pressão ou jato, bem como produtos corrosivos que podem danificar a pintura. O ideal é que  a bike seja levada até um profissional de tempos em tempos para que seja feita a manutenção periódica e limpeza adequada. O tempo entre uma revisão e outra será determinado pelo tipo e período de utilização (passeio, competição, terreno com lama, acidente, etc).</p>
          <p><span className="bold">QUADROS</span>: Para os quadros Hard Tail (rígidos), tanto os modelos utilizados para passeios, quanto  para Cross Country, recomenda-se a utilização de suspensão dianteira com até 80mm de curso. Alguns modelos para competição, aceitam suspensões com 100mm.  Já no caso dos quadros Full Suspension,  recomenda-se a utilização correta da calibragem na suspensão traseira (shock) indicada pelo fabricante, para que a câmara de ar não se rompa. A utilização de peças incompatíveis implica na perda da garantia do quadro. </p>
          <p className="bold">IMPORTANTE: Pinturas e acabamentos não são cobertos pela garantia. As suspensões traseiras dos quadros Full Suspension também possuem 03 meses de garantia. Todos os fabricantes de quadros alertam quanto aos impactos sofrido pelos quadros, seja por motivo de acidente ou não. Uma vez um quadro que tenha sofrido um impacto considerável, ele deve ser trocado, pois as características originais do mesmo, que oferecem resistência e segurança, podem ter sido alteradas.</p>
          <p><span className="bold">PEÇAS DE CARBONO EM GERAL</span>: Todas as peças em fibra de carbono (guidão, suporte de guidão, canote de selim, bar end, etc), deverão ser instaladas com a ajuda de ferramenta adequada (torquímetro), obedecendo as recomendações de torque máximo do fabricante. As peças danificadas por motivo de aperto exagerado ou insuficiente, não serão cobertos pela garantia. Alguns fabricantes, não indicam o uso de canotes de carbono por pessoas muito altas ou muito pesadas.</p>
          <p><span className="bold">PNEUS</span>: Existem diversos tipos de pneus: marcas, modelos, medidas, espessuras, quantidade de trançados na malha (TPI), calibragem máxima (PSI), etc. O primeiro cuidado a ser tomado, é em relação ao tipo de pneu a ser comprado. Certifique-se de que é o modelo mais indicado para a sua modalidade. Seja passeio ou competição, sempre há um modelo mais indicado. O cuidado também deve ser tomado na instalação. Geralmente, os pneus sem arame são um pouco mais difíceis de instalar, mas todos devem ser instalados com ferramentas adequadas (espátulas, de preferência em nylon). Defeitos com a instalação inadequada ou danos causados por sapatas desreguladas no aro, não são cobertos pela garantia.</p>
          <p className="bold">IMPORTANTE: Somente os pneus novos (sem uso) serão analisados para efeito de garantia.</p>
          <p><span className="bold">VESTUÁRIO (camisa - bermuda - meia - luva - outros)</span>: Todas as roupas merecem cuidados especias, mas as de pedalar merecem mais! Elas devem ser lavadas a mão, somente com água e sabão neutro e secar a sombra, principalmente a bermuda para que o forro não seja danificado. Para uma maior durabilidade, recomenda-se não torcer, não lavar a seco e não passar a ferro.</p>
          <p><span className="bold">SELINS e CANOTES DE SELIM</span>: Os cuidados com os selins devem ser quanto aos materiais abrasivos que danificam o material, seja ele couro ou sintético. A escolha do selim deve ser feita de acordo com a modalidade. Há selins específicos para speed e para Mountain Bike. Em geral, os selins de speed são mais finos e mais leves, com trilhos em carbono ou titânio, que elimina peso, mas não devem ser utilizados para Mountain Bike (a não ser por recomendação do fabricante). O mesmo cuidado se aplica aos canotes de selim. Os canotes recomendados para Speed não devem ser utilizados em Mountain Bikes.  </p>
          <p><span className="bold">AVISO AOS CONSUMIDORES</span>: Na ocorrência de algum defeito no produto, o mesmo deverá ser encaminhado à loja onde foi adquirido, juntamente com a nota fiscal de compra, para que o lojista possa tomar as devidas providências.</p>
        </div>
      </AreaLimit>
    </C.Container>
  )
}

export default Page;