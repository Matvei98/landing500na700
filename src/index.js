import './index.scss';
import logo from "./img/logo.png";
import slide1 from "./img/img1.png";
import slide2 from "./img/img2.png";
import slide3 from "./img/img3.png";
import post1 from "./img/post1.png";
import post2 from "./img/post2.png";
import post3 from "./img/post3.png";
import post4 from "./img/post4.png";
import post5 from "./img/post5.png";
import post6 from "./img/post6.png";
import vk from "./img/vk.png";
import facebook from "./img/facebook.png";
import tiktok from "./img/tiktok.png";
import youtube from "./img/youtube.png";
import swiperBtnNext from "./img/Arrow 2.png";
import swiperBtnPrev from "./img/Arrow 1.png";

// img
const Logo = document.getElementById("logo");
const Slide1 = document.getElementById("slide1");
const Slide2 = document.getElementById("slide2");
const Slide3 = document.getElementById("slide3");
const Post1 = document.getElementById("post1");
const Post2 = document.getElementById("post2");
const Post3 = document.getElementById("post3");
const Post4 = document.getElementById("post4");
const Post5 = document.getElementById("post5");
const Post6 = document.getElementById("post6");
const Vk = document.getElementById("vk");
const Facebook = document.getElementById("facebook");
const Tiktok = document.getElementById("tiktok");
const Youtube = document.getElementById("youtube");
const SwiperBtnNext = document.getElementById("swiper-btn-next")
const SwiperBtnPrev = document.getElementById("swiper-btn-prev")


Logo.src = logo;
Slide1.src = slide1;
Slide2.src = slide2;
Slide3.src = slide3;
Post1.src = post1;
Post2.src = post2;
Post3.src = post3;
Post4.src = post4;
Post5.src = post5;
Post6.src = post6;
Vk.src = vk;
Facebook.src = facebook;
Tiktok.src = tiktok;
Youtube.src = youtube;
SwiperBtnNext.src = swiperBtnNext;
SwiperBtnPrev.src = swiperBtnPrev;




const accordion = require("./js/accordian");
const phoneMask = require("./js/maskInput");
const swiper = require("./js/swiper");
const burger = require('./js/burger');