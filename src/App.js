import "./styles.css";
import img from "../img/imgg.png";
import img1 from "../img/img-2.jpg";
import img2 from "../img/img-3.jpg";
import img3 from "../img/img-4.jpg";
import img4 from "../img/img-5.jpg";

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="logo">ROBO.SCHOOL</div>
          <nav>
            <a href="#">О школе</a>
            <a href="#">Тренеры</a>
            <a href="#">Стоимость</a>
          </nav>
          <div className="phone">+7 800 000 11 22</div>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>ROBO SCHOOL</h1>
            <p>
              Курсы повышения квалификации по робототехнике <br /> для педагогов
              начальной школы
            </p>
            <a href="#" className="btn">
              Записаться на курс
            </a>
          </div>
          <div className="hero-image">
            <img src={img} alt="foto" />
          </div>
        </section>
      </main>

      <section className="info-section">
        <div className="info-container">
          <h2>
            <b> Robo School</b> — учреждение для формирования кадрового <br />{" "}
            педагогического резерва в сфере робототехники <br /> и
            программирования
          </h2>
          <div className="info-stats">
            <div className="stat">
              <h3>10</h3>
              <p>УМК по различным направлениям по робототехнике</p>
            </div>
            <div className="stat">
              <h3>20</h3>
              <p>Школ, в которых запущена робототехника</p>
            </div>
            <div className="stat">
              <h3>100</h3>
              <p>Педагогов, прошедших курсы повышения квалификации</p>
            </div>
            <div className="stat">
              <h3>10 000</h3>
              <p>Обученных детей на базе собственных центров</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-2">
        <h2 className="title">Что вы получите после курса</h2>
        <div className="content">
          <div className="item">
            <h3>Удостоверение</h3>
            <p>
              Данное право преподавателю для детей 6-12 лет в образовательных
              учреждениях.
            </p>
          </div>
          <div className="item">
            <h3>Знания</h3>
            <p>
              На основе разработки учебно-методических комплектов по
              робототехнике и программированию.
            </p>
          </div>
          <div className="item">
            <h3>Практику</h3>
            <span className="note">При наличии свободных мест</span>
            <p>
              Возможность пройти практику по преподаванию робототехники на базе
              R:ED LAB (в очной или онлайн форме).
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className="teacher">
        <h2 className="title-2">Профессиональные тренеры</h2>
        <div className="content-2">
          <div className="item-2">
            <img src={img1} alt="" />
            <h3>Ирина Лайм</h3>
            <p>преподаватель по робототехнике</p>
            <span className="not-1">Подробнее</span>
          </div>
          <div className="item-2">
            <img src={img2} alt="" />
            <h3>Марина Орлова</h3>
            <p>преподаватель по робототехнике.</p>
            <span className="not-1">Подробнее</span>
          </div>
          <div className="item-2">
            <img src={img3} alt="" />
            <h3>Максим Петров</h3>

            <p>преподаватель по программированию</p>
            <span className="not-1">Подробнее</span>
          </div>
          <div className="item-2">
            <img src={img4} alt="" />
            <h3>Константин Назаров</h3>

            <p>преподаватель по робототехнике</p>
            <span className="not-1">Подробнее</span>
          </div>
        </div>
      </div>

      <div className="card-container">
        <div className="box">
          <div className="card_heading">
            <h1>– PRO –</h1>
          </div>
          <div className="card_amout">
            <h1>20.000 ₽</h1>
          </div>
          <div className="card_text">
            <p>УМК по робототетхнике и программированию</p>
          </div>
          <div className="card_submit">
            <button>Оставить заявку</button>
          </div>
        </div>

        <div className="box">
          <div className="card_heading">
            <h1>– PRO –</h1>
          </div>
          <div className="card_amout">
            <h1>15.000 ₽</h1>
          </div>
          <div className="card_text">
            <p>УМК по робототетхнике </p> <br />
          </div>
          <div className="card_submit">
            <button>Оставить заявку</button>
          </div>
        </div>

        <div className="box">
          <div className="card_heading">
            <h1>– PRO –</h1>
          </div>
          <div className="card_amout">
            <h1>10.000 ₽</h1>
          </div>
          <div className="card_text">
            <p>УМК по программированию</p>
            <br />
          </div>
          <div className="card_submit">
            <button>Оставить заявку</button>
          </div>
        </div>
      </div>
    </div>
  );
}
