import "./ListingDisplay.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const ListingDisplay = (props) => {
    console.log(props);
    const renderData = ({listData}) => {
       
        if (listData) {
            if (listData.length > 0) {
                return listData.map((item) => {
                    return (

                        <div className="px-2 py-3 shadow-lg border" key={item.restaurant_id}>
                            <div className="d-flex flex-wrap">

                                <img src={item.restaurant_thumb} alt="idle" className="rounded-4 resImgWidth object-fit-cover" />




                                <div className="px-0 px-md-5">
                                    <div className="h2 text-primary"><Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link></div>
                                    <div className="text-primary h5">FORT</div>
                                    <div className="text-secondary">{item.address}</div>
                                    <span className="badge rounded-pill text-bg-dark">{item.mealTypes[0].mealtype_name}</span>
                                    <span className="badge rounded-pill text-bg-success ms-2">{item.mealTypes[1].mealtype_name}</span>
                                   

                                </div>

                            </div>
                            <hr />
                            <div className="d-flex flex-wrap">
                                <div className="text-secondary">

                                        CUISINES:
                                </div>
                                <div className="h6 text-primary px-md-2">
                                    <span className="badge text-bg-danger ">{item.cuisines[0].cuisine_name}</span>
                                    <span className="badge text-bg-warning ms-2">{item.cuisines[1].cuisine_name}</span>

                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="text-secondary">COST:</div>
                                <div className="h5 text-primary ms-2"> Rs.{item.cost}</div>

                            </div>  
                            </div>      

                                    

                                 
                    );


                })

            }
            else{
                return (
                <div className="h2">No Data</div>
                )
            }
        }else{
            return <div className="h3">Loading....</div>
        }

    };




    return (<div className="col-12 col-lg-8 px-3 ">
        <div >{renderData(props)}</div>
    </div>);

};
export default ListingDisplay;