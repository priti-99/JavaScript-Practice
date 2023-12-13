const puppteer = require("puppeteer");
let Page;
console.log("Before");

// link to visit -> https://pptr.dev/
// puppeteer Runs a headless Browser

const browserOpenPromise = puppteer.launch({ 
    headless: false,
    slowMo: true,
    defaultViewport: null,
    args: ["--start-maximized"]
 });

browserOpenPromise
    .then(function (browser) {
        // currently opend tabs
        const pagesArrpromise  = browser.pages();
        return pagesArrpromise;
   }).then(function (browserPages) {
        Page = browserPages[0];
        let gotoPromise = Page.goto("https://www.google.com/");
        return gotoPromise; 
    }).then(function (){
        // waiting foe the element to appear on the page
        let elementWaitPromise = Page.waitForSelector("input[type = 'text']", {visible: true});
        return elementWaitPromise;
    }).then(function() {
        // console.log("Reached Google Home Page");
        // type any element on that page -> selector
        let keysWillBeSendPromise = Page.type("input [type = 'text']", "pepcoding");
        return keysWillBeSendPromise;
    }).then(function () {
        // Page.keyboard to type special character
        let enterWillBePressed = Page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then (function (){
        let elementWaitPromise = Page.waitForSelector("LC20lb MBeuO DKV0Md", {visible: true});
        return elementWaitPromise;
    }).then(function(){
        // mouse
        let keysWillBeSendPromise = Page.type("LC20lb MBeuO DKV0Md");
        return keysWillBeSendPromise;
    }).catch(function (err){
        console.log(err);
    })

console.log("After");
