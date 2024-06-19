import ReasturantCard from "./RestuarantCard";
import resList from "../utils/mockData";
const Body =() => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-conatiner">
          {
            resList.map(resturant => (
              <ReasturantCard key ={resturant.info.id} resData ={resturant}/>
            ))
          }
        </div>
      </div>
    )
  }

  export default Body;