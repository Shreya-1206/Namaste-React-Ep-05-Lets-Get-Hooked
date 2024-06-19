const ReasturantCard = (props) => {
    // console.log(props);
    const {resData} = props;
    const {
      cloudinaryImageId,
       name, cuisines, 
       sla, 
       deliveryTime, 
       costForTwo,
       avgRating} = resData?.info;
  
    // console.log(resData.info.name);
  if(!resData){
    return null;
  }
    return (
      <div className="res-card" >
        <img 
          className="res-logo"
          alt ="res-logo"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
          cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{sla.deliveryTime} mintutes</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
      </div>
    )
  }


 export default ReasturantCard; 