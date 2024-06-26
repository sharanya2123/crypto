// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptocurencyDetails} = props
  const {
    currencyLogoUrl, 
    currencyName,
    usdValue, 
    euroValue,
  } = cryptocurencyDetails

  return (
    <li className="Cryptocurrency-Item">
      <div className="loho-and-title-conatiner">
        <img src={currencyLogoUrl} alt={currencyName} />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="usd-and-euro-values-container">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
