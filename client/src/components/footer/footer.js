import React from "react";

const FooterPage = () => {
    return (


        <footer class="page-footer fixed-bottom font-small morpheus-den-gradient pt-4">


            <div class="container">

                <ul class="list-unstyled list-inline text-center">
                    <li class="list-inline-item">
                        <a class="btn-floating btn-fb mx-1" href="/#">
                            <i class="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-tw mx-1" href="/#">
                            <i class="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-gplus mx-1" href="/#">
                            <i class="fab fa-google-plus-g"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-li mx-1" href="/#">
                            <i class="fab fa-linkedin-in"> </i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a class="btn-floating btn-dribbble mx-1" href="/#">
                            <i class="fab fa-dribbble"> </i>
                        </a>
                    </li>
                </ul>


            </div>



            <div class="footer-copyright text-center py-3">{new Date().getFullYear()}© Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>


        </footer>
    )
}

export default FooterPage;