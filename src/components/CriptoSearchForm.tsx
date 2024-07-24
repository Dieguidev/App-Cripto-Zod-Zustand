import { currencies } from "../data"


export const CriptoSearchForm = () => {
  return (
    <form className="form">
      <div className="field">
        <label htmlFor="currency">Moneda:</label>
        <select name="currency" id="criptoCurrency">
          <option value="">--Seleccione --</option>
          {
            currencies.map(currency => (
              <option value={currency.code} key={currency.code}>{currency.name}</option>
            ))
          }
        </select>
      </div>

      <div className="field">
        <label htmlFor="criptoCurrency">Moneda:</label>
        <select name="criptoCurrency" id="criptoCurrency">
          <option value="">--Seleccione --</option>
        </select>
      </div>

      <input type="submit" value='Cotizar'/>
    </form>
  )
}
