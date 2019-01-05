var config = require('./config'),
    express = require('express'),
    mongoose 		= require('mongoose'),
    bodyParser      = require("body-parser"),
    app 			= express(),
    apiRouter     	= express.Router(),
    path 			= require('path'),
    connection 		= mongoose.connect(config.database, { useMongoClient: true }),
    iq    = require('./models/iq');

/* Manage CORS Access for ALL requests/responses */
app.use(function(req, res, next)
{
   res.setHeader('Access-Control-Allow-Origin', '*');

   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

apiRouter.get('/iq/snr', function(req, res)
{
      iq.find({var:'snr'},(err, recs) => 
   {
      if (err)
      {
         console.dir(err);
      } 

      res.json({ records: recs });    

   });
});
apiRouter.get('/iq/gain', function(req, res)
{
      iq.find({var:'gain'},(err, recs) => 
   {
      if (err)
      {
         console.dir(err);
      } 

      res.json({ records: recs });    

   });
});


    app.use('/api', apiRouter);

    app.listen(config.port);