document.write(`
<!-- footer -->
<footer>
    <div class="container">
      <div class="footerWrap">
        <div class="row">
          <div class="col-xl-5 col-md-4">
            <div class="footerLogo">
              <img src="img/new-img/logo.svg" alt="" />
            </div>
            <div class="dwnlBtn">
              <a href="coming-soon.html" title="" class="googlePlay"><img src="img/new-img/business-partner-img18.png" alt="" /></a>
              <a href="coming-soon.html" title="" class="appleStore"><img src="img/new-img/business-partner-img19.png" alt="" /></a>
            </div>
          </div>
          <div class="col-xl-7 col-md-8">
            <div class="row">
              <div class="col-md-6 col-xl-4">
                <div class="H300">Company</div>
                <ul class="footerMenu">
                  <li><a class="Subtitle200 semibold" href="about-us.html" title="">About Us</a></li>
                  <li><a class="Subtitle200 semibold" href="careers.html" title="">QCareers</a></li>
                  <li><a class="Subtitle200 semibold" href="privacy-policy.html" title="">Privacy and Policy</a></li>
                  <li><a class="Subtitle200 semibold" href="terms.html" title="">Terms and Conditions</a></li>
                </ul>
              </div>
              <div class="col-md-6 col-xl-4">
                <div class="H300">Products</div>
                <ul class="footerMenu">
                  <li><a class="Subtitle200 semibold" href="business-partner.html" title="">QBusiness Partner</a></li>
                  <li><a class="Subtitle200 semibold" href="coming-soon.html" title="">QCatalogue</a></li>
                  <li><a class="Subtitle200 semibold" href="business-partner.html#Discover-the-power" title="">QUP Payment Processing</a></li>
                </ul>
              </div>
              <div class="col-md-6 col-xl-4">
                <div class="H300">Contact</div>
                <ul class="footerMenu">
                  <li><a class="Subtitle200 semibold" href="javascript:void(0);" title=""><span id="copyMailFooter" onclick="onMailClick()">smallbusiness@myqclub.ca</span></a></li>
                  <li><a class="Subtitle200 semibold" href="javascript:void(0);" title=""><span id="copyNumber" onclick="onNumberClick('1-250-609-2868')">1-844-697-2582</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center footerBottom">
        <div class="col-md-6">
          <p class="Subtitle200 semibold">MyQClub © 2020. All rights reserved.</p>
        </div>
        <div class="col-md-6">
          <ul class="socialMedia">
            <li>
              <a href="https://www.linkedin.com/company/myqclub/" title="Linkedin" target="_blank"><img src="img/new-img/linkedin.svg" alt="" /></a>
            </li>
            <li>
              <a href="coming-soon.html" title="Twitter"><img src="img/new-img/twitter.svg" alt="" /></a>
            </li>
            <li>
              <a href="coming-soon.html" title="Facebook"><img src="img/new-img/facebook.svg" alt="" /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/qclubcanada/" title="Instagram" target="_blank"><img src="img/new-img/instagram.svg" alt="" /></a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-1.12.4.js" async></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" async></script>
    <script src="js/tooltip.js"></script>
    <script>
    $('#copyMailFooter').tooltip({
      trigger: 'click',
      placement: 'right',
    })
    $('#copyNumber').tooltip({
      trigger: 'click',
      placement: 'right',
    })
    $('#copyMailFooter').hover(
      function () {
        setTooltip('Click to copy', '#copyMailFooter')
      },
      function () {
        hideTooltip(0, '#copyMailFooter')
      }
    )
    $('#copyNumber').hover(
      function () {
        setTooltip('Click to copy', '#copyNumber')
      },
      function () {
        hideTooltip(0, '#copyMailFooter')
      }
    )
    function onMailClick(text){
      copyToClipboard('#copyMailFooter')
    }
    function onNumberClick(text){
      copyToClipboard('#copyNumber')
    }
    </script>
  </footer>
`);