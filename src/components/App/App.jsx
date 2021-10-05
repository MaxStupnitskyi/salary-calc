import { useEffect, useState } from 'react';
import rates from '../../apis/excangeRate';
import History from '../History';

const App = () => {

  const [date, setDate] = useState('2021-10-05');
  const [sum, setSum] = useState(null);
  const [rate, setRate] = useState(null);

  const [history, setHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formatDate = [...date].filter(i => i !== '-').join('');
    try {
      const { data } = await rates.get('/exchange', {
        params: {
          date: formatDate,
          json: ''
        },
      });
      const usd = await data.find(item => item.cc === 'USD');
      await setRate(usd.rate);
    } catch (err) {
      console.log(err.response.status);
    }
  };

  useEffect(() => {
    date && sum && rate && setHistory([...history, { date, sum, rate }]);
  }, [rate]);

  return (
    <div className="App">
      <form onSubmit={(e) => handleSubmit(e, date, sum)}>
        <fieldset>
          <input type="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Sum" value={sum} onChange={(e) => setSum(e.target.value)} />
        </fieldset>
        <button>Submit</button>
      </form>

      <div className="results">
        {history.length > 0 && <History date={history[0].date} sum={history[0].sum} rate={history[0].rate} />}
      </div>
    </div>
  );
};

export default App;
