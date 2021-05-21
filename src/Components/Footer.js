import React from 'react'

function Footer () {
  return (
    <footer className="text-center p-4 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col">
          <p className="pt-2 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp; Balsam-Street Church | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;