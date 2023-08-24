import { HistoryContainer, HistoryList } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>

          <tbody>
            <tr>
              <td>Tarefa 01</td>
              <td>05 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 02</td>
              <td>10 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 03</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 04</td>
              <td>20 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 05</td>
              <td>30 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 06</td>
              <td>15 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Tarefa 07</td>
              <td>10 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
