// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
const countLanguage = list1.reduce((acc, current) => {
    const language = current.language;
    if (acc[language]) {
        acc[language] = acc[language] + 1;
    } else {
        acc[language] = 1;
    }

    return acc;
}, {});

console.log(countLanguage);