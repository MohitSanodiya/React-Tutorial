import '../Components/usercard.css';

// Use destructuring to get props
function UserCard({ Name, Img, Description }) {
  return (
    <div className='Container'>
      <h1>Profile Name: {Name}</h1>
      <img src={Img} alt="Aesthetic Img" />
      <h3>{Description}</h3>
    </div>
  );
}

export default UserCard;
