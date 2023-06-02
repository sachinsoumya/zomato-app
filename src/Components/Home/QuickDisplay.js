import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './QuickDisplay.css'; 

export const QuickDisplay = (props) => {
  console.log(props);
  const listMeal = ({mealData}) => {
    if (mealData) {
      return mealData.map((item) => {
        return (
         
         
          <div className="col-12 col-md-6 col-lg-4  mt-4" key={item._id} >
             <Link to={`/listing/${item.mealtype_id}/${item.mealtype}`} >
            <div className="shadow-lg border w-100 h-100 d-flex card-image">
              <img
                src={item.meal_image}
                alt="Idle"
                className="w-50 object-fit-cover h-100"
              />
              <div className="p-5">
                <div className="h5 text-primary">{item.mealtype}</div>
                <div className="text-secondary">
                 {item.content}
                </div>
              </div>
            </div>
            </Link>
          </div>
          
        );
      });
    }
  };

  return (
    <>
      <div className="container-fluid pt-4  ">
        <div className="row justify-content-betweeen">
            {listMeal(props)}
        </div>
      </div>
    </>
  );
};
