import { ChangeEvent, useState } from "react";
import { currencies } from "../data";
import { useCryptoStore } from "../store";
import { Pair } from "../types";

export const CriptoSearchForm = () => {
  const { cryptoCurrencies } = useCryptoStore();

  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptoCurrency: "",
  });

  const hadleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="criptoCurrency" onChange={hadleChange}>
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
