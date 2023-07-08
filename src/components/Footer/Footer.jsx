import './Footer.css'

export default function Footer() {
  return (
    <section className='f-wrapper'>
      <div className="paddings innerWidth flexCenter f-container">

        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="Homyz logo" width={120} />
          <span className="secondaryText">
            Lorem ipsum dolor sit amet.<br/>
            Morem  dolor ipsum ametipsum.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className='primaryText'>Informations</span>
          <span className='secondaryText'>147 New York, FL 7571, USA</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About us</span>
          </div>
        </div>
      </div>

    </section>
  )
}