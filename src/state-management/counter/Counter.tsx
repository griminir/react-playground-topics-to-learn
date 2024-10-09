import useCounterStore from './store';

const Counter = () => {
  const { counter, increment, reset, upgradeMax } = useCounterStore();

  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className='btn btn-primary mx-1'>
        Increment
      </button>
      <button onClick={() => upgradeMax()} className='btn btn-primary mx-1'>
        upgrade
      </button>
      <button onClick={() => reset()} className='btn btn-primary mx-1'>
        Reset
      </button>
    </div>
  );
};

export default Counter;
