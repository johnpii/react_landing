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
              разработка под ваши запросы
            </h2>
            
            <h3>
              Занимаемся веб-разработкой
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
        <div className="service-block" draggable="false">
          <h1 style={{ fontSize: "52px" }}>УСЛУГИ</h1>
          <p style={{ fontSize: "27px" }}>Coздаём
            <span style={{ color: "#4824ff" }}> разработки 
              </span> по следующим направлениям: </p>

          <div style={{ display: "flex" }}>
            <p className="tag"><p className="tag-icon"/>
            Рекламные лендинги</p>
            <p className="tag"><p className="tag-icon"/>
            Веб-порталы</p>
            <p className="tag"><p className="tag-icon"/>
            Веб-приложения</p>
            <p className="tag"><p className="tag-icon"/>
            Мониторинг</p>
          </div>
          <div style={{ display: "flex", marginTop: "16px" }}>
            <p className="tag"><p className="tag-icon"/>
            Работа с базами данных</p>
            <p className="tag"><p className="tag-icon"/>
            Доработка ваших решений</p>
          </div>

          <p style={{ fontSize: "27px" }}>Открыты для обсуждения
            создания дизайна и по другим направлениям. <br/>
            Детальней готовы обсудить при
            <span style={{ color: "#4824ff", cursor: "pointer" }}
            onClick={handleOpenModal}> личной переписке</span> .</p>
        </div>
    </div>
  );
}

export default App;
