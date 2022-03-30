function DateDiff(sDate1, sDate2) {
    let aDate = sDate1.split('-'),
        oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    aDate = sDate2.split('-');
    let oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
    return parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24);
}

function Ayn(name, relation, time) {
    this.name = name;
    this.relation = relation;
    this.time = time;
}

const d = document.querySelector('.distance');
const ayn = new Ayn('Ayn', "Je t'aime tant", '2016-12-24');

Ayn.prototype.Acquaintance = function () {
    let d = new Date(),
        now = d.getFullYear() + '-' + Number(d.getMonth() + 1) + '-' + d.getDate();
    return `${this.name} ${this.relation} ${DateDiff(this.time, now)}T`;
};

document.title = ayn.Acquaintance();
d.innerHTML = ayn.Acquaintance();
console.log(`${ayn.Acquaintance()}`);
console.log('我如此爱你');

let data = {
    2016: '長天本空色，惟心一暈酥。',
    2017: '曾許空月道為真，滿緒伊卿問是情。',
    2018: '天遠兮，無涯。茲君兮，為尚。望長天以執緒兮，孤為頌。',
    2019: '度以眸，覓以士卿洵洵之置。',
    2020: '恍然期許不知意，十年驚覺一夕夢。',
    2021: '銀鉤弄不復，枕心請夢華。',
    2022: '己是梢頭獨一枝，何必人間丹青色。',
    now: '蘇之梓兮，謬月之上兮，夢兮尋兮，倏不見兮。梓之傾愉，邂以紓臻，梓之桑情，涉以苾馨。蘇之梓兮，謬月之上兮，夢兮尋兮，奈及人兮。',
    future: '蘇有百梧，如至期期。',
};

let timerTitle = document.getElementsByClassName('timerTitle'),
    now = document.querySelector('.now');
now.innerHTML = data.now;

timerTitle[0].addEventListener('click', function (e) {
    for (let i = 0; i < timerTitle[0].children.length; i++) {
        timerTitle[0].children[i].classList.remove('that');
    }
    e.target.classList.add('that');
    now.innerHTML = data[e.target.dataset.index];
});
