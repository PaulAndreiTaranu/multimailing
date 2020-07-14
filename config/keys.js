if (process.env.NODE_ENV === "production") {
   module.exports = require("./prod");
} else {
   module.exports = require("./dev");
}

// PROD STUFF
// googleClient: 762237509201-1kkigf9l8ul4nveojss27ls8q94eth3g.apps.googleusercontent.com
// googleSecret: -b19oWDHRzllRwoWeAv1WuvP
