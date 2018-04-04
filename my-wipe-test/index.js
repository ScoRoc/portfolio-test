
const HOME = $('#home');
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
  setTimeout(() => { WORK.css('transform', 'rotate3d(1,0,0,0deg)') }, 1);
}

let homeToContact = () => {
  currentPage = 'contact'; //////// FIX THIS NAME
  pageIndicator.text(currentPage) /////////// REMOVE THIS
  CONTACT.removeClass('shift');
  setTimeout(() => { CONTACT.css('transform', 'translate(0,0)') }, 1);
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
  setTimeout(() => {
    ABOUT.css('transform', 'rotate(360deg)');
  }, 1);
  setTimeout( () => { HOME.css('opacity', '0') }, 1201);
}

let toHome = () => {
  if (currentPage === 'work') {
    currentPage = 'home';
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    WORK.css('transform', 'rotate3d(1,0,0,-180deg)');
    setTimeout( () => { WORK.addClass('shift') }, 1201);
  } else if (currentPage === 'contact') {
    currentPage = 'home';
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    CONTACT.css('transform', 'translate(100vw, 0)');
    setTimeout( () => { CONTACT.addClass('shift') }, 1201);
  } else if (currentPage === 'resume') {
    currentPage = 'home';
    //
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    //
  } else if (currentPage === 'about') {
    currentPage = 'home';
    pageIndicator.text(currentPage) /////////// REMOVE THIS
    // ABOUT.css('transform', 'rotate(180deg)');
    // setTimeout( () => { ABOUT.addClass('shift') }, 1201);
    HOME.css({
      'z-index': '20',
      'opacity': '1'
    });
    setTimeout( () => {
      ABOUT.addClass('shift');
      ABOUT.css('transform', 'rotate(180deg)');
    }, 1201);
    setTimeout( () => { HOME.css('z-index', '0') }, 1201);
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
