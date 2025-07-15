const ProfileCard = ({ name, bio, image }) => {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    margin: "10px",
    width: "250px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial"
  };

  const imgStyle = {
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginBottom: "10px"
  };
  return (
   
    <div style={cardStyle}>
      <img src={image} alt="" style={imgStyle} />
      <h2>{name}</h2>
      <p>{ bio}</p>
      
    </div>
  )
}
export default ProfileCard;