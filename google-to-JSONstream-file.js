// Modules and stuff required
const gsheets = require('gsheets')
const fs = require('fs-extra')
const JSONStream = require('JSONStream')
const gsheetsKey = '15htqMLMdbxi4csfmOyR1r6aMfZO2R2bOBacS834kfvU'
const gsheetsWorksheet = 'test'
const columns = ['Varenummer','Varenavn','Volum','Pris','Literpris','Varetype','Farge','Lukt','Smak','Land','Distsrikt','Underdistrikt','Argang','Rastoff','Alkohol']

// Get csv-file as 'data' (object)
gsheets.getWorksheet(gsheetsKey, gsheetsWorksheet, function(err, result) {
  if (err) {
    console.dir(err)
  }
  // Iterating through rows of data from spreadsheet
//  for (var i=0; i<result.data.length; i++) {
  for (var i=0; i<1; i++) {
    //var obj = result.data[i]
    console.log(result.data[i])
    for (var k in result.data[i]){
      if (typeof result.data[i][k] !== 'function') {
        console.log("Key is " + k + ", value is" + result.data[i][k]);
      }
    }
  }
  // Store object in JSON file

})
