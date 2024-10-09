function App() {
  return (
    <>
      <header className="header">
        <div className="left-side-header">
          <img className="bars" src="bars.png" alt="bars" />
          <img className="nameIcon" src="headerIconName.png" alt="name" />
        </div>
        <div className="right-side-header flex">
          <div className="call-center">
            <img className="call-center-img" src="call-center.png" alt="call" />
            <div className="flex divaided">
              <div className="bottom-call-part">
                <p>1242</p>
                <span>
                  my.gov.uz общие <br /> вопросы (24/7)
                </span>
              </div>
              <div className="bottom-call-part">
                <p>1148</p>
                <span>
                  предложения и <br />
                  жалобы{" "}
                </span>
              </div>
            </div>
          </div>
          <span className="proverka">
            Проверка <br /> состояния заявки{" "}
          </span>
          <img className="ciren" src="ciren.png" alt="ciren" />
          <div className="leng-container">
            <span>RU</span>
            <img src="drop.png" alt="drop" />
          </div>
          <img className="eye" src="eye.png" alt="eye" />
        </div>
      </header>
      <main className="main">
        <div className="color-div">
          <p className="color-div-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="bottom-way">
            <p>Невідомо що</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="chevron"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>Услуги</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="chevron"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
            <p>Таможня</p>
          </div>
        </div>
        <div className="error-div">
          <div className="flex top-error">
            <img
              src="attentionImg.png"
              className="attention-icon"
              alt="attention"
            />
            <p className="error-message">
              Ошибка перевода! Ваш плтеж таможених услуг біг отключен щось там
              из за отсутствия Таможеной декларациї республики Узбекистан.{" "}
              <br />
              Пожалуста прорерьте вашу Заявку на декларатии и одобрениє.
              Декларационной комиссии в разремер 1.900.000 сум.
            </p>
          </div>
          <div className="btn">Проверка оплати</div>
        </div>
      </main>
    </>
  );
}

export default App;
