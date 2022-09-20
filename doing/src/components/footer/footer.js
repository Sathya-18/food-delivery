import './footer.css'

function Footer(){
    return(
        <div className='footer'>
        <div className='container1'>
            <h1 className='doing'>Doing<span>.</span></h1>
            <div className='footerWrap'>
            <div className='box'>
                <h2>about doing</h2>
                <p><a href='#'>blog</a></p>
                <p><a href='#'>work with us</a></p>
                <p><a href='#'>report</a> </p>
                <p><a href='#'>contact us</a></p>
            </div>
            <div className='box'>
                <h2>doing verse</h2>
                <p><a href='#'>doing</a></p>
                <p><a href='#'>feeding tenkasi</a></p>
                <p><a href='#'>hyperpure</a></p>
            </div>
            <div className='box'>
                <h2>services</h2>
                <p><a href='#'>partner with us</a></p>
                <p><a href='#'>apps for you</a></p>
                <p><a href='#'>doing for work</a></p>
            </div>
            <div className='box'>
                <h2>learn more</h2>
                <p><a href='#'>privacy</a></p>
                <p><a href='#'>security</a></p>
                <p><a href='#'>terms</a></p>
                <p><a href='#'>sitemap</a></p>
            </div>
            <div className='box'>
                <h2>social links</h2>
                <i className="fa fa-facebook"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-linkedin"></i>
                <i className="fa fa-twitter"></i>
                <i className="fa fa-youtube-play"></i>
            </div>
            </div>
            <hr></hr>
            <p className='endtext'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Doing.™ Ltd. All rights reserved</p>
        </div>
        </div>
    )
};

export default Footer;