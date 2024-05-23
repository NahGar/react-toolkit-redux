import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount, decrement } from './store/slices/counter';
import './App.css'

function App() {
  
    const { counter } = useSelector( state => state.counter );
    const dispatch = useDispatch();

    return (
        <>
            <h1>count is { counter }</h1>
            <div className="card">
                <button onClick={ () => dispatch( increment() ) }>
                    Increment
                </button>
                <button onClick={ () => dispatch( decrement() ) }>
                    Decrement
                </button>
                <button onClick={ () => dispatch( incrementByAmount(2) ) }>
                    Increment by 2
                </button>
            </div>
        </>
    )
}

export default App
