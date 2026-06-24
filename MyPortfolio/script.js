
const portfolioData = {
    profile: {
        name: "Дмитрий",
        proffesion: "студент",
        age: 19
    },
    projects: [
        {
            id: 0,
            title: "Zleepy",
            category: "Mobile development",
            description: "Мобильное приложение для контроля экранного времени",
            image: "images/sleep.jpg",
            likes: 152,
            technologies: ["Kotlin", "Java", "SQLite"]
        },
        {
            id: 1,
            title: "Консольный калькулятор",
            category: "Desktop development",
            description: "Консольный калькулятор для вычисления сложных выражений",
            image: "images/expresions.png",
            likes: 80,
            technologies: ["C++", "Cartesian tree"]
        },
        {
            id: 2,
            title: "Библиотека длинной арифметики для C++",
            category: "Desktop development",
            description: "Описание и реализация класса LongNumber для работы с большими целыми числами на основе длинной арифметики",
            image: "images/addition.jfif",
            likes: 101,
            technologies: ["C++"]
        },
        {
            id: 3,
            title: "Крутетская круть",
            category: "Жесть полная",
            description: "Какой-то невероятно крутой проект, который я ещё не придумал",
            image: "images/coming_soon.jfif",
            likes: 43,
            technologies: ["Древнеславянские технологии"]
        }
    ],
    preferences: {
        "theme": "dark",
        "language": "ru"
    }
}

const projectsContainer = document.querySelector(".projects-section");

portfolioData.projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("card");

    const title = document.createElement("h3");
    title.textContent = project.title;
    const descripion = document.createElement("p");
    descripion.textContent = project.description;
    const img = document.createElement("img");
    img.classList.add("card-image");
    img.setAttribute("src", project.image);

    projectCard.append(img, title, descripion);

    projectsContainer.append(projectCard);
});