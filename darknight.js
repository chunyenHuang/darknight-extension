console.log('darknight.js running...');

chrome.browserAction.onClicked.addListener(function(tab)
{
	console.log('InsertCSS browserAction click');
	chrome.tabs.insertCSS(tab.id, {file: 'css.css', "allFrames": true}, function() {
		console.log('css file has inserted.');
	});
});
