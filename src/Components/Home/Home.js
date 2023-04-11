import QuickSearch from "./QuickSearch";
import Search from "./Search";

export const Home = ()=>{
    return (
        <div className="w-100 overflow-hidden">
        <Search />
        <QuickSearch />
        </div>
        


    );
};
