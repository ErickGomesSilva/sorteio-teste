import React, { Component} from 'react';
import FileList from "../FileList/index";
import api from "../../service/api";
import './styles.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class Sorteio extends Component {
  
  state = {
    uploadedFiles: [],      
    openModal:false,
    ganhador:"",
    coment:"",
  };  

  async componentDidMount() {
    const response = await api.get("posts");
    this.setState({
      uploadedFiles: response.data.map(file => ({
        id: file._id,
        name: file.name,
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    });    
  } 


  sortear = qtdComentarios => {         
    const pessoas = [];  
    for (let index = 0; index < qtdComentarios; index++) {
        pessoas[index] = {'Nome':'Pessoa 0'+ index, 'Comentario':'Eu vou ganhar'};      
    }    
    var RandomNumber = Math.floor(Math.random() * pessoas.length) + 0 ;    

    this.setGanhador(pessoas[RandomNumber].Nome, pessoas[RandomNumber].Comentario);
    this.onOpenModal();    
  };

  setGanhador=(vencedor, comentario)=>{
    this.setState({ganhador : vencedor,
      coment:comentario
    })  
}

  
  onOpenModal=()=>{
      this.setState({openModal : true})  
  }

  onCloseModal = ()=>{
    this.setState({openModal : false})
  }


  componentWillUnmount() {
    this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
  }


render(){  
  const { uploadedFiles } = this.state;    
      return (
        <>         
          <div className="info-custom">
             <h2 >Olá Erick</h2>
             <h4>Agora clique na foto para iniciar o sorteio</h4>            
            <FileList files={uploadedFiles} sortear={this.sortear}/>
          </div>

          <Modal show={this.state.openModal} onHide={this.onCloseModal}>
            <Modal.Header>
              <Modal.Title>Resultado do Sorteio</Modal.Title>
            </Modal.Header>
            <Modal.Body>Quem venceu foi a {this.state.ganhador} com o comentário {this.state.coment}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.onCloseModal}>
                Fechar
              </Button>              
            </Modal.Footer>
          </Modal>
        </>  
      );
  }
}
export default Sorteio;


