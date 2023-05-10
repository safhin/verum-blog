import React from 'react'

const SinglePostDetails = () => {
  return (
    <div className="col-lg-9 col-md-8 side-border">
        <div className="row">
            <div className="col-md-12">
                <article className="post">
                    {/* <!--<div className="post-img">-->
                        <!--<a href="#"><img className="img-fluid" src="/assets/img/b1.jpg" alt=""/></a>-->
                    <!--</div>--> */}
                    <div className="post-header">
                        <div className="post-meta">
                            <ul className="cat">
                                <li><a href="#">Lifestyle</a></li>
                                <li><a href="#">Travel</a></li>
                            </ul>
                            <div className="separation"></div>
                            <div className="post-date"><a href="#">28th June 2018</a></div>
                        </div>
                        <h2>Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt</h2>
                        <div className="post-meta">
                            <div className="post-author">By <a href="#">Caterina Minthe</a></div>
                        </div>
                    </div>
                    <div className="post-blog">
                        <p>
                            <strong>
                                Championed by Diddy and Will Smith, Neelam Hakeem is breaking onto the scene with her piercing rap and modest hijab style.
                            </strong>
                        </p>
                        <p>Originally printed in the September 2018 issue of Vogue Arabia.</p>
                        <p>
                            “I converted to Islam in 2007, but I never felt like I was fully ready to commit to hijab – my hair was a crutch for me,” says burgeoning rap artist Neelam Hakeem. “From a fashion perspective, I didn’t realize that you could be modest and fierce at the same time; that you could walk into a room and command it. Not that I was ever a skin-shower,” she laughs. “I don’t have a Kardashian body.” The diminutive Hakeem, whose face has the full and regal features of an African queen, is speaking from her home in Los Angeles, where she lives with her husband, Marquis Henri, their two young children, and her mother. At first glance, the 31-year-old, with her Instagram following of 300 000, may give the impression of being just another modest influencer, posing in brands like Dulce by Safiya, Culture Hijab, and Hayah Collection. Then you play one of her videos, and she starts rapping about everything from political and social injustices to women’s rights.
                        </p>
                        <p>
                            <img className="img-fluid " src="/assets/img/b2.jpg" alt=""/>
                        </p>
                        <p>
                            In a matter of months, her lyrics, rapped to songs by Jaden Smith and Kanye West, have made impressive rounds on social media. Diddy, Will Smith, The Shade Room, and Erykah Badu have all regrammed her songs. Their combined followings have broadcast Hakeem’s lines and modest style to some 47.7 million followers.
                        </p>
                        <h5>How to expose the events</h5>
                        <p>
                            With her international visibility on such steep ascent, how does Hakeem stay grounded? “I have a mission,” she says, with distinct determination. “And my mission is more important than my ego.” Hakeem was born in 1986 in Seattle, Washington. She describes her childhood as normal, peppered with outdoor adventures alongside her two sisters. When she was 15, her parents divorced, and the world as she knew it shifted. “My mom drove us from Seattle to Los Angeles, we stayed in shelters along the way. My first day in South Central LA was September 11, 2001,” she remembers. In her new neighborhood, she was exposed to guns and gang shootings around her school. Meanwhile, her mother was diagnosed with multiple sclerosis. “I saw her lose 80% of her bodily function,” she says of her mother’s rapid deterioration. “Growing up, I was a shy kid, scared of everything, but when my mom got sick, I had to step up – I had to take care of her and my sisters. That completely changed me. I grew strong.”
                        </p>
                        <p>
                            <img className="img-fluid " src="/assets/img/b3.jpg" alt=""/>
                        </p>
                        <p>
                            With exposure comes the responsibility and added pressure of being a role model, which is something Hart doesn’t take lightly. “By virtue of being a female in the job that I am in, you automatically become a role model in some way, whether you choose that or not. I’m careful of the things I advocate and the message I put out there,” she explains. “In a world of Instagram and selfies, I hope I can offer young women something beyond the aesthetic and demonstrate that power comes from a realm outside of the patriarchal gaze. I’d rather offer something relatable than something unattainable.”
                        </p>
                        <h5>On the inspiration behind the exhibition</h5>
                        <p>
                            Her five-year plan includes working with a new generation of inspiring and talented people. “I want to play roles that challenge me creatively as an actor but also personally as a human being. I aspire to be involved in projects that say something and have meaning beyond just entertainment. And I hope to be part of a much more self-aware, equal, tolerant, and inclusive industry, where stories from the colonized and not just the colonizer are being told.”
                        </p>

                        <blockquote><p>A shoe is not only a design, but it's a part of your body language,
                            the way you walk. The way you're going to move is quite dictated by your shoes.</p></blockquote>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto
                            cupiditate eius fuga fugit illum ipsa itaque maxime, molestias odio praesentium
                            quaerat, quam soluta tempora tempore veniam veritatis! Sequi, similique?</p>

                        {/* tags and share start */}
                        <div className="meta-row">
                            <div className="meta-tags">
                                <span>Tags:</span>
                                <a href="#">lifestyle</a>
                                <a href="#">fashion</a>
                            </div>
                            <div className="meta-share">
                                <div className="social-links">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>

                                </div>
                                <div className="share-btn"><i className="fa fa-share-alt pr-2"></i> Share</div>
                            </div>
                        </div>
                        {/* tags and share end */}

                        {/* custom pagination */}
                        <div className="row">
                            <div className="col-12">
                                <div className="custom-pagination custom-pagination-post">
                                    <div className="older full-">
                                        <a href="#">
                                        <span className="next-post-pagination">
                                            Haifaa Al Mansour Brings a New Tale Set in Saudi to Venice
                                        </span>
                                            <i className="float-right fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                    <div className="newer">
                                        <a href="#">
                                            <i className="fa fa-angle-left"></i>
                                            <span className="prev-post-pagination">
                                            Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt
                                        </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* custom pagination */}

                        {/* author info start */}
                        <div className="post-author-info">
                            <div className="author-thumb">
                                <img className="img-fluid" src="/assets/img/author.jpg" alt=""/>
                            </div>
                            <div className="author-details mt-3">
                                <h5><a href="#">Maria Garcia</a></h5>
                                <p>Sit amet cursus nisl aliquam. Aliquam et elit eu nunc rhoncus viverra quis at felis. Sed do. Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus Lorem ipsum dosectetur adipisicing elit at leo dignissim congue.</p>
                                <div className="s-links">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                    <a href="#"><i className="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* author info end */}

                    </div>
                </article>

                {/* related post start */}
                <div className="row related-post">
                    <div className="col-12 text-center">
                        <h2 className="post-single-title">You may also like</h2>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <article className="post">
                            <div className="post-img">
                                <a href="#"><img className="img-fluid" src="/assets/img/b2.jpg" alt=""/></a>
                            </div>
                            <div className="post-header">
                                <h3><a href="#">Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt</a></h3>
                                <div className="post-meta">
                                    <ul className="cat">
                                        <li><a href="#">fashion</a></li>
                                    </ul>
                                    <div className="separation"></div>
                                    <div className="post-date"><a href="#">28th June 2018</a></div>
                                </div>
                            </div>

                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <article className="post">
                            <div className="post-img">
                                <a href="#"><img className="img-fluid" src="/assets/img/b3.jpg" alt=""/></a>
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
                    <div className="col-lg-4 col-md-6">
                        <article className="post">
                            <div className="post-img">
                                <a href="#"><img className="img-fluid" src="/assets/img/b4.jpg" alt=""/></a>
                            </div>
                            <div className="post-header">
                                <h3><a href="#">Alicia Keys is on the Picturesque Trip of a Lifetime in Egypt</a></h3>
                                <div className="post-meta">
                                    <ul className="cat">
                                        <li><a href="#">lifestyle</a></li>
                                    </ul>
                                    <div className="separation"></div>
                                    <div className="post-date"><a href="#">28th June 2018</a></div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                {/* related post start */}

                {/* comments start */}
                <div className="comments">
                    <h2 className="comments-title"> Comments</h2>
                    <ul>
                        <li className="comment ">
                            <article className="comment-body">
                                <footer className="comment-meta">
                                    <div className="comment-author">
                                        <img alt="" src="/assets/img/a0.jpg" className=""/>
                                        <b className="fn">
                                            <a href="#" rel="external nofollow" className="url">
                                                Chris Ames
                                            </a>
                                        </b>
                                        <span className="says">says:</span>
                                    </div>

                                    <div className="comment-metadata">
                                        <a href="#">
                                            <time dateTime="2018-09-02T12:17:07+00:00">
                                                September 2, 2018 at 12:17 pm
                                            </time>
                                        </a>
                                    </div>

                                </footer>

                                <div className="comment-content">
                                    <p>Hi, this is a comment.<br/>
                                        To get started with moderating, editing, and deleting comments, please visit
                                        the Comments screen in the dashboard.<br/>
                                        Commenter avatars come from <a href="#">Gravatar</a>.</p>
                                </div>

                                <div className="reply">
                                    <a rel="nofollow" className="comment-reply-link" href="#" >Reply</a>
                                </div>
                            </article>
                            <ul className="children">
                                <li className="comment ">
                                    <article className="comment-body">
                                        <footer className="comment-meta">
                                            <div className="comment-author ">
                                                <img alt="" src="/assets/img/a1.jpg" className=""/>
                                                <b className="fn">
                                                    <a href="#" rel="external nofollow" className="url">Jones Brown</a>
                                                </b>
                                                <span className="says">says:</span>
                                            </div>

                                            <div className="comment-metadata">
                                                <a href="#">
                                                    <time dateTime="2018-10-16T13:13:25+00:00">
                                                        October 16, 2018 at 1:13 pm
                                                    </time>
                                                </a>
                                            </div>

                                        </footer>

                                        <div className="comment-content">
                                            <p>Hi, this is a comment.<br/>
                                                To get started with moderating, editing, and deleting comments,
                                                please visit the Comments screen in the dashboard.<br/>
                                                Commenter avatars</p>
                                        </div>

                                        <div className="reply">
                                            <a rel="nofollow" className="comment-reply-link" href="#">Reply</a>
                                        </div>
                                    </article>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {/* commetns end */}

                {/* comment form start */}
                <div className="comment-respond">
                    <h3 className="comment-reply-title">
                        Leave a Comment
                    </h3>

                    <form role="form" className="comment-form">
                        <div className="row">
                            <div className=" col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name*" required=""/>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="form-group ">
                                    <input type="email" className="form-control" placeholder="Email*" required=""/>
                                </div>
                            </div>
                            <div className=" col-md-4">
                                <div className="form-group ">
                                    <input type="text" className="form-control" placeholder="Website" required=""/>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="controls">
                                <textarea id="message" rows="5" placeholder="Comments*" className="form-control" required=""></textarea>
                            </div>
                        </div>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <div className="text-center mt-md-5">
                            <button type="submit" className="btn btn-black">Send</button>
                        </div>
                    </form>
                </div>
                {/* comment form end */}
            </div>
        </div>
    </div>
  )
}

export default SinglePostDetails