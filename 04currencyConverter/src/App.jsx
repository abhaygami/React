import React , { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

    const [amount,setAmount] = useState(0);
    const [from,setFrom] = useState("usd");
    const [to,setTo] = useState("inr");
    const [convertedAmount,setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setAmount(convertedAmount);
        setConvertedAmount(amount);
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url(data:image/jpeg;base64,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)`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setAmount(amount)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}

                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
