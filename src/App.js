import React, {useState} from "react";
import ModalWindow from './ModalWindow';
import AllGallery from "./AllGallery";
import Adds from "./Adds";
import WebApps from "./WebApps";
import WebPortals from "./WebPortals";
import DBs from "./DBs";
import Finishing from "./Finishing";
import Monitoring from "./Monitoring";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

const renderComponent = () => {
  switch (selectedCategory) {
    case 'All':
      return <AllGallery />;
    case 'Adds':
      return <Adds />;
    case 'WebApps':
      return <WebApps />;
    case 'WebPortals':
      return <WebPortals />;
    case 'DBs':
      return <DBs />;
    case 'Finishing':
      return <Finishing />;
    case 'Monitoring':
      return <Monitoring />;
    default:
      return <AllGallery />;
  }
};
  
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
        <div className="portfolio-block">
          <div className="first-block">
            <h1 className="main-title">Портфолио</h1>
            <div style={{ position: "absolute", marginLeft: "-660px" }}>
              <p className="gradient-part-one"></p>
              <p className="title-border">Портф</p>
            </div>
            <div style={{ position: "absolute", marginLeft: "620px" }}>
              <p className="gradient-part-two"></p>
              <p className="title-border">Фолио</p>
            </div>
            <img className="array-icon" src='./icons/array.png' draggable="false" />
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <p 
              className={`tag ${selectedCategory === 'All' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              Все работы
            </p>
            <p 
              className={`tag ${selectedCategory === 'Adds' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('Adds')}
            >
              Рекламные лендинги
            </p>
            <p 
              className={`tag ${selectedCategory === 'WebApps' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('WebApps')}
            >
              Веб-приложения
            </p>
            <p 
              className={`tag ${selectedCategory === 'WebPortals' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('WebPortals')}
            >
              Веб-порталы
            </p>
            <p 
              className={`tag ${selectedCategory === 'DBs' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('DBs')}
            >
              Работа с базами данных
            </p>
            <p 
              className={`tag ${selectedCategory === 'Finishing' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('Finishing')}
            >
              Доработка ваших решений
            </p>
            <p 
              className={`tag ${selectedCategory === 'Monitoring' ? 'selected' : ''}`}
              onClick={() => setSelectedCategory('Monitoring')}
            >
              Мониторинг
            </p>
          </div>

          <div className="content" style={{ marginLeft: "-5vw", marginRight: "-5vw" }}>
            {renderComponent()}
          </div>
        </div>
    </div>
  );
}

export default App;
