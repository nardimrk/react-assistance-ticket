import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import {createTicket, reset} from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'


function NewTicket() {

    const {user} = useSelector((state) => state.auth)
    const {isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.tickets
    ) 

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(isError){
            toast.error(message)
        }
        
        if(isSuccess){
            dispatch(reset())
            navigate('/tickets')
        }

        dispatch(reset())
    }, [dispatch, isError, isSuccess, navigate, message])

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [product, setProduct] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(createTicket({product, description}))
    }

    if(isLoading){
        return <Spinner />
    }

    return (
    <>
    <BackButton url='/' />
    <section className='heading'>
    <h1>Crea nuovo ticket</h1>
    <p>Inserisci le informazioni richieste</p>
    </section>

    <section className="form">
        <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" value={name} disabled className="form-control" />
        </div>

        <div className="form-group">
            <label htmlFor="email">Nome:</label>
            <input type="email" value={email} disabled className="form-control" />
        </div>

        <form onSubmit={onSubmit} action="">

            <div className="form-group">
            <label htmlFor="product">Prodotto</label>
            <select name="product" id="product" value={product} 
                    onChange={(e)=>setProduct(e.target.value)}>
                        <option value="iPhone">iPhone</option>
                        <option value="iMac">iMac</option>
                        <option value="MacBookPro">MacBookPro</option>
                        <option value="IPad">IPad</option>
                        <option value="iWatch">iWatch</option>
                    </select>
            </div>

        <div className="form-group">
            <label htmlFor="description">Descrizione</label>
            <textarea name="description" id="description" className='form-control' placeholder='Descrizione' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="form-group">
            <button className="btn btn-block">Submit</button>
        </div>

        </form>

    </section>
    </>
    )
}

export default NewTicket