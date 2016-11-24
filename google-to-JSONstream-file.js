// Modules and stuff required
const gsheets = require('gsheets')
const fs = require('fs-extra')
const JSONStream = require('JSONStream')
const gsheetsKey = '15htqMLMdbxi4csfmOyR1r6aMfZO2R2bOBacS834kfvU'
const gsheetsWorksheet = 'redwine' // 'products' (all), 'redwine', 'whitewine', 'sparkling' and 'test' available so far
const columns = ['Varenummer','Varenavn','Volum','Pris','Literpris','Varetype','Farge','Lukt','Smak','Land','Distsrikt','Underdistrikt','Argang','Rastoff','Alkohol']

// Get csv-file as 'data' (object)
gsheets.getWorksheet(gsheetsKey, gsheetsWorksheet, function(err, result) {
  if (err) {
    console.dir(err)
  }
  // Iterating through rows of data from spreadsheet
  for (var i=0; i<result.data.length; i++) {
    console.log(' ')
    for (var key in result.data[i]){
      if (typeof result.data[i][key] !== 'function' && columns.indexOf(key) > -1) {
        // key in object exists, and matches something in columns array
        console.log(key + ' ' + result.data[i][key]);
        // add to obj and write/add obj to JSON stream file
      }
    }
  }
})
