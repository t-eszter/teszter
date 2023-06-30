class Footer extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback(){
    this.innerHTML = `
   <footer class="sub-bg m-0">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="item md-mb50">
                        <ul>
                            <li>
                                <span class="icon pe-7s-map-marker"></span>
                                <div class="cont">
                                    <h6>Social</h6>
                                    <a href="https://www.linkedin.com/in/testimo" target="_blank"><p>Linkedin</p></a>
                                </div>
                            </li>
                           <li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="item md-mb50">
                            <li>
                                <span class="icon pe-7s-mail"></span>
                                <div class="cont">
                                    <h6>Email</h6>
                                    <p>eszter@teszter.com</p>
                                </div>
                            </li>
                        <div class="title">
<!--                            <h5>Recent News</h5>-->
                        </div>
                        <ul>
                            <li>
<!--
                                <div class="img">
                                    <img src="img/blog/1.jpg" alt="">
                                </div>
                                <div class="sm-post">
                                    <p>The Start-Up Ultimate Guide to Make Your WordPress
                                        Journal.</p>
                                    <span class="date">14 sep 2021</span>
                                </div>
-->
                            </li>
                            <li>
<!--
                                <div class="img">
                                    <img src="img/blog/2.jpg" alt="">
                                </div>
                                <div class="sm-post">
                                    <p>The Start-Up Ultimate Guide to Make Your WordPress
                                        Journal.</p>
                                    <span class="date">14 sep 2021</span>
                                </div>
-->
                            </li>
                            <li>
<!--
                                <div class="subscribe">
                                    <input type="text" placeholder="Type Your Email">
                                    <span class="subs pe-7s-paper-plane"></span>
                                </div>
-->
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="item">
            <!--        
                        <div class="social">
                            <a href="#0"><i class="fab fa-linkedin"></i></a>
                            <a href="#0"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="copy-right">
                            <p>© 2021 Eszter Tóth</p>
                        </div>
-->
                            <li>
                                <span class="icon pe-7s-call"></span>
                                <div class="cont">
                                    <h6>Phone</h6>
                                    <p>+41797861124</p>
                                </div>
                            </li>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;
  }
}

customElements.define('footer-component', Footer);