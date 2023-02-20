import "../styles/styles.css";
// import "../styles/brandsSlide.css";

const BrandsSlide = () => {
    return (
        <div className="flex jsutify-center items-center h-full w-full">
                <div className="flex justify-around items-center w-full">
                    <div className="slide">
                        <img src="../../logo_corby.png" className='bg-contain' height="70" width="160" alt="Corby Logo" />
                    </div>
                    <div className="slide">
                        <img src="../../logo-cocacola.png" className='bg-contain' height="70" width="160" alt="CocaCola Logo" />
                    </div>
                    <div className="slide">
                        <img src="../../logo-lionsgate.png" className='bg-contain' height="70" width="160" alt="Lionsgate Logo" />
                    </div>
                    <div className="slide">
                        <img src="../../logo_bacardi.png" className='bg-contain' height="70" width="160" alt="Bacardi Logo" />
                    </div>
                    <div className="slide">
                        <img src="../../logo_flairair.png" className='bg-contain' height="70" width="140" alt="Flairair Logo" />
                    </div>
                    <div className="slide">
                        <img src="../../logo_monster.png" className='bg-contain' height="70" width="90" alt="Monster Logo" />
                    </div>
                </div>
        </div>

    )
}
export default BrandsSlide;