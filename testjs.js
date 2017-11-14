var client = new XMLHttpRequest();
client.open('GET', 'C:/Users/Danny/RMC-site/allCoursesInfo.json');
client.onreadystatechange = function() {
  alert(client.responseText);
}
client.send();

