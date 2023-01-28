const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.render('test.ejs');
});

// var Iamport = require('iamport');
// var iamport = new Iamport({
//   impKey: '2658352515381345',
//   impSecret: 'HsWpxRIfUdT9iNItlK6NLD3N5r8jgIWPdXCfmt7m0mM2qq0clxIGvlBuCf6qCri8ZzRXsDDoYFvAg1HO',
// });

// app.get('/payments/status/all', (req, res) => {
//   iamport.payment
//     .getByStatus({
//       payment_status: 'paid',
//     })
//     .then(function (result) {
//       res.render('payments_list', { list: result.list });
//     })
//     .catch(function (error) {
//       console.log(error);
//       res.send(error);
//     });
// });

app.listen(port, () => {
  console.log('open 8080 server', port);
});
