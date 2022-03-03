import React from 'react'
import '../CSS/HomeCare.css'

const HomeCarePoster = () => {
    return (
        <div className='homecareView'>
            {/* Bedsheets cover image */}
            <div className='firstHomeCareImg'>
                <img src="https://images.meesho.com/images/marketing/1646054968277.jpg" alt="" />
            </div>
            {/* Bedsheets Button */}
            <div className='BedsheetBtn'>
                <img src="https://images.meesho.com/images/marketing/1646054984245.png" alt="" />
            </div>
            {/* Kitchenware cover image */}
            <div className='secondHomeCareImg'>
                <img src="https://images.meesho.com/images/marketing/1646055079691.jpg" alt="" />
            </div>
            {/* Kitchenware Button */}
            <div className='KitchenWareBtn'>
                <img src="https://images.meesho.com/images/marketing/1646055108159.png" alt="" />
            </div>
            {/* Carpets cover image */}
            <div className='thirdHomeCareImg'>
                <img src="https://images.meesho.com/images/marketing/1646055005690.jpg" alt="" />
            </div>
            {/* Carpets Button */}
            <div className='CarpetBtn'>
                <img src="https://images.meesho.com/images/marketing/1646055019829.png" alt="" />
            </div>
        </div>
    )
}

export default HomeCarePoster