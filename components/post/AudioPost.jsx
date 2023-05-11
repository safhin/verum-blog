import React from 'react'

const AudioPost = () => {
  return (
    <div className="row">
        <div className="col-md-12">
            <article className="post post-aside d-flex align-items-center">
                <div className="post-img post-audio">
                    <iframe width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/473475024&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
                </div>
                <div className="post-header">
                    <h3><a href="#">Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt</a></h3>
                    <div className="post-meta">
                        <ul className="cat">
                            <li><a href="#">Travel</a></li>
                        </ul>
                        <div className="separation"></div>
                        <div className="post-date"><a href="#">28th June 2018</a></div>
                    </div>
                </div>
            </article>
        </div>
    </div>
  )
}

export default AudioPost