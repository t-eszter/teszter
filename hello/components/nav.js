class Nav extends HTMLElement {
  constructor() {
    super();
  }

connectedCallback(){
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg light">
        <div class="container">

            <!-- Logo -->
            <a class="logo" href="index.html">
                <img src="img/ET_logo.svg" alt="logo">
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="icon-bar"><i class="fas fa-bars"></i></span>
            </button>

            <!-- navbar links -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#UX-case-studies">UX Case Studies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="visuals.html">Visuals</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="dev.html">Dev</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
  }
}

customElements.define('nav-component', Nav);