import styles from './Cadastro.module.css'


function Cadastro() {
  return (
    <>
      <div className={styles.containerprincipal}> 
      <div className={styles.cardlogin}>
        <p id={styles.nome}>Login</p>
        <input type="text" placeholder='Nome' />
        <input type="email" placeholder='Email' />
        <input type="password" placeholder='Senha' />
        <input type="password" placeholder='Confirmar Senha' />
        <button>Entrar</button>
      </div>
    </div>
    </>
  )
}

export default Cadastro
