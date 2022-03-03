import React from 'react'
import FashionStorePoster from '../Components/FashionStorePoster'
import HomeCarePoster from '../Components/HomeCarePoster'

const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='mainDiv'>
                <div className='mainContentDiv'>
                    <p className='mainContentTitle'>Lowest Prices <br /> Best Quality Shopping</p>
                    <div className='subTitle'>
                        <p className='mainContentSubTitle'>50 lakh+ Styles | 650+ categories</p>
                    </div>
                    <div className='downloadApp'>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJqSURBVHgBrZRPaxNBGMbfmd1oG+KfFBGpCBtBUPBgoB49BEzxpNSLx/YqXhJtTxqr/QLJfoKkX0ByEaQVDEIpAUtKBS2I3VgjWGLcEJq02Sb7OrNlY5pskk12H1hmdt6Z5zfz7B8yr6wt3vQUIyFvPq8TnAn4o3lwUWR+Zw1558apPxD2KgAIqSbF126BqNn5ql2A7OFlhoQ5AcmHgirPggui7TfZw8ljCICkI6Z2/yYURY3fAgeinQNtEAPETpPbLSWSDCSBGwALSCu2H6V4BNwAmJDN+qX2IYkQEuex/VLlB+AUwPXx4Irx8DskNRHTdmOjgyas1gJWEDO23E9VXgQnABNSaJyxKp1HxFc8NlV5MjsygOtt9RoUm17L2lhtT/KVv6UauXASc/ekkQB1FODN/vUuiEerwLnSltFHIHMN0JWj3HQrttavwq7O0jo89G2zVjPMJ/ayQPWjrnkEIM+aqO0TmKrop42TVLUm+IsbluZcbNcSu5JDA7iECsDFtG60/cROUR4a4N+vw+P3X2CiSEFYvw1QG+8xEzMC0NBQANPcX60f7/BgvAvCs2fXjCe4GiLBd3nbgDGtccK8Zcghn4IADQ/ftSyAFhSDK2mzLjoxb0Eqvoy4cjdKnkc3O2u2ANx8Uq1ZlcrMPkJiz5Z7rR0Y0aP17z3MUYYmDZDY0+V+68VB5lM7xU7jDFDBMo6hANNbhU5zlcUR7ReHlWgv8/DngnnLPkhMsDiuDorDSmIfczTiAFwisYUMjCixh7kKRF8iLxYS4FAUjVcN4M72b27+Pw4XzLlEgro8pZRe3t9QMk7jsNI/SVwmYkYExSAAAAAASUVORK5CYII=" alt="" />
                        <p>Download the Meesho App</p>
                    </div>
                </div>
                <div className='mainImageDiv'>
                    <img src="https://images.meesho.com/images/marketing/1646054807245.jpg" alt="" />
                </div>
            </div>
            <div className='category'>
                <div className='hrDivider'></div>
                <p className='categoryTitle'>Top Categories to choose from</p>
                <div className='hrDivider'></div>
            </div>
            <div className='Fashion'>
                <FashionStorePoster />
            </div>
            <div className='Homecare'>
                <HomeCarePoster />
            </div>
        </div>
    )
}

export default Home