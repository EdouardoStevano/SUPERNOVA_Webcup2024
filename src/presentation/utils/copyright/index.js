function getCopyright() {
    const dateCreated = 2024;
    const currentYear = (new Date()).getFullYear();
    const projectName = process.env.REACT_APP_PROJECT_NAME || "Supernova";

    if (currentYear <= dateCreated) {
        return `${dateCreated}-${projectName}`;
    }

    return `&copy;${dateCreated}-${currentYear} ${projectName}`;
}

export default getCopyright