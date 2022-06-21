export const SomeFunc = function(name) {
    if(isNaN(name)) {
        return `Hello, ${name}!`;
    }   else if(!isNaN(name)) {
        throw new Error('name is NAN');
    }   else {
        throw new Error('404 ;(');
    }
}