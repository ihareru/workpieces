document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form[name='search_user']");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        const searchQuery = document.getElementById("search_user").value.trim(); // Получаем значение поля
        if (!searchQuery) {
            console.warn("Поисковый запрос пуст.");
            return;
        }

        console.log("Отправка поискового запроса:", searchQuery);

        try {
            const response = await fetch("/get_json", {  // Укажи свой URL обработчика
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ search_user: searchQuery }),
            });

            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }

            const result = await response.json();
            console.log("Результат поиска:", result);
        } catch (error) {
            console.error("Ошибка при отправке запроса:", error);
        }
    });
});
