import React from "react";

const taxRate = 0.18;
const shipping = 25;

const CardTotal = ({product}) => {
 
  const subTotal = product?.map((item)=> Number(item.price) * Number(item.amount))
const topTotal=subTotal?.reduce((acc,item)=>acc+item,0)

  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{topTotal}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{Math.round(topTotal * taxRate)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            $<span className="shipping">{topTotal > 900 ? 0 : shipping}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
            {Math.round(
                topTotal +
                  topTotal * taxRate +
                  (topTotal > 900 ? 0 : shipping )
              )}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
