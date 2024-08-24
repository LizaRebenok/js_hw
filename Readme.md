# Homework description 

Вам потрібно написати реалізацію функції padString, яка приймає 4 аргументи:

рядок

число, яке є довгим рядок, який ми хочемо отримати в результаті виконання функції

символ (рядок довжиною 1 символ) — яким доповниться рядок, якщо це буде потрібно

параметр булеан (true або false), який визначає, додавати символи ліворуч або праворуч (за замовчуванням праворуч)

Обов'язково при написанні функції необхідно перевірити аргументи, які ми передали, і якщо якихось аргументів немає, то повернути рядок з помилкою з функції (return 'some error'). Повідомлення з помилкою має бути різним залежно від тієї умови, за якою не пройшла перевірка.

Результат виклику функції потрібно вивести в консоль після завершення функції.

Наприклад:

Виклик padString('hello', 8, '*') поверне рядок hello***

А виклик padString('hello', 6, '*', false) поверне рядок *hello

Виклик padString('hello', 2) поверне 'he' — якщо число менше розміру введеного рядка, потрібно рядок обрізати за допомогою методу substr