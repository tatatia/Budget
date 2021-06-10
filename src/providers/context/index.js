import { createContext } from 'react'

const currency = {
    value: 'UAN',
    title: 'гривня'
}
const CurrencyContext = createContext(currency)
export default CurrencyContext