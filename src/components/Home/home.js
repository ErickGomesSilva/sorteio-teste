import React from 'react';
import './styles.css'

function Home() {
  return (
    <>
        <div className="info-custom">
              <div className="info-custom-header">
                <div class="passos-container">
                    <ul class="progressbar">
                        <li class="active">Encontre seu Perfil</li>
                        <li>Escolha seu Post</li>
                        <li>Faça o Sorteio</li>                        
                    </ul>                        
                 </div> 
              </div>
              <div className="info-custom-body">                  
                  <div className="form-container">
                    <div className="customSpam">
                        <h1>Qual o seu Instagram</h1>
                        <p>
                        Informe pra gente qual é o seu Instagram que vamos encontrar o post do seu sorteio 😉
                        </p>
                     </div>   
                      <form>
                        <div className="form-group custom-cell">
                          <label htmlFor="exampleInputEmail1">Seu Perfil do Instagram</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" value="gmail.com" />                          
                        </div>                      
                        <div className="btn-container-home">
                          <button type="submit" id="continuar" className="btn btn-primary">Continuar</button>
                          <button type="submit" id="facebook"className="btn btn-primary">Login com Facebook</button>
                        </div>
                      </form>
                  </div>
              </div>
        </div>
    </>  
  );
}

export default Home;


