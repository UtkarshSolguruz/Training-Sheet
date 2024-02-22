// LOCAL STORAGE
localStorage.setItem('name','utkarsh');
// console.log(localStorage.getItem('name'))
localStorage.removeItem('name');

// SESSION
sessionStorage.setItem('name','sachin')
sessionStorage.setItem('name','tendulkar')//value will be overrided
// setting and removing items work exactly like local storage

// COOKIE
document.cookie = 'name=utkarsh;'