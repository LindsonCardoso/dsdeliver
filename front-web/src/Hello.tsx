//criacao de props
type Props = {
    message: string;
}

function Hello({message} : Props){ //criacao de um componente
    return(
        <h1>componete {message}</h1>
    )

}

export default Hello;