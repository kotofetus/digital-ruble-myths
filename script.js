// БАЗА ДАННЫХ: мифы, факты, метафоры (14 актуальных)
const mythsData = [
    {
        id: 1,
        title: "Цифровой рубль — это криптовалюта",
        fact: "Цифровой рубль — третья форма национальной валюты, эмитируется Банком России, как наличные и безналичные. У криптовалют нет единого эмитента и гарантий сохранности.",
        metaphor: "Представьте, что у вас есть рубль: бумажная купюра, цифра на карте и цифровой код на кошельке ЦБ. Это один и тот же рубль, просто в разной «упаковке». А криптовалюта — это вообще другая валюта, как доллар или евро, только без банка-эмитента.",
        image: "1.jpg"
    },
    {
        id: 2,
        title: "К использованию цифрового рубля принудят",
        fact: "Никакого принуждения нет. Вы сами решаете, какой формой денег пользоваться. Открытие цифрового кошелька — добровольное.",
        metaphor: "Когда появились банковские карты, никто не заставлял вас ими пользоваться. Вы могли по-прежнему получать зарплату в кассе. Цифровой рубль — такой же дополнительный способ, а не замена.",
        image: "2.jpg"
    },
    {
        id: 3,
        title: "Это сложно, нужны новые приложения",
        fact: "Доступ через привычное приложение вашего банка. Никакой дополнительной техники или установок не требуется.",
        metaphor: "Как в мобильном банке появился раздел «Вклады» или «Инвестиции». Вы не качали новое приложение — просто обновился старый. С цифровым рублём будет так же.",
        image: "3.jpg"
    },
    {
        id: 4,
        title: "Чтобы отказаться, нужно идти в МФЦ",
        fact: "Отказываться не от чего. Кошелек открывается только по вашему желанию в приложении банка, никаких автоматических счетов.",
        metaphor: "Это как если бы вам сказали: «Чтобы отказаться от слона, идите в МФЦ». Но слона вам никто не дарил и не навязывал. Здесь то же самое — кошелька нет, пока вы сами его не откроете.",
        image: "4.jpg"
    },
    {
        id: 5,
        title: "Цифровые рубли ничем не отличаются от безналичных",
        fact: "Безналичные хранятся в коммерческих банках, цифровые — на платформе ЦБ. По цифровым рублям не начисляются проценты, они прежде всего для платежей.",
        metaphor: "Безналичные деньги — это как вещи в арендованном сейфе: банк может их использовать для своих нужд. Цифровые рубли — как ваш личный сейф в государственном хранилище: никто их не трогает, но и проценты не капают.",
        image: "5.jpg"
    },
    {
        id: 6,
        title: "Можно открыть вклад или взять кредит в цифровых рублях",
        fact: "Нет. Цифровой рубль — средство платежа, а не сбережения. Кредиты и вклады остаются в наличных/безналичных.",
        metaphor: "Цифровой рубль — это как купюра в кошельке. Вы не можете положить её на депозит, не отнеся в банк. Для вклада её нужно сначала перевести в безналичную форму.",
        image: "6.jpg"
    },
    {
        id: 7,
        title: "У цифрового рубля будет свой курс",
        fact: "Нет. 1 цифровой рубль = 1 обычному рублю. Это та же национальная единица, курс един.",
        metaphor: "Как если бы вы разменяли 100-рублёвую купюру на две 50-рублёвые монеты. Сумма та же, просто форма разная. Никакого отдельного курса быть не может.",
        image: "7.jpg"
    },
    {
        id: 8,
        title: "За использование будут большие комиссии",
        fact: "Для физических лиц все операции бесплатны. Для бизнеса минимальные тарифы (0,3% с 2026 г., но не более 1500₽).",
        metaphor: "Как Система быстрых платежей (СБП): переводы между своими счетами бесплатно, оплата в магазинах — без комиссии для вас. Для магазина комиссия ниже, чем за обычный эквайринг.",
        image: "8.jpg"
    },
    {
        id: 9,
        title: "Если потерять телефон, цифровые рубли пропадут",
        fact: "Деньги хранятся на платформе ЦБ, а не в телефоне. Потеря телефона не страшнее потери банковской карты.",
        metaphor: "Это как потерять ключ от сейфа, а не сами деньги. Сейф с вашими рублями стоит в надёжном месте — на платформе Банка России. Потеря телефона никак не влияет на сохранность средств.",
        image: "9.jpg"
    },
    {
        id: 10,
        title: "Цифровой рубль разгонит инфляцию",
        fact: "Нет. Цифровые рубли не печатаются дополнительно, они замещают часть наличных и безналичных. Общая масса денег не растёт.",
        metaphor: "Если в корзине с фруктами заменить часть яблок на груши, фруктов больше не станет. Просто меняется состав. Так и здесь: одни рубли заменяют другие, а не добавляются новые.",
        image: "10.jpg"
    },
    {
        id: 11,
        title: "Тотальный контроль и слежка за каждым",
        fact: "Действует банковская тайна. Доступ регуляторов такой же, как к обычным счетам. Никакой «панацеи слежки» нет.",
        metaphor: "Библиотекарь видит, какие книги вы берёте, но не рассказывает об этом всем подряд. А если приходит полиция с ордером на обыск — показывает формуляр. Здесь точно так же: банковская тайна защищена законом.",
        image: "11.jpg"
    },
    {
        id: 12,
        title: "Зарплаты и пенсии будут только в цифровых рублях",
        fact: "Нет, выбор остаётся за работодателем и гражданами. Наличные и безналичные не отменяются.",
        metaphor: "Сегодня вы можете выбрать: получать зарплату на карту или наличными в кассе. С цифровым рублём появится третий вариант, но право выбора останется за вами.",
        image: "12.jpg"
    },
    {
        id: 13,
        title: "С 1 июля (или любой даты) всех принудительно переведут",
        fact: "Никакой фиксированной даты принуждения нет. Пилот расширяется постепенно, добровольно.",
        metaphor: "Каждый год в интернете пишут: «с 1 января отключат электричество» или «закроют все банки». Это слухи, которые не имеют под собой никаких законов. То же самое и с датой принудительного перехода.",
        image: "13.jpg"
    },
    {
        id: 14,
        title: "Мошенники уже взломали платформу цифрового рубля",
        fact: "Платформа ЦБ защищена криптографически. Взломов не зафиксировано. Мошенники используют социнженерию, а не взлом системы.",
        metaphor: "Когда говорят «взломали Госуслуги», на самом деле чаще всего взламывают не саму систему, а конкретного человека — выманивают пароль. Технология цифрового рубля защищена на высшем уровне, опасность представляют звонки мошенников.",
        image: "14.jpg"
    }
];

