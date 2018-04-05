
const WORK = $('#work');
const CONTACT = $('#contact');
const RESUME = $('#resume');
const ABOUT = $('#about');

let currentPage = 'home';
let pageIndicator = $('#page-indicator');

let homeToWork = () => {
  currentPage = 'work'; //////// FIX THIS NAME
  pageIndicator.text(currentPage) /////////// REMOVE THIS
  WORK.removeClass('shift');
  setTimeout(() => { WORK.css('transform', 'rotate3d(1,0,0,0deg)') },20);
}

let homeToContact = () => {
  currentPage = 'contact'; //////// FIX THIS NAME
  pageIndicator.text(currentPage) /////////// REMOVE THIS
  CONTACT.removeClass('shift');
  setTimeout(() => { CONTACT.css('transform', 'translate(0,0)') },20);
}

let homeToResume = () => {
 //
 currentPage = 'resume'; //////// FIX THIS NAME
 pageIndicator.text(currentPage) /////////// REMOVE THIS
 //
}

let homeToAbout = () => {
  currentPage = 'about'; //////// FIX THIS NAME
  pageIndicator.text(currentPage) /////////// REMOVE THIS
  ABOUT.removeClass('shift');
  setTimeout(() => { ABOUT.css('transform', 'rotate(360deg)') }, 20);
}

let toHome = () => {
  if (currentPage === 'work') {
    currentPage = 'home';
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    WORK.css('opacity', '0');
    setTimeout( () => {
      WORK.addClass('shift');
      WORK.css('transform', 'rotate3d(1,0,0,-180deg)');
      WORK.css('opacity', '1');
    }, 1201);
  } else if (currentPage === 'contact') {
    currentPage = 'home';
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    CONTACT.css('opacity', '0');
    setTimeout( () => {
      CONTACT.addClass('shift');
      CONTACT.css('transform', 'translate(100vw, 0)');
      CONTACT.css('opacity', '1');
    }, 1201);
  } else if (currentPage === 'resume') { ///////////////
    currentPage = 'home';
    //
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    //
  } else if (currentPage === 'about') {
    currentPage = 'home';
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    ABOUT.css('opacity', '0');
    setTimeout( () => {
      ABOUT.addClass('shift');
      ABOUT.css('transform', 'rotate(180deg)');
      ABOUT.css('opacity', '1');
    }, 1201);
  }
}

let throughToWork = () => {
  toHome();
  setTimeout(homeToWork, 1250);
}

let throughToContact = () => {
  toHome();
  setTimeout(homeToContact, 1250);
}

let throughToResume = () => {
  toHome();
  setTimeout(homeToResume, 1250);
}

let throughToAbout = () => {
  toHome();
  setTimeout(homeToAbout, 1250);
}

$('.home-to-work').on('click', homeToWork);
$('.home-to-contact').on('click', homeToContact);
$('.home-to-about').on('click', homeToAbout);
$('.to-home').on('click', toHome);
$('.through-to-work').on('click', throughToWork);
$('.through-to-contact').on('click', throughToContact);
$('.through-to-about').on('click', throughToAbout);
