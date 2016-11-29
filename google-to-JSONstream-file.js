// Modules and stuff required
const gsheets = require('gsheets')
const fs = require('fs-extra')
const JSONStream = require('JSONStream')
const file = 'dataset-vinmonopolet.json'
const gsheetsKey = '15htqMLMdbxi4csfmOyR1r6aMfZO2R2bOBacS834kfvU'
const gsheetsWorksheet = 'sparkling' // 'products' (all), 'redwine', 'whitewine', 'sparkling' and 'test' available so far
const columns = ['Varenummer','Varenavn','Volum','Pris','Literpris','Varetype','Farge','Lukt','Smak','Land','Distsrikt','Underdistrikt','Argang','Rastoff','Alkohol']

// Get csv-file as 'data' (object)
gsheets.getWorksheet(gsheetsKey, gsheetsWorksheet, function(err, result) {
  if (err) {
    console.dir(err)
  }
  var output =  ''
  // Iterating through rows of data from spreadsheet
  for (var i=0; i<result.data.length; i++) {
    // Object to fill with key value pairs
    wine = {}
    //console.log('Wine object empty? ' + JSON.stringify(wine))
    for (var key in result.data[i]){
      if (typeof result.data[i][key] !== 'function' && columns.indexOf(key) > -1) {
        // key in object exists, and matches something in columns array
        // Add key/value to wine object
        wine[key] = result.data[i][key]
      }
    }
    //console.dir(JSON.stringify(wine))
    output += JSON.stringify(wine)
    output += '\n'
    // Push object to arrray that will be written to file (or write it directly?)
  }
  //console.log(output)
  fs.outputFile(file, output, 'utf8', function (err) {
   if (err) {
     console.log('Error: \n' + err)
   }
  })
})
