import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = 'USD',
  disableAmount = false,
  disableCurrency = false,
}) {
  const id = useId();

  return (
    <div className="bg-white/30 backdrop-blur-md rounded-xl p-4 flex items-center justify-between">
      <div className="flex flex-col w-1/2">
        <label htmlFor={id} className="text-white mb-1 text-sm">{label}</label>
        <input
          id={id}
          type="number"
          className="rounded-lg px-3 py-2 bg-white/40 text-white placeholder-white/80 outline-none"
          placeholder="0"
          value={amount}
          disabled={disableAmount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>

      <div className="flex flex-col w-1/3">
        <label className="text-white mb-1 text-sm">Currency Type</label>
        <select
          className="rounded-lg px-3 py-2 bg-white/40 text-white outline-none cursor-pointer"
          value={selectCurrency}
          disabled={disableCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option className="text-black" key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
