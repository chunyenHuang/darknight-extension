var toggle = document.getElementById('enable');
var current = 0;
toggle.addEventListener('click', function() {
  console.log('toggle');
  chrome.tabs.query({
      'active': true,
      'windowId': chrome.windows.WINDOW_ID_CURRENT
  }, function (tab) {
    if (current ===0) {
      chrome.tabs.insertCSS(tab.id, {file: 'css.css', "allFrames": true}, function() {
        console.log('css file has inserted.');
      });
      current = 1;
    } else {
      chrome.tabs.reload(tab.id);
      current = 0;
    }
  });
});
