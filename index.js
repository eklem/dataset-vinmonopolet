// Modules and stuff required
var gsheets = require('gsheets')
var fs = require('fs-extra')
var gheetsKey = '15htqMLMdbxi4csfmOyR1r6aMfZO2R2bOBacS834kfvU'
var gheetsWorkseeht = '15htqMLMdbxi4csfmOyR1r6aMfZO2R2bOBacS834kfvU'
var columns = ['Varenummer','Varenavn','Volum','Pris','Literpris','Varetype','Farge','Lukt','Smak','Land','Distsrikt','Underdistrikt','Argang','Rastoff','Alkohol']
var filter = 'Rødvin' // '' to not filter

// Get csv-file as 'data' (object)
gsheets.getWorksheet(config.gsheetsKey, config.gsheetsWorksheet, function(err, result) {
  if (err) {
    console.dir(err)
  }
  // Do stuff to object.
  console.dir(JSON.stringify(result.data))
  // Iterating through rows of data from spreadsheet
  //for (var i=0; i<result.data.length; i++) {
  //  var obj = result.data[i]
  //}
  
  // Store object in JSON file

}
