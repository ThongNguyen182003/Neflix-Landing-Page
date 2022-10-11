const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function seclectItem(e) {
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    //Grab content for DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //Add
    tabContentItem.classList.add('show');
    console.log(this.id);
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'));
}


tabItems.forEach(item => item.addEventListener('click', seclectItem));