export default function Simpson(props){

    let {item : simpson} = props

    return (
        <div className={'simpson'}>
            <h2>{simpson.name} {simpson.surname}</h2>
            <p>Age - {simpson.age}</p>
            <p>{simpson.info}</p>
            <img src={simpson.photo} alt={simpson.name}/>
        </div>

    )
}