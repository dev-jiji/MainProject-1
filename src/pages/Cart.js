// my Cart page
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  let cart = useSelector((state) => state);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mb-10">장바구니</div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <div className="border rounded px-1"> 17:00 </div>
          <div>대가한우대창곱도리&찜닭</div>
        </div>
        <div>
          <p>오늘 18:20도착</p>
        </div>
      </div>
      <div className="flex border p-3 rounded w-3/12 relative">
        <div className="w-24 h-24 bg-main rounded"></div>
        <div className="flex flex-col ml-5 justify-between">
          <div>
            <p>한우대창 곱도리탕 소 순살</p>
            <p>옵션-맵기 단계 선택 [신라면정도 보통맛]</p>
          </div>
          <div>22,500원</div>
        </div>
        <button className="absolute top-0 right-0 pr-3">x</button>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center bg-white text-white w-52 h-10 mt-10 text-black border rounded">
          합계 원
        </div>
        <Link
          to="/Order"
          className="flex justify-center items-center bg-main text-white w-52 h-10 mt-10"
        >
          주문하기(개)
        </Link>
      </div>
    </div>
  );
};

export default Cart;
