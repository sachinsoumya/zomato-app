import { BrowserRouter , Route} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Home } from "./Components/Home/Home";
import ListingApi from "./Components/Listing/ListingApi";
import Details from "./Components/Details/Details";
import PlaceOrder from "./Components/Booking/PlaceOrder";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ViewOrder from "./Components/Booking/ViewOrder";

const Routing = () =>{
    return (
        <BrowserRouter>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route  path="/listing/:mealId/:mealType" component={ListingApi} />
            <Route  path="/details" component={Details} />
            <Route path="/placeOrder/:restName" component={PlaceOrder} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/vieworder" component={ViewOrder} />
            

            <Footer />
        </div>
        </BrowserRouter>
        
    )
    };
    export default Routing;