//Tab divider
function setupTabs(){
  document.querySelectorAll('.tab').forEach(button => {
      button.addEventListener('click', () => {
          const sideBar = button.parentElement;
          const tabContainer = sideBar.parentElement;
          const tabNumber = button.dataset.forTab;
          const tabToActivate = document.querySelector(`.tab-text[data-tab="${tabNumber}"]`);
          
          sideBar.querySelectorAll('.tab').forEach(button => {
              button.classList.remove("tab--active");
          });
          tabContainer.querySelectorAll('.tab-text').forEach(tab => {
              tab.classList.remove('tab-text--active');
          });
          
          button.classList.add('tab--active');
          tabToActivate.classList.add('tab-text--active');
      });  
  });
}

document.addEventListener('DOMContentLoaded', () => {
 setupTabs(); 
 
  document.querySelectorAll('.tab-container').forEach(tabContainer => {
      tabContainer.querySelector('.tab-sidebar .tab').click();
  }); 
});



// Modal popups

function modalFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    popup.parentElement.classList.toggle('popupOpened');
  }

function modalFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
  popup.parentElement.classList.toggle('popupOpened');
}

function modalFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
  popup.parentElement.classList.toggle('popupOpened');
}