let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  debugger
  // chrome.desktopCapture.chooseDesktopMedia(["screen","window","tab","audio"],(x)=>{console.log(x)})
});


chrome.runtime.onMessageExternal.addListener(function (message, sender, callback) {
  switch(message.type) {
      case 'getScreen':
          debugger;
          var pending = chrome.desktopCapture.chooseDesktopMedia(message.options || ['screen', 'window'],
                                                             sender.tab, function (streamid) {
              // communicate this string to the app so it can call getUserMedia with it
              message.type = 'gotScreen';
              message.sourceId = streamid;
              callback(message);
              return false;
          });
          return true; // retain callback for chooseDesktopMedia result
  }
});