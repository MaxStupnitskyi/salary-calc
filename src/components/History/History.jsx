import { useEffect } from 'react';

const History = ({ date, sum, rate }) => {
  // console.log(date, sum, rate, sum * rate);

  useEffect(() => {
  }, [rate]);
  return (
    <div>
      <div className="date">{date}</div>
      <div className="usd">{sum}</div>
      <div className="rate">{rate.toFixed(2)}</div>
      <div className="uah">{(sum * rate).toFixed(2)}</div>
      <div className="tax">{((sum * rate) * 0.05).toFixed(2)}</div>
    </div>
  );
};

export default History;
