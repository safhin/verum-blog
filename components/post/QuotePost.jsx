import React from 'react'

const QuotePost = () => {
  return (
    <div className="row">
        <div className="col-md-12">
            {/* quote post */}
            <div className=" pb-0">
                <article className="post post-quote d-flex align-items-center " style={{ backgroundImage: `url('/assets/img/b9.jpg')` }}>
                    <div className="post-header">
                        <h3>"Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt"</h3>
                        <div className="mb-3">- Nathan Astle -</div>
                        <div className="post-meta">
                            <ul className="cat">
                                <li><a href="#">Quote</a></li>
                            </ul>
                            <div className="separation"></div>
                            <div className="post-date"><a href="#">28th June 2018</a></div>
                        </div>
                    </div>
                </article>
            </div>
            {/* quote post */}
        </div>
    </div>
  )
}

export default QuotePost