const express = require("express")
const APP_SERVER = express();

APP_SERVER.use("/bus",require("./Routes/Busroute"))
APP_SERVER.use("/travel",require("./Routes/Travelroute"))
APP_SERVER.use("/place",require("./Routes/Placeroute"))
APP_SERVER.use("/bustype",require("./Routes/Btyperoute"))
APP_SERVER.use("/usermain",require("./Routes/Userroute"))
APP_SERVER.use("/searchft",require("./Routes/Searchroute"))
APP_SERVER.use("/busname",require("./Routes/Busnamer"))
module.exports = APP_SERVER;

