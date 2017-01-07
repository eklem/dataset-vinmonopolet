// Modules and stuff required
const gsheets = require('gsheets')
const fs = require('fs-extra')
const file = 'dataset-vinmonopolet.str'
const gsheetsKey = '15htqMLMdbxi4csfmOyR1r6aMfZO2R2bOBacS834kfvU'// Gsheet's key to csv-products file converted to Gsheet
const gsheetsWorksheet = 'whitewine' // 'products' (all), 'redwine', 'whitewine', 'sparkling' and 'test' available so far
const columns = ['Varenummer','Varenavn','Volum','Pris','Literpris','Varetype','Farge','Lukt','Smak','Land','Distsrikt','Underdistrikt','Argang','Rastoff','Alkohol']
const filterColumns = 'Varetype'

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
    for (var key in result.data[i]){
      if (typeof result.data[i][key] !== 'function' && columns.indexOf(key) > -1) {
        // key in wine object exists, && matches something in columns array
        // Add key/value to wine object
        if (key === filterColumns) {
          wine[key] = [result.data[i][key]]
        }
        else {
          wine[key] = result.data[i][key]
        }

      }
    }
    console.dir(JSON.stringify(wine))
    output += JSON.stringify(wine)
    output += '\n'
  }
  // Writing output to file
  fs.outputFile(file, output, 'utf8', function (err) {
   if (err) {
     console.log('Error: \n' + err)
   }
  })
})
