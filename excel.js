let fs = require("fs");
let xlsx = require("xlsx");

let data = require("./example.json");
console.log(data);

// EXCEL :

// Requirement : wb -> filePath, ws -> fileName, JSON data

// new worksheet
let newWB = xlsx.utils.book_new();
// JSON data -> excel format convert
let newWS = xlsx.utils.json_to_sheet(data);
// newWB, newWS, sheet name -> pass
xlsx.utils.book_append_sheet(newWB, newWS, "sheet-1");
// file path
xlsx.writeFile(newWB, "abc.xlsx");



function excelWriter (filePath, json, sheetName) {

    let newWB = xlsx.utils.book_new();
    let newWS = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(newWB, newWS, sheetName);
    xlsx.writeFile(newWB, filePath);
}

function excelReader (filePath, sheetName) {
    if (fs.existsSync(filePath) == false){
        return[];
    }
    let WB = xlsx.readFile(filePath);
    let excelData = WB.sheet[sheetName];
    let ans = xlsv.utils.sheet_to_json(excelData);
    return;
}

