const express = require("express");
const cors = require("cors"); 

const app = express();
const PORT = process.env.PORT || 8080;


/// Middleware
app.use(cors()); 
app.use(express.json());

/// Const routers
// Template:
//const videoRouter = require("./routes/api/videos");


/// Simple API Documentation
app.get("/", (req, res) => {
    res.json({
        msg: "You can perform these requests from this API:"
    });
})


/// Link Route Files
// Template: 
// app.use("/videos", videoRouter);


app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`);
})