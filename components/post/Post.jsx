import React from 'react'

const Post = ({title,image,tags,date}) => {
  return (
    <div className="row">
        <div className="col-md-12">
            <article className="post post-aside d-flex align-items-center">
                <div className="post-img ">
                    <a href="#"><img className="img-fluid" src={image} alt=""/></a>
                </div>
                <div className="post-header">
                    <h3><a href="#">{title}</a></h3>
                    <div className="post-meta">
                        <ul className="cat">
                            <li><a href="#">{tags}</a></li>
                        </ul>
                        <div className="separation"></div>
                        <div className="post-date"><a href="#">{date}</a></div>
                    </div>
                </div>
            </article>
        </div>
    </div>
)
}

export default Post