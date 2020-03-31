const useTab = (selected, tabName) => {
  const allTabs = document.getElementsByClassName('tab')
  for (let tab of allTabs) {
    if (tab === selected) {
      tab.classList.add('active')
    } else {
      tab.classList.remove('active')
    }
  }

  const allTabContents = document.getElementsByClassName('tab-content')
  for (let tab of allTabContents) {
    if (tab.id === tabName) {
      tab.hidden = false
    } else {
      tab.hidden = true
    }
  }
}
