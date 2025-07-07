import '../App.css'

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>props.setName(e.target.value)} />
      <p>Name state variale ki value inside card : {props.name}</p>
    </div>
  )
}

export default Card;
