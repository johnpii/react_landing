import React, {useState, useEffect, useRef} from "react";
import ModalWindow from './ModalWindow/ModalWindow';
import AllGallery from "./AllGallery";
import Adds from "./Adds/Adds";
import WebApps from "./WebApps";
import WebPortals from "./WebPortals";
import DBs from "./DBs";
import Finishing from "./Finishing";
import Monitoring from "./Monitoring";
import Review from "./Review";
import Theme from "./Theme";
import ModalMenu from "./ModalMenu/ModalMenu";
import Resize from "./Resize";

function App() {
  const isPortrait = Resize();
  const { theme, setTheme } = Theme();
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const toggleTheme = () => {
    if (isDarkTheme) {
      lightTheme();
    } else {
      darkTheme();
    }
    
    setIsDarkTheme(!isDarkTheme);
  };

  const lightTheme = () => {
    setTheme('light');
  };

  const darkTheme = () => {
    setTheme('dark');
  };

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

  const [showModal, setShowModal] = useState(false);
  const [showModalMenu, setShowModalMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleOpenModalMenu = () => {
    setShowModalMenu(true)
  }

  const handleCloseModalMenu = () => {
    setShowModalMenu(false)
  }

  const containerRef = useRef(null);
  const reviewWidthRef = useRef(0);

  const reviews = [
    <Review 
      key={1} 
      name="Константин М." 
      link="https://t.me"
      text="Текст отзыва, оставленный который можно открыть нажав на кнопку в правом верхнем углу этого блока."
    />,
    <Review 
      key={2} 
      name="Максим Л." 
      link="https://t.me"
      text="Отзыв оставленный Максимом" 
    />,
    <Review 
      key={3} 
      name="Вячеслав К." 
      link="https://t.me"
      text="Отзыв оставленный Вячеславом" 
    />
  ];

  const visibleReviews = 3;

  const handleScroll = () => {
    const box = containerRef.current;
    const width = reviewWidthRef.current * visibleReviews;

    if (box.scrollLeft <= 0) {
      box.style.scrollBehavior = 'auto';
      box.scrollLeft = box.scrollWidth - 2 * width;
      box.style.scrollBehavior = 'smooth';
    }

    if (box.scrollLeft >= box.scrollWidth - width) {
      box.style.scrollBehavior = 'auto';
      box.scrollLeft = width;
      box.style.scrollBehavior = 'smooth';
    }
  };

  const btnPrevReview = () => {
    const box = containerRef.current;
    box.scrollLeft -= reviewWidthRef.current;
    };

  const btnNextReview = () => {
    const box = containerRef.current;
    box.scrollLeft += reviewWidthRef.current;
  };

  useEffect(() => {
    const box = containerRef.current;
    const firstReview = box.querySelector('.review-card');
    reviewWidthRef.current = firstReview.clientWidth;
    const width = reviewWidthRef.current * visibleReviews;

    box.scrollLeft = (box.scrollWidth - width) / 2;
    box.addEventListener('scroll', handleScroll);

    return () => {
      box.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [scroll, setScroll] = useState(0);

  const scrollUp = () => {
    setScroll(window.scrollY);
  };

  const upButton = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
  }, []);

  const toBlock = (height) => {
    window.scrollTo({ top: height, left: 0, behavior: 'smooth' });
  };

  return (
    <div>
        <header>
          {isPortrait ? (
            <div className="navigation">
              <div className="menu">
                <a onClick={upButton}>О нас</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700">Услуги</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1235">Наши работы</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1950">Отзывы</a>
                <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="2550">Гарантии</a>
              </div>

              <div className="header-buttons">
                <button onClick={handleOpenModal} className="btn">Связаться</button>

                <a href="https://t.me" target="_blank" className={theme === 'light' ? "icon telegram light" : "icon telegram dark"}/>
                <a href="https://wa.me" target="_blank" className={theme === 'light' ? "icon whatsapp light" : "icon whatsapp dark"}/>

                <div className="switch" onClick={toggleTheme}>
                  <div className={theme === 'light' ? "theme light" 
                                                    : "theme dark"}
                    style={{ transform: isDarkTheme ? 'translateX(39px)' 
                                                    : 'translateX(0)' }}></div>
                </div>
              </div>
            </div> )
          : ( 
            <div className="navigation">
              <div className="switch switch-mobile" onClick={toggleTheme}>
                  <div className={theme === 'light' ? "theme theme-mobile light" 
                                                    : "theme theme-mobile dark"}
                    style={{ transform: isDarkTheme ? 'translateX(8.6vw)' 
                                                    : 'translateX(0)' }}></div>
              </div>

              <div className="header-buttons-mobile">
                <a href="https://t.me" target="_blank" className={theme === 'light' ? "icon icon-mobile telegram light" 
                                                                                    : "icon icon-mobile telegram dark"}/>
                <a href="https://wa.me" target="_blank" className={theme === 'light' ? "icon icon-mobile whatsapp light" 
                                                                                    : "icon icon-mobile whatsapp dark"}/>
                <a onClick={handleOpenModalMenu} className={theme === 'light' ? "icon-menu light" 
                                                : "icon-menu dark"}/>                                                                    
              </div>
            </div>
          )}
        </header>

        <ModalMenu show={showModalMenu} onClose={handleCloseModalMenu}>
          <a onClick={upButton}>О нас</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="700">Услуги</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1235">Наши работы</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="1950">Отзывы</a>
          <a onClick={(e) => toBlock(e.target.getAttribute('height'))} height="2550">Гарантии</a>
        </ModalMenu>

        <ModalWindow show={showModal} onClose={handleCloseModal}>
          <h2 style={{color: "#4824ff", fontSize: isPortrait ? "40px" : '15vw',
                                          marginTop: isPortrait ? '' : '0'
          }}>Контакты</h2>
          {isPortrait ? (
            <p style={{fontSize: "22px"}}>Вы можете связаться с нами в Telegram <br/> или WhatsApp 👇</p>
            ) : (
            <p style={{fontSize: "33px"}}>Вы можете связаться с нами в Telegram <br/> или WhatsApp 👇</p>)
        }
        </ModalWindow>

        {isPortrait ? ( 
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
                className="image-layer"
                src="./images/web.png" 
                draggable="false" 
              />
            </div>
          </div>
        ) : (
          <div className="welcome-block mobile">
            <div className="main-image-box mobile">
              <img 
                className="image-layer mobile"
                src="./images/web.png" 
                draggable="false" 
              />
            </div>

            <div className="first-block mobile">
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

              <button onClick={handleOpenModal} className="btn mobile">Связаться</button>
            </div>
          </div>
        )}
        <div className="service-block" draggable="false">
          <h1 style={{ fontSize: "52px" }}>УСЛУГИ</h1>
          <p style={{ fontSize: "27px" }}>Coздаём
            <span style={{ color: "#4824ff" }}> разработки 
              </span> по следующим направлениям: </p>

          <div style={{ display: "flex" }}>
            <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
            Рекламные лендинги</p>
            <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
            Веб-порталы</p>
            <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
            Веб-приложения</p>
            <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
            Мониторинг</p>
          </div>
          <div style={{ display: "flex", marginTop: "16px" }}>
            <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
            Работа с базами данных</p>
            <p className="tag"><p className={theme === 'light' ? "tag-icon icon-dark" : "tag-icon icon-light"}/>
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
            <img className="array-icon" src='./icons/Array.png' draggable="false" />
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

        <div className="review-block">
          <h1>ОТЗЫВЫ</h1>
          <p className="description">
            Отзывы клиентов, написанные со своих
            <span className="selecting"> личных аккаунтов </span>
            Телеграм. Всё проверено! <br /> Любой отзыв
            можно <span className="selecting"> открыть </span> в
            Телеграм и <span className="selecting"> спросить </span> об
            впечатлениях работы с нами <br />
            у создателя отзыва лично.
          </p>

          <div className="review-carousel">
            <div className="review-container" ref={containerRef}>
              {reviews.slice(-visibleReviews)}
              {reviews}
              {reviews.slice(0, visibleReviews)}
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <p className="next-button"
            style={{ transform: "rotate(180deg)" }}>
            <p className="array-next-icon" onClick={btnPrevReview}/></p>
            <p className="next-button">
            <p className="array-next-icon" onClick={btnNextReview}/></p>
          </div>
        </div>

        <div className="guarantees-block">
          <h1 style={{ fontSize: "52px", paddingBottom: "20px" }}>
            ГАРАНТИИ
          </h1>
          
          <ol className="guarantees-points">
            <li className="point">
              Оплату принимаем через платёжную систему
              <span style={{ color: "#4824ff" }}> Название *</span>,
              которая контролирует <br/>безопасность денежных
              переводов.
            </li>
            <li className="point">
              Убедиться в нашей ответственности и профессионализме
              можно <span style={{ color: "#4824ff" }}> написав
              клиентам</span>, <br/> оставившим отзывы
              <span style={{ color: "#4824ff" }}> лично </span>
              в любой момент (отзывы клиентов выше).
            </li>
            <li className="point">
              Все <span style={{ color: "#4824ff" }}> авторские
              права </span>на работу переходят заказчику после
              выполнения заказа.
            </li>
            <li className="point">
              В своих работах используем материалы строго
              <span style={{ color: "#4824ff" }}> разрешенные
              для личного<br/> и коммерческого
              использования</span>.
            </li>
          </ol>
        </div>

        <div className="footer">© Web Point</div>

        <button 
          className={scroll < 1960 ? "" : "btn-up"}
          onClick={upButton}>
        </button>
    </div>
  );
}

export default App;
