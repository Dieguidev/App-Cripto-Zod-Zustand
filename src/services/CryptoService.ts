import axios from "axios"
import { CryptoCurrenciesResponseSchema, CryptoPriceSchema } from "../schema/crypto-schema"
import { Pair } from "../types"


export async function getCryptos() {
  const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
  const { data: { Data } } = await axios(url)
  //validar y reducir la info de la API
  const result = CryptoCurrenciesResponseSchema.safeParse(Data)
  if (result.success) {
    return result.data
  }
}

export async function fetchCurrentCryptoPrice(pair: Pair) {
  const { criptoCurrency, currency } = pair
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoCurrency}&tsyms=${currency}`
  const { data: { DISPLAY } } = await axios(url);
  //validar y reducir la info de la API
  const result = CryptoPriceSchema.safeParse(DISPLAY[pair.criptoCurrency][pair.currency])

  if (result.success) {
    return result.data
  }
}
