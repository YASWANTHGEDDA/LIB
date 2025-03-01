import React from 'react'

export default function Bookinfo() {
  return (
    <div className='info'>
        <div className="book-containr conatinr">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src="" id='book-image' alt="Book Image" />
                    <h1 id='book-title'></h1>
                    <p id='book-author'></p>
                    <p id='book-description'></p>
                </div>
                <div className="col-12 col-md-6">
                    <p>To get the price of the book please fill the below informations</p>
                    <p>Select Date : The date when you want to reserve the book.</p>
                    <p>End Date : The date when you return the book</p>
                    <form action="" id='dateForm'>
                        <label htmlFor="start-date">Select Date</label>
                        <input type="date" id='start-date'/>
                        <br />
                        <label htmlFor="end-date">End Date</label>
                        <input type="date" id='end-date' />
                    </form>
                </div>
            </div>
        </div>
      
    </div>
  )
}