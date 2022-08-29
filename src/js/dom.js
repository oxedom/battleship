export default (function () {
    'use strict';
    const content = document.getElementById('content')

    for (let index = 0; index < 100; index++) {
        const div = document.createElement('div')
        div.innerText = 'amit'
        content.append(div)

    }
})();
