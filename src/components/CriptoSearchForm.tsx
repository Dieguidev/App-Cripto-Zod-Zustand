import { ChangeEvent, FormEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";
import { ErrorMessage } from "./ErrorMessage";

export const CriptoSearchForm = () => {
  const { cryptoCurrencies } = useCryptoStore();

  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptoCurrency: "",
  });

  const [error, setError] = useState('')

  const hadleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(Object.values(pair).includes('')){
      setError('Todos los campos son obligatorios')
      return
    }
    setError('')


  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select
          name="currency"
          id="criptoCurrency"
          onChange={hadleChange}
          value={pair.currency}
        >
          <option value="">--Seleccione --</option>
          {currencies.map((currency) => (
            <option value={currency.code} key={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptoCurrency">Moneda:</label>
        <select
          name="criptoCurrency"
          id="criptoCurrency"
          onChange={hadleChange}
          value={pair.criptoCurrency}
        >
          <option value="">--Seleccione --</option>
          {cryptoCurrencies.map((crypto) => (
            <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.FullName}>
              {crypto.CoinInfo.FullName}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
};
