import styles from './Listagem.module.css'

function Listagem() {
  return (
    <>
    <main>
        <div class={styles.div2}>
    <table>
    <thead>
        <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Editar</th>
            <th>Excluir</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Lucas Silva</td>
            <td>lucas.silva@email.com</td>
            <td>Silva#2026</td>
            <td>📝</td>
            <td>🗑️</td>
        </tr>
        <tr>
            <td>Maria Oliveira</td>
            <td>maria.oliveira@provedor.com</td>
            <td>M@ria987</td>
            <td>📝</td>
            <td>🗑️</td>
        </tr>
        <tr>
            <td>Gabriel Santos</td>
            <td>gabriel.santos@webmail.com</td>
            <td>Gabi_S2024</td>
            <td>📝</td>
            <td>🗑️</td>
        </tr>
        <tr>
            <td>Juliana Costa</td>
            <td>juju.costa@email.com</td>
            <td>Juh*Costa12</td>
            <td>📝</td>
            <td>🗑️</td>
        </tr>
        <tr>
            <td>Ricardo Souza</td>
            <td>ricardo.souza@empresa.com</td>
            <td>Rsouza_99!</td>
            <td>📝</td>
            <td>🗑️</td>
        </tr>
    </tbody>
</table>
</div>
</main>
    </>
  )
}

export default Listagem
