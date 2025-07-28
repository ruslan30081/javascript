const appData = {
    title: '',
    service1: '',
    servicePrice1: 0,
    service2: '',
    servicePrice2: 0,
    screenType: '',
    screenPrice: 0,
    rollback: 50,
    adaptive: false,
    result: 0,
    itemFullPrice: 0,
    itemServicePercentPrice: 0,
    itemAllServicePrices: 0,

    asking() {
        this.title = prompt("Введите название проекта");

        do {
            this.screenType = prompt("Выберите тип экрана:", ["Простые", "Сложные", "Интерактивные"]);
            if (this.screenType === "Простые" || this.screenType === "Сложные" || this.screenType === "Интерактивные") {
                console.log("screenType " + this.screenType);
            } else {
                alert("Неправильный выбор");
            }
        } while (this.screenType !== "Простые" && this.screenType !== "Сложные" && this.screenType !== "Интерактивные");

        do {
            this.screenPrice = prompt("Сколько будет стоить данная работа?");
            if (!isNaN(parseInt(this.screenPrice))) {
                console.log("screenPrice " + parseInt(this.screenPrice));
            } else {
                alert("Введите число");
            }
        } while (isNaN(parseInt(this.screenPrice)));

        do {
            this.service1 = prompt("Какой дополнительный тип услуги нужен?");
            if (this.service1 !== "") {
                console.log("service1 " + this.service1);
            } else {
                alert("Пожалуйста, введите название услуги");
            }
        } while (this.service1 === "");

        do {
            this.servicePrice1 = prompt("Сколько это будет стоить?");
            if (!isNaN(parseInt(this.servicePrice1))) {
                console.log("servicePrice1 " + parseInt(this.servicePrice1));
            } else {
                alert("Пожалуйста, введите стоимость услуги");
            }
        } while (isNaN(parseInt(this.servicePrice1)));

        do {
            this.service2 = prompt("Какой дополнительный тип услуги нужен?");
            if (this.service2 !== "") {
                console.log("service2 " + this.service2);
            } else {
                alert("Пожалуйста, введите название услуги");
            }
        } while (this.service2 === "");

        do {
            this.servicePrice2 = prompt("Сколько это будет стоить?");
            if (!isNaN(parseInt(this.servicePrice2))) {
                console.log("servicePrice2 " + parseInt(this.servicePrice2));
            } else {
                alert("Пожалуйста, введите стоимость услуги");
            }
        } while (isNaN(parseInt(this.servicePrice2)));

        this.adaptive = confirm("Нужен ли адаптив на сайте?");
    },

    getAllServicePrices(a, b) {
        return parseInt(a) + parseInt(b);
    },

    getFullPrice(screenPrice, allServicePrices) {
        return parseInt(screenPrice) + parseInt(allServicePrices);
    },

    getTitle(title) {
        title = title.toLowerCase();
        title = title.replace(/^\s+/, "");
        title = title[0].toUpperCase() + title.slice(1);
        return title;
    },

    getServicePercentPrices(itemFullPrice, rollback) {
        return Math.ceil(itemFullPrice - (itemFullPrice * rollback / 100));
    },

    showTypeOf(price) {
        if (price === 0) {
            console.log("Стоимость работы составляет 0 рублей");
            console.log("Итоговая стоимость: 0 рублей");
        } else if (price === 15000) {
            console.log("Стоимость работы составляет 15000 рублей");
            console.log("Итоговая стоимость: 15000 рублей");
        } else if (price === 30000) {
            console.log("Стоимость работы составляет 30000 рублей");
            console.log("Итоговая стоимость: 30000 рублей");
        } else if (price > 30000) {
            console.log("Даем скидку в 10%");
            const discount = price * 0.1;
            const finalPrice = price - discount;
            console.log("Итоговая стоимость: " + finalPrice);
        } else if (price > 15000 && price < 30000) {
            console.log("Даем скидку в 5%");
            const discount = price * 0.05;
            const finalPrice = price - discount;
            console.log("Итоговая стоимость: " + finalPrice);
        } else {
            console.log("Скидка не предусмотрена");
            console.log("Итоговая стоимость: " + price);
        }
    },

    logger() {
        console.log("=== ЛОГИРОВАНИЕ ОБЪЕКТА APPDATA ===");
        for (let key in this) {
            if (typeof this[key] === 'function') {
                console.log(`Метод: ${key}`);
            } else {
                console.log(`Свойство: ${key} = ${this[key]}`);
            }
        }
        console.log("=== КОНЕЦ ЛОГИРОВАНИЯ ===");
    },

    start() {
        this.asking();

        const itemTitle = this.getTitle(this.title);
        console.log(itemTitle);

        this.result = this.getAllServicePrices(this.servicePrice1, this.servicePrice2);
        console.log(this.result);

        this.itemFullPrice = this.getFullPrice(this.screenPrice, this.result);
        console.log(this.itemFullPrice);

        this.itemServicePercentPrice = this.getServicePercentPrices(this.itemFullPrice, this.rollback);
        console.log("стоимость за вычетом процента отката посреднику " + this.itemServicePercentPrice);

        this.itemAllServicePrices = this.getAllServicePrices(this.servicePrice1, this.servicePrice2);
        console.log(this.itemAllServicePrices);

        this.showTypeOf(this.itemFullPrice);

        this.logger();
    }
};

appData.start();