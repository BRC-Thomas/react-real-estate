import './GetStarted.css'



export default function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
            <span className="primaryText">Get Started with Homyz</span>
            <span className='secondaryText'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
            Lorem, ipsum dolor.
            </span>
            <button className="button">
              <a href="#">Get Started</a>
            </button>
        </div>
      </div>
    </section>
  )
}