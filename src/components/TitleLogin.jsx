import microsoftlogo from '../assets/microsoft.svg';
import './TitleLogin.css'
const TitleLogin = () =>{
    return (
       <div className='box-title'>
            <img src={microsoftlogo} alt="asd" />
            <p>Microsoft</p>
       </div>
    )
}

export default TitleLogin