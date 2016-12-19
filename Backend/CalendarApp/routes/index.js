var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* Get Doctor Service. */
router.get('/calendarApp/v1/getDoctorDetails', function(req, res, next) {
    try {
            var doc_id = req.param('doc_id');
                  
        console.log(doc_id);
        
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('select D.doc_id,D.Doc_fname, D.doc_lname, D.phone from doctor D', [doc_id], function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resDoc = [];
                    for (var docIndex in rows) {
                        var docObj = rows[docIndex ];
                        resDoc .push(docObj);
                    }
                    res.json(resDoc);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get Doctor by id Service. */
router.get('/calendarApp/v1/getDoctorDetailsById', function(req, res, next) {
    try {
            var doc_id = req.param('doc_id');
                  
        console.log(doc_id);
        
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('select D.doc_id,D.Doc_fname, D.doc_lname, D.phone from doctor D where doc_id=?', [doc_id], function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resDoc = [];
                    for (var docIndex in rows) {
                        var docObj = rows[docIndex ];
                        resDoc .push(docObj);
                    }
                    res.json(resDoc);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Create Appointment Service. */
router.post('/calendarApp/v1/createAppointment', function(req,res,next){
try{
var reqObj = req.body;        
console.log(reqObj);
req.getConnection(function(err, conn){
if(err)
{
console.error('SQL Connection error: ', err);
return next(err);
}
else
{
var insertSql = "INSERT INTO appointment SET ?";
var insertValues = {
"doc_id" : reqObj.doc_id,
"time" : reqObj.time,
"subject" : reqObj.subject,
"notes" :reqObj.notes,
"date" : reqObj.date,
"p_name":reqObj.p_name
};
var query = conn.query(insertSql, insertValues, function (err, result){
if(err){
console.error('SQL error: ', err);
return next(err);
}
var apoint_id = result.insertId;
res.json({"apoint_id":apoint_id});
});
}
});
}
catch(ex){
console.error("Internal error:"+ex);
return next(ex);
}
});


/* Get Appointment by doctor id Service. */
router.get('/calendarApp/v1/getAppointmentByDocId', function(req, res, next) {
    try {
            var apoint_id= req.param('apoint_id');
                  var doc_id = req.param('doc_id');
                  
        console.log(apoint_id);
        console.log(doc_id);
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('select A.apoint_id,D.Doc_fname,D.doc_lname,D.phone,A.time,A.subject,A.notes,A.date,A.p_name from doctor D, appointment A where D.doc_id = A.doc_id and A.doc_id = ?', [doc_id], function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resapp = [];
                    for (var appIndex in rows) {
                        var appObj = rows[appIndex ];
                        resapp .push(appObj);
                    }
                    res.json(resapp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Get Appointment Service. */
router.get('/calendarApp/v1/getAppointment', function(req, res, next) {
    try {
            var apoint_id= req.param('apoint_id');
                  var doc_id = req.param('doc_id');
                  
        console.log(apoint_id);
        console.log(doc_id);
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
                conn.query('select A.apoint_id,D.Doc_fname,D.doc_lname,D.phone,A.time,A.subject,A.notes,A.date,A.p_name from doctor D, appointment A where D.doc_id = A.doc_id', [doc_id], function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    var resapp = [];
                    for (var appIndex in rows) {
                        var appObj = rows[appIndex ];
                        resapp .push(appObj);
                    }
                    res.json(resapp);
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});

/* Delete Appointment Service. */
router.post('/calendarApp/v1/deleteAppointment',function(req,res,next){
try{
	var apoint_id= req.param('apoint_id');
var reqObj = req.body;        
console.log(reqObj);
req.getConnection(function(err, conn){
if(err)
{
console.error('SQL Connection error: ', err);
return next(err);
}
else
{
var deleteSql = "DELETE FROM appointment where apoint_id = ?";

var query = conn.query(deleteSql,[apoint_id],function (err, result){
if(err){
console.error('SQL error: ', err);
return next(err);
}
//var apoint_id = result.insertId;
res.json({"apoint_id Deleted":apoint_id});
});
}
});
}
catch(ex){
console.error("Internal error:"+ex);
return next(ex);
}
});



/* Update Appointment Service. */
router.post('/calendarApp/v1/updateAppointment', function(req,res,next){
try{
	var apoint_id= req.param('apoint_id');
var reqObj = req.body;        
console.log(reqObj);
req.getConnection(function(err, conn){
if(err)
{
console.error('SQL Connection error: ', err);
return next(err);
}
else
{
var updateSql = "UPDATE appointment SET doc_id=?,time=?,subject=?,notes=?,date=?,p_name=? where apoint_id=?";
var query = conn.query(updateSql,[reqObj.doc_id,reqObj.time,reqObj.subject,reqObj.notes,reqObj.date,reqObj.p_name,reqObj.apoint_id],function (err, result){
if(err){
console.error('SQL error: ', err);
return next(err);
}

//var apoint_id = result.insertId;
res.json({"apoint_id updated":apoint_id});
})
console.log(query);
;
}
});
}
catch(ex){
console.error("Internal error:"+ex);
return next(ex);
}
});