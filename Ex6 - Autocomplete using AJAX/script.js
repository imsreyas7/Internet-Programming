const loadBranches = () => {
  const xhttp = new XMLHttpRequest();
  console.log("in");
  const query = document.getElementById("country").value;
  let url;
  console.log(query);
  if (query === "") url = `CountryServlet?country=&`;
  else url = `CountryServlet?country=${query}&`;
  console.log(url);

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      printCountriesList(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
};

const printCountriesList = (xml) => {
  const xmlDoc = xml.responseXML;
  let table = `<table><tr><th>List Of Countries</th></tr>`;
  console.log(" -->");
  console.log(xmlDoc);
  const recList = xmlDoc.getElementsByTagName("country");
  const counLength = recList.length;
  for (let i = 0; i < counLength; i++) {
    table += `<tr><td>${recList[i].childNodes[0].nodeValue}</td><tr>`;
  }
  table += "</table>";
  document.getElementById("counList").innerHTML = table;
};

document.getElementById("country").addEventListener("keyup", (event) => {
  loadBranches();
});

window.addEventListener("load", loadBranches());
