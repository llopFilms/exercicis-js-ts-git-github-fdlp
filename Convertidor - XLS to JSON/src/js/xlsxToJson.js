import readXlsxFile from '../../node_modules/read-excel-file/bundle/read-excel-file.min.js';

let jsonObject = [];
let fileName = '';
const textArea = document.getElementById('json-data');
textArea.value = '';

const convertToJson = () => {
  fileName = input.files[0].name;
  jsonObject.length = 0;
  document.getElementById(
    'fileXlsName'
  ).innerHTML = `<small>${fileName}</small>`;
  readXlsxFile(input.files[0]).then((rows) => {
    let headers = [];
    let temp = {};

    rows.forEach((row, index) => {
      if (index === 0) headers = row;
      else {
        row.forEach((cell, index) => {
          temp[headers[index]] = cell;
        });
        jsonObject.push(temp);
        temp = {};
      }
    });
    console.table(jsonObject);
    textArea.value = JSON.stringify(jsonObject, null, 2);
  });
  document.getElementById('fileJsonName').innerHTML = `<small>${
    fileName.split('.')[0]
  }.json</small>`;
};

const downloadFile = () => {
  let dataString =
    'data:text/json;charset=utf-8,' + encodeURIComponent(jsonObject);
  let anchor = document.createElement('a');
  anchor.href = dataString;
  anchor.download = fileName + '.json';
  anchor.click();
  anchor.remove();
};

const input = document.getElementById('input');
input.addEventListener('change', convertToJson);

const download = document.getElementById('download-data');
download.addEventListener('click', downloadFile);
