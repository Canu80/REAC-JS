import Button from 'react-bootstrap/Button';
import "./Counter.css";


const Counter = ({ counter, setCounter}) => {

  const onAdd = () => {
    setCounter(counter + 1);
  };
  const onSubtract = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };

  return (
    
    <div className="counterContainer">
      <div className="counter"> Cantidad: {counter} </div>
      <div className="counterbuttons">
        <Button variant="outline-dark" className="rest" onClick={onSubtract}>-</Button>
        <Button variant="outline-dark" disable={counter === 0} className="add" onClick={onAdd}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
