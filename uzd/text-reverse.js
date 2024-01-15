function reverse(text) {
    let ats = '';

    // 1)
    // for (let i = 0; i < text.length; i++) {
    //     const x = text.length - 1 - i;
    //     ats += text[x];
    // }

    // 2)
    // for (let i = 0; i < text.length; i++) {
    //     ats = text[i] + ats;
    // }

    // 3
    for (let i = text.length - 1; i >= 0; i--) {
        ats += text[i];
    }

    return ats;
}

console.log(reverse('abc'), '-->', 'cba');
console.log(reverse('labas'), '-->', 'sabal');
console.log(reverse('sedek'), '-->', 'kedes');