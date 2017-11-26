const engineeringDeptNameArray = ["All", "Biomedical", "Computer Science and Engineering", "Electrical and Systems", "Energy, Environmental, and Chemical", "General", "Mechanical Engineering and Materials Science"];
const engineeringDeptCodeArray = ["all", "E62", "E81", "E35", "E44", "E60", "E37"];

const artSciDeptNameArray = ["All","African and African-American Studies","American Culture Studies","Anthropology","Arabic","Archaeology","Art History and Archaeology","Asian American Studies","Biology and Biomedical Sciences","Center for the Humanities","Chemistry","Children's Studies","Chinese","Classics","College Writing Program","Comparative Literature","Dance","Drama","Earth and Planetary Sciences","East Asian Studies","Economics","Education","English Literature","Environmental Studies","European Studies","Film and Media Studies","Focus","French","General Studies","Germanic Languages and Literatures","Greek","Hebrew","Hindi","History","Interdisciplinary Project In The Humanities","International and Area Studies","Italian","Japanese","Jewish, Islamic and Near Eastern Studies","Korean","Latin American Studies","Latin","Legal Studies","Linguistics","Mathematics","Mind, Brain, and Behavior","Movement Science","Music","Medical Humanities","Overseas Programs","Pathfinder Program","Persian","Philosophy","Philosophy-Neuroscience-Psychology","Physical Education","Physics","Political Economy","Political Science","Portuguese","Praxis","Psychological and Brain Sciences","Religion and Politics","Religious Studies","Romance Languages and Literatures","Russian Studies","Russian","Sociology","Spanish","Speech and Hearing","Urban Studies","Women, Gender, and Sexuality Studies","Writing"];
const artSciDeptCodeArray = ["all","L90", "L98", "L48", "L49", "L52", "L01", "L46", "L41", "L56", "L07", "L66", "L04", "L08", "L59", "L16", "L29", "L15", "L19", "L03", "L11", "L12", "L14", "L82", "L79", "L53", "L61", "L34", "L43", "L21", "L09", "L74", "L73", "L22", "L93", "L97", "L36", "L05", "L75", "L51", "L45", "L10", "L84", "L44", "L24", "L96", "L63", "L27", "L85", "L99", "L54", "L47", "L30", "L64", "L28", "L31", "L50", "L32", "L37", "L62", "L33", "L57", "L23", "L78", "L83", "L39", "L40", "L38", "L89", "L18", "L77", "L13"];

const olinDeptNameArray = ["All","Accounting (Undergrad)", "Accounting (Grad)", "Administration", "Finance (Undergrad)", "Finance (Grad)", "Human Resource Management", "International Studies", "Management (Undergrad)", "Management (Grad)", "Managerial Economics (Undergrad)", "Managerial Economics (Grad)", "Marketing (Undergrad)", "Marketing (Grad)", "Oper & Manufacturing Mgmt (Undergrad)", "Oper & Manufacturing Mgmt (Grad)", "Operations And Supply Chain Management", "Organizational Behavior", "Quantitative Bus Analysis"];
const olinDeptCodeArray = ["all", "B50", "B60", "B51", "B52", "B62", "B56", "B99", "B53", "B63", "B54", "B64", "B55", "B65", "B57", "B67", "B58", "B66", "B59"];

//onst olinDeptNameArray = ["All","Accounting (Undergrad)", "Accounting (Grad)", "Administration", "Finance (Undergrad)", "Finance (Grad)", "Human Resource Management", "International Studies", "Management (Undergrad)", "Management (Grad)", "Managerial Economics (Undergrad)", "Managerial Economics (Grad)", "Marketing (Undergrad)", "Marketing (Grad)", "Oper & Manufacturing Mgmt (Undergrad)", "Oper & Manufacturing Mgmt (Grad)", "Operations And Supply Chain Management", "Organizational Behavior", "Quantitative Bus Analysis"];
//const olinDeptCodeArray = ["all", "B50", "B60", "B51", "B52", "B62", "B56", "B99", "B53", "B63", "B54", "B64", "B55", "B65", "B57", "B67", "B58", "B66", "B59"];

