import { currencies } from "../data";
import { useCryptoStore } from "../store";

export const CriptoSearchForm = () => {
  const { cryptoCurrencies } = useCryptoStore();

  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="criptoCurrency">
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
        <select name="criptoCurrency" id="criptoCurrency">
          <option value="">--Seleccione --</option>
          {
            cryptoCurrencies.map(crypto => (
              <option value={crypto.CoinInfo.Name} key={crypto.CoinInfo.FullName}>{crypto.CoinInfo.FullName}</option>
            ))
          }
        </select>
      </div>

      <input type="submit" value="Cotizar" />
    </form>
  );
};
