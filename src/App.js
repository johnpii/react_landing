import React, {useState} from "react";
import ModalWindow from './ModalWindow';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <div className="App">
        <header>
            <div className="menu">
              <a>О нас</a>
              <a>Услуги</a>
              <a>Наши клиенты</a>
              <a>Отзывы</a>
              <a>Гарантии</a>
            </div>

            <button onClick={handleOpenModal} className="btn">Связаться</button>
            <ModalWindow show={showModal} onClose={handleCloseModal}>
                <h2 style={{color: "#4824ff", fontSize: "40px"}}>Контакты</h2>
                <p style={{fontSize: "22px"}}>Вы можете связаться с нами в Telegram <br/> или WhatsApp 👇</p>
            </ModalWindow>

            <a href="https://t.me" target="_blank" className="icon telegram"/>
            <a href="https://wa.me" target="_blank" className="icon whatsapp"/>

            <div className="switch">
              <div className="theme light"></div>
            </div>
        </header>

        <div className="welcome-block">
          <div className="first-block">
            <h1>Веб-сдудия <span className="title">Web Point</span></h1>
            
            <h2 style={{ marginBottom: "7%", marginTop: "7%" }}>
              Создаём <span style={{ color: "#4824ff" }}>продаваемый</span>
              <br />
              и <span style={{ color: "#4824ff" }}>уникальный</span>
              <br />
              дизайн под ваши запросы
            </h2>
            
            <h3>
              Занимаемся веб-дизайном
              <br />
              на протяжении <span style={{ color: "#4824ff" }}>9 лет</span>
            </h3>
          </div>

          <div className="main-image-box">
            <img 
              src="./images/web.png" 
              draggable="false" 
            />
          </div>
        </div>
    </div>
  );
}

export default App;
