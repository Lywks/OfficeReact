import './InputLogin.css'

const InputLogin = ()=>{
    return(
        <div className='box-login'>
            <p className='in'>Iniciar Sesión</p>
            <input type="text" placeholder="Correo electronico, telefono o Skype" />
            <div className="create-acount">
                <p>¿No tienes una cuenta?</p>
                <a href="#">Cree una</a>
            </div>
            <a  className="access" href='#'>¿No puedes acceder a su cuenta?</a>
        </div>
    )
}
export default InputLogin