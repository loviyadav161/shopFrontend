import { useEffect, useState } from "react";
import Card from "../UI/Card";
import axios from "axios";
const Home = () => {
  const [item, setItem] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getItems();
  }, [page]);

  const getItems = async () => {
    const value = {
      limit: 10,
      skip: page * 10,
    };
    await axios
      .post("https://shop-qmb6.onrender.com/home/product/", value)
      .then(function (response) {
        setItem(response.data.products);
      });
  };
  return (
    <div>
      {/* Items */}
      {item.length > 0 && (
        <div className="allItems">
          {item.map((value, index) => {
            return (
              <Card
                id={value.id}
                title={value.title}
                image={value.thumbnail}
                descrip={value.description}
                price={value.price}
                key={index}
              />
            );
          })}
        </div>
      )}
      {/* pagination */}
      <div className="pagination" style={{ alignContent: "center" }}>
        {page > 1 && (
          <button>
            <span onClick={() => setPage(page - 1)}>⬅️</span>
          </button>
        )}
        {item.length > 0 &&
          item.slice(0, 10).map((element, index) => {
            return (
              <button>
                <span
                  style={{ padding: "20px", alignContent: "center" }}
                  onClick={() => setPage(index + 1)}
                  key={index}
                >
                  {index + 1}
                </span>
              </button>
            );
          })}
        {page < 10 && (
          <button>
            <span onClick={() => setPage(page + 1)}>➡️</span>
          </button>
        )}
      </div>
    </div>
  );
};
export default Home;