//const olinDeptNameArray = ["All","Accounting (Undergrad)", "Accounting (Grad)", "Administration", "Finance (Undergrad)", "Finance (Grad)", "Human Resource Management", "International Studies", "Management (Undergrad)", "Management (Grad)", "Managerial Economics (Undergrad)", "Managerial Economics (Grad)", "Marketing (Undergrad)", "Marketing (Grad)", "Oper & Manufacturing Mgmt (Undergrad)", "Oper & Manufacturing Mgmt (Grad)", "Operations And Supply Chain Management", "Organizational Behavior", "Quantitative Bus Analysis"];
//const olinDeptCodeArray = ["all", "B50", "B60", "B51", "B52", "B62", "B56", "B99", "B53", "B63", "B54", "B64", "B55", "B65", "B57", "B67", "B58", "B66", "B59"];

const schoolToDept = [engineeringDeptNameArray, engineeringDeptNameArray, olinDeptNameArray, artSciDeptNameArray];

//   'Engineering and Applied Sciences': engineeringDeptNameArray, 
//   'Arts and Sciences': artSciDeptNameArray,
//   'Olin School of Business': olinDeptNameArray
// };

//const schoolDeptArray = 

const engineeringAttrKey = "EN";
const engineeringAttrs = {
    'DU':   ['Engineering Design Units'],
    'H':    ['Engineering Humanity'],
    'LU':   ['Engineering Lab Units'],
    'S':    ['Engineering Social Science'],
    'SU':   ['Engineering Science Units'],
    'TU':   ['Engineering Topics Units']
};

const businessAttrKey = "BU";
const businessAttrs = {
    'BA':   ['Behavioral Analysis'],
    'ETH':  ['Ethics/Values'],
    'HUM':  ['Humanities', 45],
    'IS':   ['International Studies'],
    'SCI':  ['Physical/Life Science']
};

const artSciAttrKey = "A&S";
const artSciAttrs = {
    'LA': ['Language and Arts', 7],
    'NS': ['Natural Sciences and Mathematics'],
    'SS': ['Social Sciences'],
    'TH': ['Textual and Historical Studies', 6],
    'CD': ['Cultural Diversity'],
    'QA': ['Quantitative Analysis'],
    'SD': ['Social Differentiation Disc', 11],
    'WI': ['Writing Intensive Disc', 12]
};

const artSciIQAttrKey = "A&S IQ";
const artSciIQAttrs = {
    'AN': ['Applied Numeracy'],
    'LS': ['Language & Cultural Diversity - Language'],
    'SD': ['Social Differentiation IQ', 110],
    'WI': ['Writing Intensive IQ', 111],
    'HUM': ['Humanities', 103],
    'LCD': ['Language & Cultural Diversity - Culture'],
    'NSM': ['Natural Sciences and Mathematics'],
    'SSC': ['Social Sciences', 105]
};

/*Art attributes: (Art)
AH  FA Art History
CDES    FA Communication Design
Comp    FA English Composition
FAAM    FA Art Minor
FADM    FA Design Minor
HUM FA Humanities
LIT FA Literature
LNG FA Foreign Language
NSM FA Natural Sciences or Mathematics
SSC FA Social and Behavioral Sciences
SSP FA Social Sciences or Philosophy
GFAH    GF Art History

Architecture attributes: (Arch)
CAST    AR Case Studies
HT  AR History Theory
HUM AR Humanities
LIT AR Literature
NSM AR Natural Science or Mathematics
RW  AR Research & Writing
SSC AR Social and Behavioral Sciences
SSP AR Social Science or Philosophy
UI  AR Urban Issues
ECOL    GA Ecological Elective
GACS    GA Case Studies
GAHT    GA History/Theory
GAMUD   GA MUD Track
GANS    GA Natural Systems
GARW    GA Research & Writing
GAUI    GA Urban Issues*/


var expanded = false;

const ATTRS = {
    [engineeringAttrKey]: engineeringAttrs,
    [businessAttrKey]: businessAttrs,
    [artSciAttrKey]: artSciAttrs,
    [artSciIQAttrKey]: artSciIQAttrs
};

let dictionary = {};
for (let i = 0; i < engineeringDeptNameArray.length; i++) {
    dictionary[engineeringDeptNameArray[i]] = engineeringDeptCodeArray[i];
}

for (let i = 0; i < artSciDeptNameArray.length; i++) {
    dictionary[artSciDeptNameArray[i]] = artSciDeptCodeArray[i];
}

for (let i = 0; i < olinDeptNameArray.length; i++) {
    dictionary[olinDeptNameArray[i]] = olinDeptCodeArray[i];
}

