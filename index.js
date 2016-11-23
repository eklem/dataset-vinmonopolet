// Modules and stuff required
var gsheets = require('gsheets')
var fs = require('fs-extra')
var gsheetsKey = '15htqMLMdbxi4csfmOyR1r6aMfZO2R2bOBacS834kfvU'
var gsheetsWorksheet = 'redwine'
var columns = ['Varenummer','Varenavn','Volum','Pris','Literpris','Varetype','Farge','Lukt','Smak','Land','Distsrikt','Underdistrikt','Argang','Rastoff','Alkohol']

// Get csv-file as 'data' (object)
gsheets.getWorksheet(gsheetsKey, gsheetsWorksheet, function(err, result) {
  if (err) {
    console.dir(err)
  }
  // Iterating through rows of data from spreadsheet
  for (var i=0; i<result.data.length; i++) {
    //var obj = result.data[i]
    console.log(result.data[i])
  }
  // Store object in JSON file

})
