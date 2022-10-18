import './Container.modules.css'

function Container(props){
    return(
        <div className={`container-navbar ${props.customClass}`}>
            {props.children}
        </div>
    );
}

export default Container