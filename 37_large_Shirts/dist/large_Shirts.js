"use strict";
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function large_shirts(size = 'large', text = 'i love typescript') {
    console.log(`creating ${size} shirt with the message: ${text}`);
}
large_shirts();
large_shirts('medium');
large_shirts('small', 'i love paython');
