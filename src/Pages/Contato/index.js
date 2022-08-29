import * as C from './styles';

import { TitlePage, AreaLimit } from '../../Components/Template/styles';
import { useState } from 'react';

import api from '../../Api';

function Page() {
  const [name, setName] = useState("");
  const [telefone, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);

  const reset = () => {
    setName('');
    setTelefono('');
    setEmail('');
    setComment('');
  };
  
  const handleSubmit = async e => {
    e.preventDefault();
    let data = await api.contatoPost({name, telefone, email, comment});
    if (data.status) {
      setSuccess(true);
      reset();
    }
  };

  return (
    <C.Container>
      <AreaLimit>

        {success &&
          <div className="alert alert-success">
            Dados enviados com sucesso!
          </div>
        }

        <TitlePage>Contato</TitlePage>
        <form className="form-contato" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input 
              name="name" 
              id="name" 
              className="form-control" 
              value={name} 
              onChange={e => setName(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">telefone</label>
            <input 
              name="phone" 
              id="phone" 
              className="form-control" 
              value={telefone} 
              onChange={e => setTelefono(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              className="form-control" 
              value={email} 
              onChange={e => setEmail(e.target.value)}
              required />
          </div>
          <div className="form-group ctn-comment">
            <label htmlFor="comment">Mensagem</label>
            <textarea 
              name="comment" 
              id="comment" 
              className="form-control" 
              value={comment}
              onChange={e => setComment(e.target.value)}
              required></textarea>
            {/* <div className="inf">Não é necessário alterar este campo</div> */}
          </div>
          <input type="submit" value="Enviar" className="btn btn-success" />
        </form>

      </AreaLimit>
    </C.Container>
  )
}

export default Page;