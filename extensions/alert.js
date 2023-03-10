(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.alert = function(text) {
        window.alert(text);
    };

    ext.confirm = function(text) {
        window.confirm(text);
    };

    ext.prompt = function(text, defaultText) {
        window.prompt(text, defaultText);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ', 'alert %s', 'alert', 'Hello! How are you?'],
            [' ', 'confirm %s', 'confirm', 'Do you want to continue?'],
            ['r', 'prompt %s with default %s', 'prompt', 'Enter your name', 'Scratch User']
        ],
        url: 'https://deniskincses.github.io/scratch'
    };

    // Register the extension
    Scratch.Extensions.register('Alert Boxes', descriptor, ext);
})({});
