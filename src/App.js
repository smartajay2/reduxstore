import './index.css';
import { useSelector,useDispatch } from 'react-redux';
import { increment, decrement } from './store'; 
function App() {


  const count = useSelector(function(state){
    return state.counter.count
  })

  const dispatch = useDispatch()


  function icfunction(){
    dispatch(increment())
  }

  function defunction(){
    dispatch( decrement())
  }

  return (
    <>
     <>
        <h1 className="text-3xl font-bold underline bg-yellow-200 ml-10 mr-10  p-4 text-center">Hello world Ajay!</h1>
        <p className='text-center'>This is the page where i learn redux</p>
    </>

    <>
        <h1 className='bg-green-300 ml-10 mr-10  p-2 text-center'>Hello texting div store from provider..</h1>
        <h1 className='bg-green-300 ml-10 mr-10  p-2 pl-2 text-center'>Answer..{count}</h1>
        <button className='block bg-slate-400 text-center pl-2 pr-2 rounded-md top-4 mt-3' onClick={icfunction}>Increment</button>
        <button className='block bg-slate-400 text-center mt-3 pl-2 pr-2 rounded-md' onClick={defunction}>Decrement</button>
    </>
    </>
   
  );
}

export default App;
