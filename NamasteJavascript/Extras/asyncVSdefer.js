// async vs defer

// There are 2 phases in which browser works :
// 1. HTML parsing
// 2. compiling and executing JS scripts

// There are 3 methods to load JS scripts in HTML :
// 1. normal way without using any keyword in script tag
// 2. Using async keyword in script tag
// 2. Using defer keyword in script tag

// 1. If browser encounter a script tag while HTML parsing, it stops HTML parsing and first fetches the JS script and then executes it then and there and then after executing the complete JS script browser moves to further HTML parsing, so JS here blocks the HTML parsing which should not happen.

// 2. With async keyword, HTML parsing is not blocked initially and JS start loading asynchronously along with HTML parsing. When the JS is available in the browser then HTML parsing gets blocked and JS starts executing. Once the JS execution is completed, then only further HTML gets parsed.

// 3. With defer keyword, HTML parsing is not blocked and JS start loading asynchronously along with HTML parsing. Once the JS is available to browser, then also HTML parsing does not stop, it keeps on executing and the JS gets executed once the HTML parsing is fully completed.

// When to use which ?
// -> If we have multiple JS scripts which are dependant on one another, then we should use defer as the scripts are executed in order. And also if the JS script are dependant on DOM elements like events then using defer is the best approach as the JS script executes only once the HTML parsing is complete.
// -> If we have to execute a modular JS script which is independent of the other JS scripts, then we should use async as the order of execution is not mandatory. When the JS scripts are dependent on DOM elements like events then we should not use async as when the JS executes, it stops HTML parsing and if some JS script requires a DOM elements which has not been parsed yet, the code will break.
