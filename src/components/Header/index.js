import React from 'react';
import styles from './styles/header.module.css';

function Header() {
  return (
    <div className="d-flex col-12 col-sm-10 col-md-9 col-lg-5">
      <h4>
        <span className={styles.hello}>Привет!</span> Меня зовут <span className={styles.name}>Эмир.</span> Я начинающий <span className={styles.position}>веб-разработчик.</span> Изучаю <span className={styles.javascript}>JavaScript</span> и его фреймворки: <span className={styles.react}>React</span> и <span className={styles.vue}>Vue</span>. Тут несколько примеров моих работ
      </h4>
    </div>
  )
}

export default Header;