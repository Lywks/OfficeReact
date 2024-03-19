import "./Option.css"
import key from '../assets/key.svg';

const Option = ()=>{
    return(
        <div className="box-option">
            <img  className="key"src={key} />
            <p className="option">Opciones de inicio  de sesión</p>
        </div>
    )
}
export default Option