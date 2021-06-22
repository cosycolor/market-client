import React from "react";
import "./index.css";
import axios from "axios";
import { Link } from "react-router-dom";

function MaingPage() {
  const [products, setProducts] = React.useState([]);
  //useState의 인자값으로 []를 넣으면 products에는 빈배열인 []로 초기화
  //만약 0을 넣었다면 products 에는 0이 초기값으로 들어갈 것이다.
  React.useEffect(function () {
    axios
      .get(
        "https://adce3ed5-5d8c-4300-a209-8c2fe39454ad.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
        //setProducts함수는 state값이 update됐을때 부모함수를 재실행해주기 때문에
        //빈 배열이었던 products에 통신을 통해 products의 값들이 채워지고 이를 setProducts를 통해 update된 prdoucts를 인자로 넘겨줬기 때문에
        //MainPage함수가 다시 실행 될 것이다.
      })
      .catch(function (error) {
        console.error("에러발생", error);
      });
  }, []);

  return (
    <div>
      
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <Link className="product-link" to={`/products/${product.id}`}>
                  <div>
                    <img className="product-img" src={product.imageUrl} />
                  </div>
                  <div>
                    <div className="product-contents">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-seller">
                        <img
                          className="product-avatar"
                          src="images/icons/avatar.png"
                        />
                        <span>{product.seller}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      
    </div>
  );
}
export default MaingPage;
