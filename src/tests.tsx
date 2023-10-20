import Test from "./types/Test"

const Web: Array<Test> = [
    {
        title: "Что такое фишинг?",
        variants: ["Вид морской ловли рыбы", "Метод атаки, при котором злоумышленник притворяется легитимной организацией для обмана пользователей", "Метод шифрования данных", "Технология для ускорения работы интернет-соединения"],
        correct: 1
    },
    {
        title: "Что такое двухфакторная аутентификация (2FA)?",
        variants: ["Метод атаки на сетевую безопасность", " Метод шифрования сообщений", "Метод проверки подлинности пользователя, который использует два разных фактора", "Метод скрытия данных в веб-браузере"],
        correct: 2
    },
    {
        title: " Какой из следующих паролей является наиболее безопасным?",
        variants: ["password123", "qwerty", "Tr0ub4dor&3", "abc123"],
        correct: 2
    },
    {
        title: "Какой из следующих способов обмена информацией по интернету является наиболее безопасным?",
        variants: ["HTTP", "HTTPS", "FTP", "Telnet"],
        correct: 1
    },
    {
        title: "Что такое файрвол (firewall) в компьютерной безопасности?",
        variants: ["Устройство для пожаротушения в офисе", "Программное или аппаратное средство, предназначенное для контроля и фильтрации сетевого трафика", "Имя сети Wi-Fi", "Стратегия защиты от морских пиратов"],
        correct: 1
    }
]
export {Web};