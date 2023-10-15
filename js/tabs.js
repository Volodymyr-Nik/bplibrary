const tabsInput = document.querySelectorAll(".favorites__input")
const tabsItems = document.querySelectorAll(".favorites-forms")


tabsInput.forEach(onTabClick)

function onTabClick(item) {
    item.addEventListener("click", function() {
        let currentInput = item
        let tabId = currentInput.getAttribute('data-tab')
        let currentTab = document.querySelector(tabId)
    
        if (! currentInput.classList.contains('tabs-active')) {
            tabsInput.forEach(function(item) {
                item.classList.remove('tabs-active')
            })
    
            tabsItems.forEach(function(item) {
                item.classList.remove('tabs-active')
            })
    
            currentInput.classList.add('tabs-active')
            currentTab.classList.add('tabs-active')
        }
    
    })
}

document.querySelector(".favorites__input").click()