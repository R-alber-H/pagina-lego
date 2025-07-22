
import './botones.css';
import Boton_1 from './boton_1.jsx'

function Banner() {
    return (
        <div className="banner d-flex align-items-center justify-content-start text-center">
            <div className="overlay text-start p-4 ">
                <h3 className="mb-3 fw-bold">Bienvenido al mundo LEGO®</h3>
                <p >
                    ¿Adorables animales? ¡Sí! ¿Naturaleza colorida, personajes de <br />películas e historias creativas? ¡Sí, también!
                    Adéntrate en<br /> un mundo en el que sus pasiones cobran vida y los <br />modelos le inspiran a soñar a lo grande
                    y crear <br /> con confianza.
                </p>

                <Boton_1 nombre='Saber mas' />
            </div>
        </div>
    );
}

export default Banner;
