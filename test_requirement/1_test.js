
Feature('1');

// BeforeTest((I) => {
//     I.resizeWindow(1920,1080)
//     I.amOnPage("https://github.com")
//     I.wait(10)
// })
Scenario('test something', async (I) => {

    I.resizeWindow(1366,768)

    let a = await I.sendPostRequest('', {
        "query": "query{organization(login:\"wzvtcsoft-specialstudent\"){repository(name:\"ScrumDemo\"){id name issues(first:10){ totalCount nodes{ title  number  body  timelineItems(first:10){   nodes{  ...on CrossReferencedEvent{    source{  ...on Issue{    number  }  }target{  ...on Issue{    number  } }}} }}}}}}"
    });
    console.log(a)
});
