import { useState } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  return (
  <div className="h-screen bg-blue-600 text-white flex items-center justify-center text-4xl">
    If you see this, Tailwind works.
  </div>
);

  // const [amount, setAmount] = useState(0);
  // const [from, setFrom] = useState('USD');
  // const [to, setTo] = useState('INR');
  // const [convertedAmount, setConvertedAmount] = useState(0);

  // const currencyInfo = useCurrencyInfo(from);
  // const options = Object.keys(currencyInfo || {});

  // const swap = () => {
  //   setFrom(to);
  //   setTo(from);
  //   setAmount(convertedAmount);
  //   setConvertedAmount(amount);
  // };

  // const convert = () => {
  //   if (currencyInfo[to]) {
  //     setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  //   }
  // };

  // return (
  //   <div
  //     className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
  //     style={{
  //       backgroundImage:
  //         "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
  //     }}
  //   >
  //     <div className="w-full max-w-md mx-auto rounded-3xl p-6 backdrop-blur-lg bg-white/10 border border-white/30 shadow-2xl">
  //       <form
  //         onSubmit={(e) => {
  //           e.preventDefault();
  //           convert();
  //         }}
  //         className="flex flex-col gap-6"
  //       >
  //         <InputBox
  //           label="From"
  //           amount={amount}
  //           onAmountChange={(val) => setAmount(val)}
  //           currencyOptions={options}
  //           onCurrencyChange={(val) => setFrom(val)}
  //           selectCurrency={from}
  //         />

  //         <div className="relative">
  //           <hr className="border border-white/30" />
  //           <button
  //             type="button"
  //             onClick={swap}
  //             className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 bg-blue-600 text-white rounded-lg text-sm shadow"
  //           >
  //             swap
  //           </button>
  //         </div>

  //         <InputBox
  //           label="To"
  //           amount={convertedAmount}
  //           currencyOptions={options}
  //           onCurrencyChange={(val) => setTo(val)}
  //           selectCurrency={to}
  //           disableAmount={true}
  //         />

  //         <button
  //           type="submit"
  //           className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition"
  //         >
  //           Convert {from.toUpperCase()} to {to.toUpperCase()}
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );
}

export default App;
