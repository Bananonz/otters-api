const express = require('express');
const app = express();
const count = require("quick.db")

function see(q) {
    return q[Math.floor(Math.random()*q.length)];
}

app.get('/', (req, res) => {
  const a = require("./assets/otters.json").otters
  res.json({"/otter": "to get a otter", "link": see(a), "db": `${a.length}`})                                            
  count.add(`reqs`, 1)
  count.add(`reqsotters`, 1)
})

app.get('/otter', (req, res) => {
  const a = require("./assets/otters.json").otters
  res.json({"status": "200", "link": see(a), "db": `${a.length}`})
  count.add(`reqs`, 1)
  count.add(`reqsotters`, 1)
})

app.get('/otterimg', (req, res) => {
  const a = require("./assets/otters.json").otters
  res.redirect(see(a))
  count.add(`reqs`, 1)
  count.add(`reqsotters`, 1)
})

app.get('/otter', (req, res) => {
  const a = require("./assets/otters.json").otters
  res.json({"status":"404", "link": see(a), "db": `${a.length}`})
  count.add(`reqs`, 1)
  count.add(`reqsotters`, 1)
})

app.listen(3000, () => {
  console.log('server started');
});
const a = require("./assets/otters.json").otters
console.log(a.length)
