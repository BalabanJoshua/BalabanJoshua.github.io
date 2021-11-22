let themes = [
    ['#FCE38A', '#F38181'],
    ['#F54EA2', '#FF7676'],
    ['#17EAD9', '#6078EA'],
    ['#622774', '#C53364'],
    ['#7117EA', '#EA6060'],
    ['#42E695', '#3BB2B8'],
    ['#F02FC2', '#6094EA'],
    ['#65799B', '#5E2563'],
    ['#184E68', '#57CA85'],
    ['#5B247A', '#1BCEDF']
]

function loadTheme() {
    let rnd = Math.floor(Math.random() * themes.length);
    document.getElementById('title-cont').style.background = `linear-gradient(to bottom right, ${themes[rnd][0]}, ${themes[rnd][1]})`;

    var icn = document.getElementsByClassName('icn');
    for ( let i = 0; i < icn.length; i += 1 ) {
        icn[i].style.background = `linear-gradient(to bottom right, ${themes[rnd][0]}, ${themes[rnd][1]})`;
    }

    var cl_1 = document.getElementsByClassName('color-1');
    for ( let i = 0; i < cl_1.length; i += 1 ) {
        cl_1[i].style.color = themes[rnd][0];
    }

    var cl_2 = document.getElementsByClassName('color-2');
    for ( let i = 0; i < cl_2.length; i += 1 ) {
        cl_2[i].style.color = themes[rnd][1];
    }
}

loadTheme();

