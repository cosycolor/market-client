import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  return <div>상품상세 페이지 {id} 상품</div>;
}
export default ProductPage;
