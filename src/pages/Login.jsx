import styles from './Login.module.css'
import login from '../assets/forza.png'

function Cadastro() {
  return (
    <>
      <main>
        <div id={styles.img}></div>
        <div id={styles.login}>
          <section>
            <img src={login} alt="" />
            <h2>Fazer Login:</h2>
            <input type="text" placeholder='Usuario' />
            <input type="password" placeholder='Senha' />
            <button>Entrar</button>
          </section>
        </div>
      </main>
    </>
  )
}

export default Cadastro
