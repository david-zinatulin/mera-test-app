const data = {
    isReadable: true,
    title: "example glossary",
    GlossDiv: {
        title: "S",
        GlossList: {
            GlossEntry: {
                ID: "SGML",
                SortAs: "SGML",
                GlossDef: {
                    para: "A meta-markup language, used to create markup languages such as DocBook.",
                    "GlossSeeAlso": ["GML", "XML"]
                },
                GlossSee: "markup"
            }
        }
    },
    file: {},
    tags: [{ fire: "1", pushka: false }, { fire: "2", pushka: true }]
}

/**
 * TODOS:
 * 1) Style button for displaying objects (?)
 * 2) Proper display of null and undefined
 */

export default data;
