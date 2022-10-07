
const express = require('express')
const app = express()
app.use(express.json({extended: true}))
const port = 7050

let differenceOne = {
  clientError: "These are client side errors",
  serverError: "They are server side errors",
};

let differenceTwo = {
  clientError: "They are caused when a client provides unmatching parameters",
  serverError: "They are caused by errors or bugs from the code or the backend logic",
};

let differenceThree = {
  clientError: "Client errors can be corrected when the end user provides the required parameter",
  serverError: "Server errors must be fixed in the backend code",
};

let differenceFour = {
  clientError: "They can also occur when end users tries to access restricted pasrts of a program",
  serverError: "They are not based on end user control as they originate from server-side",
};

let differenceFive = {
  clientError: "D for Donkey",
  serverError: "C for Carnage",
};

// Error Code Assignment
app.get('/ok', (req, res) => {
  res.status(200).json({status:"OK"})
})
app.get('/created', (req, res) => {
  res.status(201).json({status:"Created"})
})
app.get('/accepted', (req, res) => {
  res.status(202).json({status:"Accepted"})
})
app.get('/moved-permanently', (req, res) => {
  res.status(301).json({status:"Moved Permanently"})
})
app.get('/found', (req, res) => {
  res.status(302).json({status:"Found"})
})
app.get('/not-modified', (req, res) => {
  res.status(304).json({status:"Not Modified"})
})
app.get('/bad-request', (req, res) => {
  res.status(400).json({status:"Bad Request"})
})
app.get('/unauthorised', (req, res) => {
  res.status(401).json({status:"Unauthorised"})
})
app.get('/payment-required', (req, res) => {
  res.status(402).json({status:"Payment Required"})
})
app.get('/forbidden', (req, res) => {
  res.status(403).json({status:"Forbidden"})
})
app.get('/not-found', (req, res) => {
  res.status(404).json({status:"Not Found"})
})
app.get('/conflict', (req, res) => {
  res.status(409).json({status:"Conflict"})
})
app.get('/not-acceptable', (req, res) => {
  res.status(406).json({status:"Not Acceptable"})
})
app.get('/gone', (req, res) => {
  res.status(410).json({status:"Gone"})
})
app.get('/too-many-requests', (req, res) => {
  res.status(429).json({status:"Too Many Requests"})
})
app.get('/upgrade-required', (req, res) => {
  res.status(426).json({status:"Upgrade Required"})
})
app.get('/internal-server-error', (req, res) => {
  res.status(500).json({status:"Internal Server Error"})
})
app.get('/not-implemented', (req, res) => {
  res.status(501).json({status:"Not Implemented"})
})
app.get('/bad-gateway', (req, res) => {
  res.status(502).json({status:"Bad Gateway"})
})
app.get('/gateway-timeout', (req, res) => {
  res.status(504).json({status:"Gateway Timeout"})
})

// for question four
app.post('/question-four', (req, res) => {
  let data = {}, diff = req.body.difference;

  let differences = ['one', 'two', 'three', 'four', 'five'];
  let validDiff = differences.find((each) => each === diff);

  if (!validDiff) {
    res.status(400)
      .json({ status: "bad request", message: "Invalid Parameter"});
  } else {

    if (diff === "one") data = differenceOne;
    else if (diff === "two") data = differenceTwo;
    else if (diff === "three") data = differenceThree;
    else if (diff === "four") data = differenceFour;
    else if (diff === "five") data = differenceFive;
    res.status(200)
      .json({status:"OK", data: data })
  }
})

// for question five
app.get('/question-five/:diff', (req, res) => {
  let data = {}, diff = req.params.diff;

  let differences = ['one', 'two', 'three', 'four', 'five'];
  let validDiff = differences.find((each) => each === diff);

  if (!validDiff) {
    res.status(400)
      .json({ status: "bad request", message: "Invalid Parameter"});
  } else {

    if (diff === "one") data = differenceOne;
    else if (diff === "two") data = differenceTwo;
    else if (diff === "three") data = differenceThree;
    else if (diff === "four") data = differenceFour;
    else if (diff === "five") data = differenceFive;
    res.status(200)
      .json({status:"OK", data: data })
  }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
