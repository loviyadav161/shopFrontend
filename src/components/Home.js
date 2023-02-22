import { useEffect, useState } from "react";
import Card from "../UI/Card";
import axios from 'axios';
const Home = () => {
    const [item, setItem] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        getItems();
    },[page])
    
    const getItems = async () => {
        const value = {
            limit : 10,
            skip : page * 10
        }
        axios.post("http://localhost:4000/home/product/",value).then(function (response) {
            setItem(response.data.products);
          });
    };
    return(
        <div>
            {/* Items */}
            {item.length > 0 && (
                <div className="allItems">
                    {item.map((value, index) => {
                        return(
                            <Card 
                            id = {value.id}
                            title = {value.title}
                            image = {value.thumbnail}
                            key = {index}
                            />
                        )
                    })}
                </div>
            )}
            {/* pagination */}
            <div className="pagination">
                {page > 1 && <span onClick={() => setPage(page - 1)}>⬅️</span>}
                {item.length > 0 &&
                item.slice(0, 10).map((element, index) => {
                    return (
                    <span
                        onClick={() => setPage(index + 1)}
                        className={page === index + 1 ? "page_selected" : ""}
                        key={index}
                    >
                        {index + 1}
                    </span>
                    );
                })}
                {page < 10 && <span onClick={() => setPage(page + 1)}>➡️</span>}
            </div>
        </div>
    );
};
export default Home;