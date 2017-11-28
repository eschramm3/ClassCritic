let loggedIn = false;
let userId;
let token;

const checkLoginState = () => {
    FB.getLoginStatus((response) => {
        if (response.status === 'connected') {
            loggedIn = true;
            console.log("logged in");
            userId = response.authResponse.userID;
            token = response.authResponse.accessToken;
        }
        else {
            loggedIn = false;
            console.log("not logged in");
            FB.login((response) => {
                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    loggedIn = true;
                    console.log("logged in");
                    userId = response.authResponse.userID;
                    console.log(userId);
                    token = response.authResponse.accessToken;
                } else {
                    // The person is not logged into this app or we are unable to tell. 
                    loggedIn = false;
                    console.log('failed to login');
                }
            });
        }
    });
    return loggedIn;
};

$(() => {

    const engineeringDeptNameArray = ["All", "Biomedical", "Computer Science and Engineering", "Electrical and Systems", "Energy, Environmental, and Chemical", "General", "Mechanical Engineering and Materials Science"];
    const engineeringDeptCodeArray = ["", "E62", "E81", "E35", "E44", "E60", "E37"];

    const artSciDeptNameArray = ["All","African and African-American Studies","American Culture Studies","Anthropology","Arabic","Archaeology","Art History and Archaeology","Asian American Studies","Biology and Biomedical Sciences","Center for the Humanities","Chemistry","Children's Studies","Chinese","Classics","College Writing Program","Comparative Literature","Dance","Drama","Earth and Planetary Sciences","East Asian Studies","Economics","Education","English Literature","Environmental Studies","European Studies","Film and Media Studies","Focus","French","General Studies","Germanic Languages and Literatures","Greek","Hebrew","Hindi","History","Interdisciplinary Project In The Humanities","International and Area Studies","Italian","Japanese","Jewish, Islamic and Near Eastern Studies","Korean","Latin American Studies","Latin","Legal Studies","Linguistics","Mathematics","Mind, Brain, and Behavior","Movement Science","Music","Medical Humanities","Overseas Programs","Pathfinder Program","Persian","Philosophy","Philosophy-Neuroscience-Psychology","Physical Education","Physics","Political Economy","Political Science","Portuguese","Praxis","Psychological and Brain Sciences","Religion and Politics","Religious Studies","Romance Languages and Literatures","Russian Studies","Russian","Sociology","Spanish","Speech and Hearing","Urban Studies","Women, Gender, and Sexuality Studies","Writing"];
    const artSciDeptCodeArray = ["","L90", "L98", "L48", "L49", "L52", "L01", "L46", "L41", "L56", "L07", "L66", "L04", "L08", "L59", "L16", "L29", "L15", "L19", "L03", "L11", "L12", "L14", "L82", "L79", "L53", "L61", "L34", "L43", "L21", "L09", "L74", "L73", "L22", "L93", "L97", "L36", "L05", "L75", "L51", "L45", "L10", "L84", "L44", "L24", "L96", "L63", "L27", "L85", "L99", "L54", "L47", "L30", "L64", "L28", "L31", "L50", "L32", "L37", "L62", "L33", "L57", "L23", "L78", "L83", "L39", "L40", "L38", "L89", "L18", "L77", "L13"];

    const olinDeptNameArray = ["All","Accounting (Undergrad)", "Accounting (Grad)", "Administration", "Finance (Undergrad)", "Finance (Grad)", "Human Resource Management", "International Studies", "Management (Undergrad)", "Management (Grad)", "Managerial Economics (Undergrad)", "Managerial Economics (Grad)", "Marketing (Undergrad)", "Marketing (Grad)", "Oper & Manufacturing Mgmt (Undergrad)", "Oper & Manufacturing Mgmt (Grad)", "Operations And Supply Chain Management", "Organizational Behavior", "Quantitative Bus Analysis"];
    const olinDeptCodeArray = ["", "B50", "B60", "B51", "B52", "B62", "B56", "B99", "B53", "B63", "B54", "B64", "B55", "B65", "B57", "B67", "B58", "B66", "B59"];

    const artDeptNameArray = ['All','Core and Major Studio Courses','Elective Studio Courses'];
    const artDeptCodeArray = ['','F10','F20'];

    const architectureDeptNameArray = ['All', 'Architecture', 'Landscape Architecture','Urban Design'];
    const architectureDeptCodeArray = ['', 'A46','A48','A49'];

    const schoolToDepts = {
        'E': engineeringDeptNameArray, 
        'B': olinDeptNameArray, 
        'L': artSciDeptNameArray, 
        'F': artDeptNameArray, 
        'A': architectureDeptNameArray,
        '' : ['All'] 
    };

    const schoolToDeptCodes = {
        'E': engineeringDeptCodeArray, 
        'B': olinDeptCodeArray, 
        'L': artSciDeptCodeArray, 
        'F': artDeptCodeArray, 
        'A': architectureDeptCodeArray,
        '' : [''] 
    };

    const engineeringAttrKey = "EN";
    const engineeringAttrs = {
        'DU':   'Engineering Design Units',
        'H':    'Engineering Humanity',
        'LU':   'Engineering Lab Units',
        'S':    'Engineering Social Science',
        'SU':   'Engineering Science Units',
        'TU':   'Engineering Topics Units'
    };

    const businessAttrKey = "BU";
    const businessAttrs = {
        'BA':   'Behavioral Analysis',
        'ETH':  'Ethics/Values',
        'HUM':  'Humanities',
        'IS':   'International Studies',
        'SCI':  'Physical/Life Science'
    };

    const artSciAttrKey = "A&S";
    const artSciAttrs = {
        'LA': 'Language and Arts',
        'NS': 'Natural Sciences and Mathematics',
        'SS': 'Social Sciences',
        'TH': 'Textual and Historical Studies',
        'CD': 'Cultural Diversity',
        'QA': 'Quantitative Analysis',
        'SD': 'Social Differentiation Disc',
        'WI': 'Writing Intensive Disc'
    };
    const artSciIQAttrKey = "A&S IQ";
    const artSciIQAttrs = {
        'AN': 'Applied Numeracy',
        'LS': 'Language & Cultural Diversity - Language',
        'SD': 'Social Differentiation IQ',
        'WI': 'Writing Intensive IQ',
        'HUM': 'Humanities',
        'LCD': 'Language & Cultural Diversity - Culture',
        'NSM': 'Natural Sciences and Mathematics',
        'SSC': 'Social Sciences'
    };

    const ATTRS = {
        [engineeringAttrKey]: engineeringAttrs,
        [businessAttrKey]: businessAttrs,
        [artSciAttrKey]: artSciAttrs,
        [artSciIQAttrKey]: artSciIQAttrs
    };

    var dictionary = {};
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
    for (let i = 0; i < artDeptNameArray.length; i++) {
        dictionary[artDeptNameArray[i]] = artDeptCodeArray[i];
    }
    for (let i = 0; i < architectureDeptNameArray.length; i++) {
        dictionary[architectureDeptNameArray[i]] = architectureDeptCodeArray[i];
    }

    const getCodeFromDeptName = (name) => {
        return dictionary[name];
    };

    const homePage = $('#homePage');
    const searchPage = $('#searchPage');
    const classPage = $('#classPage');
    const reviewPage = $('#reviewPage');
    const pages = [homePage, searchPage, classPage, reviewPage];
    let currPage = homePage;

    const changeToPage = (page) => {
        $('.navbar-collapse').collapse('hide');
        currPage.toggle();
        page.toggle();
        currPage = page;
    };

    const url = "http://Ratemycourse-env.dxtgyiksq8.us-east-2.elasticbeanstalk.com";

    const getInfo = (api, params) => { 
        $.getJSON(url + api, params, (data) => {
            // now you have "data" which is in json format-same data that is displayed on browser.
            console.log('request succeeded');
            console.dir(data);
            if (currPage === searchPage) {
                return appendCourses(data);
            }
            else if (currPage === classPage) {

            }
        })
        // .done((data) => {
        //     console.log( "Done! success!" );
        //     console.dir(data);
        //     return data;
        // })
        .fail((e) => {
            console.log( "error" );
            console.dir(e);
        })
        .always(() => {
            console.log( "complete" );
        });
    };

    const postRating = (api) => { 
        $.post(url + api, (data) => {
            // now you have "data" which is in json format-same data that is displayed on browser.
            console.log('request succeeded');
            console.log(data);   
        })
        .done((data) => {
            console.log( "Done! success!" );
            console.log(data);
            return data;
        })
        .fail((e) => {
            console.log( "error" );
            console.log(e);
        })
        .always(() => {
            console.log( "complete" );
        });
    };

    const getClassById = (classID) => {
        const urlClass = '/api/courses/id/' + classID;
        return getInfo(urlClass, {});
    };

    const getRatingsById = (classID) => {
        const urlClass = '/api/ratings/find?id=' + classID;
        return getInfo(urlClass, {});
    };

    const getRatingsByVal = (classVal) => {
        const urlClass = '/api/ratings/find?val=' + classVal;
        return getInfo(urlClass, {});
    };

    $('.goToHomePage').click(() => {
        changeToPage(homePage);
    });

    $('.goToSearchPage').click(() => {
        changeToPage(searchPage);
    });

    $('.goToReviewPage').click(() => {
        if (currPage === searchPage) {
            const reviewClassId = $('#classFocusNumber').text();
            const courseInfo = getClassById(reviewClassId);
            $('#reviewSchoolDropdown option[value='+ courseInfo.school +']').attr("selected", "selected");
            $('#reviewDeptDropdown option[value='+ courseInfo.dept +']').attr('selected', 'selected');
        }
        checkLoginState();
        changeToPage(reviewPage);
    });

    $('.goToClassPage').click(() => {
        changeToPage(classPage);
    });

    const searchTypeButton = $('#searchType');
    let searchType = searchTypeButton.val();
    console.log('searchType: ', searchType);
    searchTypeButton.change(() => {
        searchType = searchTypeButton.val();   
        console.log('searchType: ', searchType); 
    });

    let overallRating = 0;
    let difficultyRating = 0;
    let contentRating = 0;
    let workloadRating = 0;
    let gradingRating = 0;

    $('.setOverall').click((obj) => {
        console.dir(obj);
        
        console.log(obj.currentTarget.attributes[2].value);
        overallRating = obj.currentTarget.attributes[2].value;
    });
    $('.setDifficulty').click((obj) => {
        console.dir(obj);
        
        console.log(obj.currentTarget.attributes[2].value);
        difficultyRating = obj.currentTarget.attributes[2].value;
    });
    $('.setContent').click((obj) => {
        console.dir(obj);
        
        console.log(obj.currentTarget.attributes[2].value);
        contentRating = obj.currentTarget.attributes[2].value;
    });
    $('.setWorkload').click((obj) => {
        console.dir(obj);
        
        console.log(obj.currentTarget.attributes[2].value);
        workloadRating = obj.currentTarget.attributes[2].value;
    });
    $('.setGrading').click((obj) => {
        console.dir(obj);
        
        console.log(obj.currentTarget.attributes[2].value);
        gradingRating = obj.currentTarget.attributes[2].value;
    });
    

    $('#submitReview').click(() => {
        const semTaken = $("#semDropdown").val();
        if (overallRating > 0 && contentRating > 0 && gradingRating > 0 && workloadRating > 0 && difficultyRating > 0) {
            const classId = $("#reviewClassDropdown option:selected").val();
            const curr_class = getClassById(classId);
            const urlPost = "/api/ratings/add?"
            + "&val=" + curr_class.val
            + "&userID=" + userId
            + "&score=" + overallRating
            + "&workload=" + workloadRating
            + "&difficulty=" + difficultyRating
            + "&content=" + contentRating
            + "&grading=" + gradingRating
            + "&review=" + $("#exampleTextarea").text()
            + "&isAnon=" + $("#inlineCheckbox1").attr('checked')
            + "&semTaken=" + semTaken;
            console.log(urlPost);
            postRating(urlPost);
            // var xmlHttpPost = new XMLHttpRequest();
            // xmlHttpPost.open( "POST", urlPost, false ); // false for synchronous request
            // xmlHttpPost.send( null );
            // var parsedText = JSON.parse(xmlHttpPost.responseText);
        }
        else {
            console.log('You need to fill every rating in!');
        }
    });

    $('#searchToReview').click(() => {
        if (loggedIn) {
            const classKey = $("#reviewClassDropdown option:selected").val();
            if (classKey !== 'undefined') {
                $("#reviewDisplay").show();
            }
        }
        else {
            getLoginStatus();
        }
    });

    const attrs = $('#attrBoxes');
    attrs.multiselect({buttonWidth: '400px', maxHeight: 300});    

    

    $('#reviewSchoolDropdown').on('change', ()=> {
        console.log("test");
        var deptArray = schoolToDepts[document.getElementById("reviewSchoolDropdown").selectedIndex];
        document.getElementById("reviewDeptDropdown").innerHTML = "";
        document.getElementById("reviewClassDropdown").innerHTML = '<option class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Class</option>';

        for (i = 0; i < deptArray.length; i++) {
            $("#reviewDeptDropdown").append('<option class="dropdown-item" href="#">'+deptArray[i]+'</option>');
        }
        
    });

    $('#reviewDeptDropdown').on('change', ()=> {
        console.log("test");
        //var deptArray = schoolToDepts[document.getElementById("reviewSchoolDropdown").selectedIndex];
        document.getElementById("reviewClassDropdown").innerHTML = '<option class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Class</option>';

        var school = document.getElementById("reviewSchoolDropdown");
        var schoolSelected = school.options[school.selectedIndex].value;
        var dept = document.getElementById("reviewDeptDropdown");
        var deptSelected = dept.options[dept.selectedIndex].innerHTML;


        var urlFind = "http://Ratemycourse-env.dxtgyiksq8.us-east-2.elasticbeanstalk.com/api/courses/find?school="+schoolDictionary[schoolSelected]+"&dept="+dictionary[deptSelected];
        console.log(urlFind);
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", urlFind, false ); // false for synchronous request
        xmlHttp.send( null );
        var parsedText = JSON.parse(xmlHttp.responseText);
        console.log(parsedText);
        

        for (i = 0; i < parsedText.content.length; i++) {
            $("#reviewClassDropdown").append('<option class="dropdown-item" value='+parsedText.content[i].commonVal+' href="#">'+parsedText.content[i].name+'</option>');
        }
        
    });




    // SEARCH ----------------------------------------------------------------------------------------------------

    let curr_school = $('#schoolDropdown option:selected').val();
    let curr_dept = $('#deptDropdown option:selected').val();
    let curr_attrs = $('#attrBoxes').val();
    console.log('curr_school: ', curr_school);
    console.log('curr_dept: ', curr_dept);
    console.log('curr_attrs: ', curr_attrs);

    const appendCourses = (data) => {
        const courses = data.content;
        $("#rowMain").html('');
        const example = $('#row1');
        $.each(courses, (i, c) => {
            let output = "<div class='col-9 individualClass' id='"
                + c.id + "_SearchListing'>"
                + "<h2 class='classNumber'>" + c.number
                + "</h2><h1 value='" + c.id + "'"
                + " class='courseTitle'>" + c.name + "</h1>";
            const numStars = c.parent.avgScore;    
            for (let j = 1; j < 6; j++) {
                if (j <= numStars) {
                    output += "<i class='star fa fa-star fa-2x' aria-hidden='true'></i>";
                }
                else {
                    output += "<i class='star fa fa fa-star-o fa-2x' aria-hidden='true'></i>";
                }
            }
                // + "<i class='star fa fa-star-half-o fa-2x' aria-hidden='true'></i>"
            output += "</div>";
            $("#rowMain").append(output);

        });
        $("#rowMain").show();
        // $('#loadMoreRatings').show();

        $('.courseTitle, .classNumber').click((obj) => {
            console.dir(obj);
            let crsId = obj.target.parentElement.id;
            crsId = crsId.substring(0, crsId.indexOf('_'));
            viewRatings(crsId);
        });
    };

    const searchForClass = () => {    
        console.log('searching!');
        let attrStr = '';
        $.each(curr_attrs, (i, att) => {
            attrStr += att + ','
        });
        console.log('curr_school: ', curr_school, ' curr_dept: ', curr_dept, ' attrStr: ', attrStr);

        const api = "/api/courses/find?";
        const params = {'size': 50};
        if (curr_school !== '') {
            params['school'] = curr_school;
        }
        if (curr_dept !== '') {
            params['dept'] = curr_dept;
        }
        if (attrStr !== '') {
            params['attrs'] = attrStr;
        }
        getInfo(api, params);
    }

    const searchForClassFromBar = (key) => {
        console.log('searching!');
        const api = "/api/courses/find?";
        let params;
        if (searchType === 'number') {
            console.log('number: ', key);
            params = {'number': key, 'size': 50};
        }
        else {
            console.log('name: ', key);
            params = {'name': key, 'size': 50};
        }
        getInfo(api, params);
    }

    $('#schoolDropdown').change(() => {
        curr_school = $('#schoolDropdown option:selected').val()
        let deptArray = schoolToDepts[curr_school];
        let deptCodes = schoolToDeptCodes[curr_school];
        console.log('school: ', curr_school);
        console.log('depts: ', deptArray);
        const options = $("#deptDropdown")
        options.html("");
        options.append('<option value="" disabled selected hidden>Department...</option>');
        $.each(deptArray, (i, d) => {
            options.append($('<option>', { 
                value: deptCodes[i],
                text: d,
                class:"dropdown-item",
                href: '#' 
            }));
        });
        
    });

    $('#deptDropdown').change(() => {
        curr_dept = $('#deptDropdown option:selected').val(); 
        console.log('curr_dept: ', curr_dept);

    });

    $('#attrBoxes').change(() => {
        curr_attrs = attrs.val();
        console.log('curr_attrs: ', curr_attrs);
    });

    $('#goButton').click(() => {
        searchForClass();
    });

    $('#searchButton').click(() => {
        console.log("searchbar search");
        const key = $('#searchBar').val();
        console.log(key);
        console.log(searchType);
        searchForClassFromBar(key);
        console.log("DONE");
    });

    let deptSelected = {};

    const viewRatings = (courseId) => {
        console.log(courseId);
        changeToPage(classPage);
        var parsedClassText = getClassById(courseId);
        var parsedRatingsText = getRatingsById(parsedClassText.commonVal);

        console.log(parsedRatingsText);

        $('#classFocusNumber').html(parsedClassText.id);
        $('#classFocusName').html(parsedClassText.name);
        $('#classDescription').html(parsedClassText.description);
        
        for (i = 0; i < parsedRatingsText.content.length; i++) {
            var newDiv = document.getElementById('firstRating');
            var clone = newDiv.cloneNode(true);
            clone.children[0].children[2].children[0].innerHTML = parsedRatingsText.description;
            document.getElementById('ratingsContainer').innerHTML += clone;
            console.log("HI");
            
            //console.log
        }
        
        var oldReview = 'lhjg';


    };

    


});

