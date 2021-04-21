document.write(`\
\
<header id="header" class="header">
<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="index.html">
      <!--     <img class="logo-black" src="img/logo.svg" alt=""> -->
      <img class="" src="img/small-logo.svg" alt="" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span></span>
      <span></span>
      <span class="mb-0"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" href="business-partner.html"> QBusiness Partner </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="about-us.html"> About us </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact-us.html">Contact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="coming-soon.html">QCatalogue</a>
        </li>
        <li class="menu-right nav-item">
          <a class="register nav-link" href=${baseMarketingLink}/registration target="_blank">QBusiness Register</a>
        </li>
        <li class="nav-item">
          <a class="login redGradientBtn nav-link" href="${baseMarketingLink}/" target="_blank">Business Login</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
</header>\
\
`);