// Состояние: для каждого ряда храним, открыт ли он, и какой миф открыт
let rowStates = new Map(); // key = индекс ряда, value = { isOpen: true/false, openCardId: id или null }

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

function getImageHtml(imageName) {
    return `
        <div class="myth-image-placeholder">
            <img src="${escapeHtml(imageName)}" alt="Иллюстрация" class="myth-image" onerror="this.style.display='none'; this.parentElement.innerHTML='<div class=\'image-fallback\'><span>🖼️</span><p>${escapeHtml(imageName)}</p></div>';">
        </div>
    `;
}

function getContentHtml(fact, metaphor) {
    return `
        <div class="fact-block">
            <h4>✅ ФАКТ</h4>
            <p>${escapeHtml(fact)}</p>
        </div>
        <div class="metaphor-block">
            <h4>🧠 МЕТАФОРА</h4>
            <p>${escapeHtml(metaphor)}</p>
        </div>
    `;
}

function renderMyths() {
    const container = document.getElementById('mythsGrid');
    if (!container) return;
    container.innerHTML = '';
    
    // Разбиваем на ряды по 3 карточки
    const rows = [];
    for (let i = 0; i < mythsData.length; i += 3) {
        rows.push(mythsData.slice(i, i + 3));
    }
    
    rows.forEach((row, rowIndex) => {
        // Создаём контейнер для ряда
        const rowContainer = document.createElement('div');
        rowContainer.className = 'myth-row';
        rowContainer.setAttribute('data-row', rowIndex);
        
        // Инициализируем состояние ряда
        if (!rowStates.has(rowIndex)) {
            rowStates.set(rowIndex, { isOpen: false, openCardId: null });
        }
        
        // Создаём карточки в ряду
        row.forEach((myth, colIndex) => {
            const card = document.createElement('div');
            card.className = 'myth-card';
            card.setAttribute('data-id', myth.id);
            card.setAttribute('data-row', rowIndex);
            card.setAttribute('data-col', colIndex);
            
            // Заголовок
            const headerDiv = document.createElement('div');
            headerDiv.className = 'myth-header';
            headerDiv.innerHTML = `<h3>${escapeHtml(myth.title)}</h3>`;
            
            // Контент (начинается с картинки)
            const contentDiv = document.createElement('div');
            contentDiv.className = 'myth-content';
            contentDiv.innerHTML = getImageHtml(myth.image);
            
            card.appendChild(headerDiv);
            card.appendChild(contentDiv);
            
            // Сохраняем данные
            card.mythData = myth;
            card.contentDiv = contentDiv;
            
            // Обработчик клика
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const currentRowState = rowStates.get(rowIndex);
                
                // Если ряд уже открыт и это та же карточка — закрываем весь ряд
                if (currentRowState.isOpen && currentRowState.openCardId === myth.id) {
                    // Закрываем все карточки в этом ряду (возвращаем всем только заголовки, без картинок)
                    const cardsInRow = rowContainer.querySelectorAll('.myth-card');
                    cardsInRow.forEach(cardInRow => {
                        const mythInRow = cardInRow.mythData;
                        const contentDivInRow = cardInRow.querySelector('.myth-content');
                        if (contentDivInRow && mythInRow) {
                            // Закрываем: убираем контент полностью (только заголовок)
                            contentDivInRow.innerHTML = '';
                            contentDivInRow.style.maxHeight = '0';
                            contentDivInRow.style.padding = '0';
                        }
                        cardInRow.classList.remove('open');
                    });
                    rowStates.set(rowIndex, { isOpen: false, openCardId: null });
                    return;
                }
                
                // Если ряд открыт с другой карточкой — закрываем старый ряд полностью
                if (currentRowState.isOpen && currentRowState.openCardId !== myth.id) {
                    const cardsInRow = rowContainer.querySelectorAll('.myth-card');
                    cardsInRow.forEach(cardInRow => {
                        const mythInRow = cardInRow.mythData;
                        const contentDivInRow = cardInRow.querySelector('.myth-content');
                        if (contentDivInRow && mythInRow) {
                            contentDivInRow.innerHTML = '';
                            contentDivInRow.style.maxHeight = '0';
                            contentDivInRow.style.padding = '0';
                        }
                        cardInRow.classList.remove('open');
                    });
                }
                
                // Открываем текущий ряд с выбранной карточкой
                const allCardsInRow = rowContainer.querySelectorAll('.myth-card');
                allCardsInRow.forEach((cardInRow, idx) => {
                    const mythInRow = cardInRow.mythData;
                    const contentDivInRow = cardInRow.querySelector('.myth-content');
                    
                    if (idx === colIndex) {
                        // Открытая карточка: показываем факт + метафору
                        contentDivInRow.innerHTML = getContentHtml(mythInRow.fact, mythInRow.metaphor);
                        contentDivInRow.style.maxHeight = '600px';
                        contentDivInRow.style.padding = '0 1.25rem 1.25rem 1.25rem';
                        cardInRow.classList.add('open');
                    } else {
                        // Соседние карточки: показываем картинки
                        contentDivInRow.innerHTML = getImageHtml(mythInRow.image);
                        contentDivInRow.style.maxHeight = '600px';
                        contentDivInRow.style.padding = '0 1.25rem 1.25rem 1.25rem';
                        cardInRow.classList.add('open');
                    }
                });
                
                rowStates.set(rowIndex, { isOpen: true, openCardId: myth.id });
            });
            
            rowContainer.appendChild(card);
        });
        
        container.appendChild(rowContainer);
        
        // Применяем начальное состояние (все закрыты — только заголовки)
        const currentState = rowStates.get(rowIndex);
        if (!currentState.isOpen) {
            const cardsInRow = rowContainer.querySelectorAll('.myth-card');
            cardsInRow.forEach(cardInRow => {
                const contentDivInRow = cardInRow.querySelector('.myth-content');
                if (contentDivInRow) {
                    contentDivInRow.innerHTML = '';
                    contentDivInRow.style.maxHeight = '0';
                    contentDivInRow.style.padding = '0';
                }
                cardInRow.classList.remove('open');
            });
        }
    });
    
    // Анимация появления
    setTimeout(() => {
        const cards = document.querySelectorAll('.myth-card');
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.classList.add('animated');
            }, i * 20);
        });
    }, 50);
}

