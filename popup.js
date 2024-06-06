document.getElementById('searchButton').addEventListener('click', () => {
    const prependText = "https://sci-hub.se/";
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      let activeTabUrl = activeTab.url;
      let newUrl = prependText + activeTabUrl;
      
      chrome.tabs.create({ url: newUrl });
    });
  });
  