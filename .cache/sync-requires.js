const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\pauca\\Documents\\GitHub\\MyWebsite\\.cache\\dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("C:\\Users\\pauca\\Documents\\GitHub\\MyWebsite\\src\\pages\\about.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("C:\\Users\\pauca\\Documents\\GitHub\\MyWebsite\\src\\pages\\contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\pauca\\Documents\\GitHub\\MyWebsite\\src\\pages\\index.js")))
}