for (let i = 0; i < engineeringDeptNameArray.length; i++) {
    dictionary[engineeringDeptNameArray[i]] = engineeringDeptCodeArray[i];
}

function getCodeFromDeptName(name) {
    return dictionary[name];
}

function newDeptDropDown() {
    var deptArray = schoolToDept[document.getElementById("schoolDropdown").selectedIndex];
    document.getElementById("deptDropdown").innerHTML = "";
    $(document).ready(function(){
        for (i = 0; i < deptArray.length; i++) {
            $("#deptDropdown").append('<option class="dropdown-item" href="#">'+deptArray[i]+'</option>');
        }
    });
}

const depts = {
    artsci: artSciDeptNameArray,
    engineering: engineeringDeptNameArray,
    business: olinDeptNameArray
};   

$(() => {
    let loggedIn = false;
    let userId;
    const checkLoginState = () => {
        FB.getLoginStatus((response) => {
            if (response.status === 'connected') {
                loggedIn = true;
                console.log("logged in");
                userId = response.authResponse.userID;
            }
            else {
                loggedIn = false;
        }
    });
    };

    const url = "http://Ratemycourse-env.dxtgyiksq8.us-east-2.elasticbeanstalk.com";
    let curr_school = $('#school option:selected').attr("id");
    let curr_dept = $('#dept option:selected').attr("id");
    console.log(curr_school);
    
    $('#school').on('change', () => {
        curr_school = $('#school option:selected').attr("id");
        // set dept to all
        $('#dept').empty().append('<option id="all" selected="selected">All</option>');
        if (curr_school !== 'all') {
            console.log(depts[curr_school]);
            // 0 is all which is already there
            for (let i = 1; i < depts[curr_school].length; i++) {
                $('#dept').append("<option id=" + dictionary[depts[curr_school][i]] + ">" + depts[curr_school][i] + "</option>");
            }
        }
    });

    $('#dept').on('change', () => {
        curr_dept = $('#dept option:selected').attr("id"); 
        console.log(curr_dept);

    });

    const getProducts = () => { 
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : url + "/query",
            dataType : 'json',
            timeout : 100000,
            success : function(data) {
                // now you have "data" which is in json format-same data that is displayed on browser.
            },
            error : function(e) {
                //do something
            },
            done : function(e) {
                //do something
            }
        });
    }
});

let deptSelected = {}



function getProducts() {

    var school = document.getElementById("schoolDropdown");
    var schoolSelected = school.options[school.selectedIndex].value;
    var dept = document.getElementById("deptDropdown");
    deptSelected = dept.options[dept.selectedIndex].innerHTML;
    
    var attrs = document.getElementById("attrBoxes");
    //var attrSelected = attrs.options[attrs.selectedOptions].value;



    console.log(deptSelected);
    console.log(dictionary);
    console.log(dictionary[deptSelected]);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "http://ratemycourse-env.dxtgyiksq8.us-east-2.elasticbeanstalk.com/api/courses/find?school="
    + schoolSelected + "&dept=" + dictionary[deptSelected]; // site that doesn't send Access-Control-*
    
    for (i = 0; i < attrs.selectedOptions.length; i++) {
        url = url + "&attrs=" + attrs.selectedOptions[i].value;
    }


    console.log(url);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", proxyurl+url, false ); // false for synchronous request
    xmlHttp.send( null );
    var parsedText = JSON.parse(xmlHttp.responseText);

    $(document).ready(function(){
        document.getElementById("rowMain").innerHTML = "";

        for (i = 0; i < parsedText.content.length; i++) {

            var newString = "<a href='#' target='_blank' class='col-9 individualClass'>"
            +"<h2 class='classNumber'>"+parsedText.content[i].number
            +"</h2><h1 class='className'>"
            +parsedText.content[i].name+"</h1>"
            +"<i class='star fa fa-star fa-2x' aria-hidden='true'></i>"
            +"<i class='star fa fa-star fa-2x' aria-hidden='true'></i>"
            +"<i class='star fa fa-star fa-2x' aria-hidden='true'></i>"
            +"<i class='star fa fa-star-half-o fa-2x' aria-hidden='true'></i>"
            +"<i class='star fa fa fa-star-o fa-2x' aria-hidden='true'></i>"
            +"</a>";
            $("#rowMain").append(newString);
        }
    });
}

