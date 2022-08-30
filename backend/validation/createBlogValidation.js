const createBlogsValidtor = ({title , description}) => {
    const errors = {};
    if(!title || typeof(title) !== 'string' || title.trim().length == 0) {
        errors.name = 'Название группы не может быть пустым';
    }
    if(!description || typeof(description) !== 'string' || description.trim().length == 0) {
        errors.name = 'Старт группы не может быть пустым';
    }
    return errors
}

module.exports = {
    createBlogsValidtor
}