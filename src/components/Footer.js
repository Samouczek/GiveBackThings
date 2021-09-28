
export default function Footer() {
    return (
        <div className='container footer'>
            <div className='row footer-info'>
                <div className='copyright col-sm-8 col-md-10 col-lg-11'>Copyright by Coders Lab</div>
                <div className='media col-sm-4 col-md-2 col-lg-1'>
                   <a href='https://www.facebook.com/' className='media media__fb'> <img src="../assets/Facebook.svg" alt='facebook'/></a>
                    <a href='https://www.instagram.com/' className='media media__insta'> <img src="../assets/Instagram.svg" alt='instagram'/></a>
                </div>
            </div>
        </div>
    )
}