function initCopyLink() {
    const copyBtn = document.getElementById('copyLinkBtn');
    if (!copyBtn) return;
    
    copyBtn.addEventListener('click', async () => {
        const url = window.location.href;
        try {
            await navigator.clipboard.writeText(url);
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = '✅ ссылка скопирована!';
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
            }, 2000);
        } catch (err) {
            alert('Скопируйте ссылку вручную: ' + url);
        }
    });
}

function handleQrImage() {
    const qrImg = document.getElementById('qrImage');
    if (!qrImg) return;
    
    qrImg.onerror = function() {
        this.style.display = 'none';
        const container = document.getElementById('qrContainer');
        if (container) {
            const fallback = document.createElement('div');
            fallback.className = 'qr-fallback';
            fallback.innerHTML = `
                <div style="background: #eef2ff; border-radius: 16px; padding: 12px;">
                    <div style="font-size: 1.5rem;">📱</div>
                    <div style="font-size: 0.7rem; color: #1e6f5c; margin-top: 4px;">QR-код</div>
                    <div style="font-size: 0.6rem; color: #64748b;">добавьте qr.jpg</div>
                </div>
            `;
            container.appendChild(fallback);
            const oldP = container.querySelector('p');
            if (oldP) oldP.style.display = 'none';
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    renderMyths();
    initCopyLink();
    handleQrImage();
});