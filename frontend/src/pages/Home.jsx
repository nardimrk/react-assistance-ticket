import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="heading">
        <h1>In che cosa hai bisogno di aiuto?</h1>
        <p>Scegli una delle opzioni disponibili</p>
      </section>

      <Link to='/new-ticket' className='btn btn-reverse btn-block'>
        <FaQuestionCircle />Crea Ticket
      </Link>

      <Link to='/tickets' className='btn btn-block'>
        <FaTicketAlt />Visualizza i miei Ticket
      </Link>

    </>
  )
}

export default Home