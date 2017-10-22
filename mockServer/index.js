var db = require('./storeDB');
var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

var jwtSecret = 'JWT_SECRET';

var user = {
  email: 'user@example.com',
  password: 'secret'
};

//// store --------------------------------------------------------------------
var degrees = db.degrees;
var indexTimelines = db.indexTimelines
var indexPeriod = db.indexPeriod
var indexProfessor = db.indexProfessor
var indexSubject = db.indexSubject
var indexCourses = db.indexCourses
var indexDegrees = db.indexDegrees
//// --------------------------------------------------------------------------

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port =8081;

var router = express.Router();

router.post('/login', function(req, res){
  if(req.body.email == 'user@example.com' && req.body.password == 'secret'){
    var token = jwt.sign({email: user.email}, jwtSecret);
    res.send({token: token, user: user});
  }else {
    res.status(401)
  };
});

router.get('/degrees', function(req, res) {
  var dNames = degreesNames();
  var result = [];
  if(req.query.q === undefined){result = dNames}
  else{result = searchDegrees(dNames, req.query.q.toLowerCase());
  }
  res.json(result);
});

router.get('/degrees/:id', function(req, res){
  res.json(findDegree(req.params.id));
});

router.post('/degrees', function(req, res){
  indexDegrees++;
  var newDegree= {
    id: indexDegrees,
  	name: req.body.name,
  	subjects: [],
  	academicOffers:[]
  };
  degrees.push(newDegree);
  res.send("ok");
});

router.get('/academicOffer/:id', function(req, res){
  res.json(findAcademicOffer(req.params.id));
});

router.get('/academicOffers/:id', function(req, res){
  var degree = findDegree(req.params.id);
  res.json(degree.academicOffers);
});

router.post('/academicOffer', function(req, res){
  console.log(req.body)
  res.send("ok");
});

//// Aux
function findDegree(id){
  return degrees.find(degree =>{ return degree.id == id});
};

function findAcademicOffer(idAcademicOffer){
  var academicOffers = degrees.reduce( (acc, degree) => {return acc.concat(degree.academicOffers)}, []);
  return academicOffers.find(academicOffer => {
    return (academicOffer.id == idAcademicOffer)
  });
};

function degreesNames() {
  return degrees.map( degree =>{ return {id: degree.id, name: degree.name}});
};

function searchDegrees(dNames, str){
  var regularExpression = "("+str+")"
  return dNames.filter(degree => {
    return degree.name.toLowerCase().match(regularExpression)
  });
}

// START THE SERVER
app.use('/', router);
app.listen(port);
console.log('Starts on port ' + port);
