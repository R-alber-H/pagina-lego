import lego_fondo from '../assets/lego_fondo.jpg';
import Boton_1 from './boton_1.jsx'

function Seccion_1() {
    return (
        <div className='d-flex col-12'>
            <div className='col-3'>
                <img src={lego_fondo} alt="LEGO super heroes DC" width="100%" />
            </div>
            <div className='d-flex justify-content-center align-items-center flex-column col-9 'style={{ backgroundColor: '#FFF4F4' }} >
                <h1 className='mb-4 fw-bold'>DC Comics Super Heroes</h1>
                <h4 className='fw-semibold'>¡Sumérgete en un mundo de aventuras </h4>
                <h4 className='fw- mb-4'>con el universo LEGO® DC!</h4>
                <Boton_1 nombre="Registrate" to="/registro" />
            </div>
        </div>
    )
}

export default Seccion_1