module.exports = (function () {
  var elCookieNoticeAccept = document.createElement('a')
  elCookieNoticeAccept.className = 'cookie-notice__accept'
  elCookieNoticeAccept.innerHTML = 'ACCEPT'

  var elCookieNotice = document.createElement('div')
  elCookieNotice.className = 'cookie-notice'
  elCookieNotice.innerHTML = 'This site uses cookies to function. Use of the site implies your acceptance. '
  elCookieNotice.appendChild(elCookieNoticeAccept)

  if (!localStorage.cookieNoticeAccept || +localStorage.cookieNoticeAccept !== 1) {
    if (document.addEventListener) {
      elCookieNoticeAccept.addEventListener('click', setAndHideCookieNotice)
    } else {
      elCookieNoticeAccept.attachEvent('onclick', setAndHideCookieNotice)
    }

    document.body.appendChild(elCookieNotice)
  }

  function setAndHideCookieNotice () {
    localStorage.cookieNoticeAccept = 1
    document.body.removeChild(elCookieNotice)
  }

});
