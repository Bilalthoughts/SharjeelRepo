import React from "react";
import HeroSection from "../components/HeroSection";

function BlogDetails() {

    return (
        <>
    <HeroSection pageTitle={'Blog Details'}/>
            {/* =========================== 4. Blog Details Section =========================================== */}
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        {/* Article Area */}
                        <div className="col-xl-9">
                            <div className="article-area">
                                <div className="article-title">
                                    <h2>
                                        Why You Should Hire UI / UX Guy Before You Work On Your Product
                                    </h2>
                                </div>
                                <div className="article-details">
                                    <div className="article-author">
                                        <img src="assets/images/clients/client_02.png" alt="Habu" />
                                        <h6>
                                            <a href="blog.php">Jason Harper</a> |{" "}
                                            <a href="blog.php">UI / UX Design</a> |{" "}
                                            <a href="blog.php">August 1, 2020</a>
                                        </h6>
                                    </div>
                                    <div className="share-article">
                                        <h6>SHARE:</h6>
                                        <a href="https://www.facebook.com">
                                            <i className="fab fa-facebook" />
                                        </a>
                                        <a href="https://twitter.com/">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a href="https://www.google.com/">
                                            <i className="fab fa-google-plus-g" />
                                        </a>
                                        <a href="https://www.behance.net/">
                                            <i className="fab fa-behance" />
                                        </a>
                                    </div>
                                </div>
                                <div className="article-thumbnail">
                                    <img src="assets/images/blog/post_details.png" alt="Habu" />
                                </div>
                                <div className="article-body">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                                        reprehenderit veniam quaerat enim, temporibus praesentium
                                        architecto corrupti? Odio illo ut nostrum quos iusto, nesciunt
                                        exercitationem molestias. Iste est hic quia voluptas deserunt
                                        deleniti eligendi sit illum ea quasi. Officia laborum nihil
                                        molestias, quam recusandae aut sed nesciunt rem facere atque
                                        tenetur reiciendis tempora delectus ea expedita eveniet
                                        voluptatum eos veritatis magnam error temporibus! <br />
                                        <br />
                                        Inventore alias dolorum, eveniet recusandae maxime obcaecati
                                        saepe magnam ducimus? Sint hic quas magnam dolorum id architecto
                                        alias sunt saepe temporibus iste nobis eaque, molestias ullam ab
                                        ducimus corporis officiis velit consectetur sequi! Et fugiat
                                        maxime omnis odio quam aliquid magni praesentium iure iste
                                        necessitatibus rerum officia ea corporis consectetur fugit, enim
                                        laudantium vitae repellendus. Alias, saepe omnis? Eum explicabo
                                        temporibus pariatur. Pariatur deleniti commodi cumque magni
                                        perspiciatis voluptatibus molestiae laboriosam iste consectetur
                                        ducimus eveniet possimus enim, consequatur quisquam, ex velit
                                        nam. Ipsa neque eligendi dolor, explicabo id quo, labore minima
                                        dicta sunt totam omnis. Rem sint distinctio, nesciunt vitae
                                        aliquid nobis molestiae illo eligendi perspiciatis delectus
                                        deserunt mollitia, qui hic ea voluptates fugit quasi quod minus
                                        ducimus. Excepturi magnam laboriosam ut eum maiores, culpa vitae
                                        dolore aliquid alias illum enim est! Doloribus ducimus culpa
                                        eveniet blanditiis!
                                    </p>
                                    <h2 className="article-subheading">
                                        Why You Should Hire UI / UX Guy Before You Work On Your Product
                                    </h2>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                                        reprehenderit veniam quaerat enim, temporibus praesentium
                                        architecto corrupti? Odio illo ut nostrum quos iusto, nesciunt
                                        exercitationem molestias. Iste est hic quia voluptas deserunt
                                        deleniti eligendi sit illum ea quasi. Officia laborum nihil
                                        molestias, quam recusandae aut sed nesciunt rem facere atque
                                        tenetur reiciendis tempora delectus ea expedita eveniet
                                        voluptatum eos veritatis magnam error temporibus! <br />
                                        <br />
                                        Inventore alias dolorum, eveniet recusandae maxime obcaecati
                                        saepe magnam ducimus? Sint hic quas magnam dolorum id architecto
                                        alias sunt saepe temporibus iste nobis eaque, molestias ullam ab
                                        ducimus corporis officiis velit consectetur sequi! Et fugiat
                                        maxime omnis odio quam aliquid magni praesentium iure iste
                                        necessitatibus rerum officia ea corporis consectetur fugit, enim
                                        laudantium vitae repellendus. Alias, saepe omnis? Eum explicabo
                                        temporibus pariatur. Pariatur deleniti commodi cumque magni
                                        perspiciatis voluptatibus molestiae laboriosam iste consectetur
                                        ducimus eveniet possimus enim, consequatur quisquam, ex velit
                                        nam. Ipsa neque eligendi dolor, explicabo id quo, labore minima
                                        dicta sunt totam omnis. Rem sint distinctio, nesciunt vitae
                                        aliquid nobis molestiae illo eligendi perspiciatis delectus
                                        deserunt mollitia, qui hic ea voluptates fugit quasi quod minus
                                        ducimus. Excepturi magnam laboriosam ut eum maiores, culpa vitae
                                        dolore aliquid alias illum enim est! Doloribus ducimus culpa
                                        eveniet blanditiis!
                                    </p>
                                    <div className="article-tags">
                                        <h6>TAGS: </h6>
                                        <a href="blog.php">UI / UX</a>
                                        <span>,</span>
                                        <a href="blog.php">WEB DESIGN</a>
                                    </div>
                                </div>
                                <div className="article-navigation">
                                    <a href="blog-details.php">
                                        <i className="fas fa-arrow-alt-circle-left" /> PREVIOUS
                                    </a>
                                    <a href="blog-details.php" className="float-right">
                                        NEXT <i className="fas fa-arrow-alt-circle-right" />
                                    </a>
                                </div>
                                {/* Comment Area */}
                                <div className="comment-area">
                                    <h2>
                                        COMMENT: <span>2</span>
                                    </h2>
                                    <div className="comment-box">
                                        <div className="comment-author-thumbnail">
                                            <img
                                                src="assets/images/team-members/03-team-member-02.png"
                                                alt="Habu"
                                            />
                                        </div>
                                        <div className="comment-body">
                                            <div className="comment-details">
                                                <a href="blog.php">
                                                    <h3>Jason Statham</h3>
                                                </a>
                                                <a href="blog.php" className="comment-date">
                                                    July 06th, 2017
                                                </a>
                                            </div>
                                            <div className="main-comment">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Dicta assumenda expedita ipsum impedit blanditiis
                                                    cupiditate quo illo saepe autem magni, aspernatur
                                                    exercitationem, consequuntur quas iste!
                                                </p>
                                                <button>REPLY</button>
                                            </div>
                                            <div className="comment-box">
                                                <div className="comment-author-thumbnail">
                                                    <img
                                                        src="assets/images/team-members/03-team-member-04.png"
                                                        alt="Habu"
                                                    />
                                                </div>
                                                <div className="comment-body">
                                                    <div className="comment-details">
                                                        <a href="blog.php">
                                                            <h3>Herbie Darbage</h3>
                                                        </a>
                                                        <a href="blog.php" className="comment-date">
                                                            July 06th, 2017
                                                        </a>
                                                    </div>
                                                    <div className="main-comment">
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit. Dicta assumenda expedita ipsum impedit
                                                            blanditiis cupiditate quo illo saepe autem magni,
                                                            aspernatur exercitationem, consequuntur quas iste!
                                                        </p>
                                                        <button>REPLY</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box">
                                                <div className="comment-author-thumbnail">
                                                    <img
                                                        src="assets/images/team-members/03-team-member-03.png"
                                                        alt="Habu"
                                                    />
                                                </div>
                                                <div className="comment-body">
                                                    <div className="comment-details">
                                                        <a href="blog.php">
                                                            <h3>Jason Statham</h3>
                                                        </a>
                                                        <a href="blog.php" className="comment-date">
                                                            July 06th, 2017
                                                        </a>
                                                    </div>
                                                    <div className="main-comment">
                                                        <p>
                                                            Lorem ipsum dolor sit amet consectetur adipisicing
                                                            elit. Dicta assumenda expedita ipsum impedit
                                                            blanditiis cupiditate quo illo saepe autem magni,
                                                            aspernatur exercitationem, consequuntur quas iste!
                                                        </p>
                                                        <button>REPLY</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-box">
                                        <div className="comment-author-thumbnail">
                                            <img
                                                src="assets/images/team-members/03-team-member-01.png"
                                                alt="Habu"
                                            />
                                        </div>
                                        <div className="comment-body">
                                            <div className="comment-details">
                                                <a href="blog.php">
                                                    <h3>Jason Statham</h3>
                                                </a>
                                                <a href="blog.php" className="comment-date">
                                                    July 06th, 2017
                                                </a>
                                            </div>
                                            <div className="main-comment">
                                                <p>
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Dicta assumenda expedita ipsum impedit blanditiis
                                                    cupiditate quo illo saepe autem magni, aspernatur
                                                    exercitationem, consequuntur quas iste!
                                                </p>
                                                <button>REPLY</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Comment Input */}
                                    <div className="comment-input">
                                        <h2>LEAVE A COMMENT</h2>
                                        <div className="comment-form">
                                            <div className="row">
                                                <form action="#">
                                                    <div className="col-xl-6">
                                                        <input type="text" placeholder="Name" />
                                                    </div>
                                                    <div className="col-xl-6">
                                                        <input type="text" placeholder="Email" />
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <textarea
                                                            placeholder="Your Message"
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <div className="col-xl-12">
                                                        <button className="large-blue-button">
                                                            POST COMMENT
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Area */}
                        <div className="col-xl-3">
                            <div className="row sidebar-area">
                                {/* search */}
                                <div className="col-xl-12 search-area">
                                    <h2 className="sidebar-widget-title">Search</h2>
                                    <div className="search-form">
                                        <input type="text" placeholder="Search anything" />
                                        <button>
                                            <i className="fas fa-search" />
                                        </button>
                                    </div>
                                </div>
                                {/* categories */}
                                <div className="col-xl-12 categories-area">
                                    <h2 className="sidebar-widget-title">Categories</h2>
                                    <ul>
                                        <li>
                                            <a href="blog-details.php">Smartphones</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.php">Headsets</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.php">Computers</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.php">Drones</a>
                                        </li>
                                        <li>
                                            <a href="blog-details.php">Smartwatch</a>
                                        </li>
                                    </ul>
                                </div>
                                {/* Recent Posts */}
                                <div className="col-xl-12 recent-posts-area">
                                    <h2 className="sidebar-widget-title">Recent Posts</h2>
                                    <div className="recent-post">
                                        <div className="recent-post-thumbnail">
                                            <a href="blog-details.php">
                                                <img src="assets/images/blog/recent_post_1.png" alt="Habu" />
                                            </a>
                                        </div>
                                        <div className="recent-post-title">
                                            <a href="blog-details.php">
                                                <h3>Nam ac elit a ante commodo</h3>
                                            </a>
                                            <span>by </span>
                                            <a href="blog.php">admin</a>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-thumbnail">
                                            <a href="blog-details.php">
                                                <img src="assets/images/blog/recent_post_2.png" alt="Habu" />
                                            </a>
                                        </div>
                                        <div className="recent-post-title">
                                            <a href="blog-details.php">
                                                <h3>Nam ac elit a ante commodo</h3>
                                            </a>
                                            <span>by </span>
                                            <a href="blog.php">admin</a>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-thumbnail">
                                            <a href="blog-details.php">
                                                <img src="assets/images/blog/recent_post_3.png" alt="Habu" />
                                            </a>
                                        </div>
                                        <div className="recent-post-title">
                                            <a href="blog-details.php">
                                                <h3>Nam ac elit a ante commodo</h3>
                                            </a>
                                            <span>by </span>
                                            <a href="blog.php">admin</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Popular Tags */}
                                <div className="col-xl-12 popular-tags">
                                    <h2 className="sidebar-widget-title">Popular Tags</h2>
                                    <a href="blog.php">UI/UX</a>
                                    <a href="blog.php">WEB</a>
                                    <a href="blog.php">DEVELOP</a>
                                    <a href="blog.php">AGENCY</a>
                                    <a href="blog.php">SMM</a>
                                </div>
                                {/* ad banner */}
                                <div className="col-xl-12 ad-banner">
                                    <a href="index.php">
                                        <img src="assets/images/banner/banner_advert_1.png" alt="Habu" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* =========================== 5. Subscribe Section =========================================== */}
            <div className="custom-projects">
                <div className="container d-lg-flex align-items-center">
                    <div className="section-heading">
                        <h1>Subscribe</h1>
                        <p>
                            We have people of multiple kind in the house. Together we can provide
                            high quality work to satisfy you. Lorem ipsum dolor sit amet
                            consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="subscribe-form">
                        <form action="#">
                            <input type="email" placeholder="INFO@EXAMPLE.COM" />
                            <button type="submit">GET A QUOTE</button>
                        </form>
                    </div>
                </div>
                <div className="custom-projects-shape-2">
                    <img src="assets/images/shapes/shape-02.png" alt="Habu" />
                </div>
                <div className="custom-projects-circle-1">
                    <img
                        src="assets/images/shapes/shape-circle.png"
                        className="wow animate__animated animate__pulse animate__infinite"
                        alt="Habu"
                    />
                </div>
                <div className="custom-projects-circle-2">
                    <img src="assets/images/shapes/shape-circle.png" alt="Habu" />
                </div>
                <div className="custom-projects-circle-3">
                    <img
                        src="assets/images/shapes/shape-circle.png"
                        className="wow animate__animated animate__pulse animate__infinite"
                        alt="Habu"
                    />
                </div>
                <div className="custom-projects-circle-4" />
            </div>
        </>

    );
}
export default BlogDetails;