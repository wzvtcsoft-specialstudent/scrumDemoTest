exports.config = {
  tests: 'test_requirement/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      show:false,
      chrome:{
        executablePath:'C:/Users/19868/AppData/Local/Google/Chrome/Application/chrome',
        "args": [ 
          "--window-size=1920,1080"
          // 调整窗口大小
        ]
      },
    },
    REST: {
      endpoint: 'https://api.github.com/graphql',
      defaultHeaders:{
        'Content-Type': 'application/json',
        'Authorization':'bearer 80ce2076ea6102d947f2226816330a4e625bd24d'
      },
      // onRequest: (request) => {
      //   request.headers.auth = '123';
      // },
      // timeout:10000
   }
  },
  include: {
    // loginPage: './pages/login.js',
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'test_requirement',
  translation: 'zh-CN',
  
}