const data = {
    isReadable: true,
    title: 'example glossary',
    GlossDiv: {
        title: 'S',
        GlossList: {
            GlossEntry: {
                ID: 'SGML',
                SortAs: 'SGML',
                GlossDef: {
                    para: 'A meta-markup language, used to create markup languages such as DocBook.',
                    GlossSeeAlso: ['GML', 'XML'],
                },
                GlossSee: 'markup',
            },
        },
    },
    example: null,
    file: {},
    tags: [
        { fire: '1', pushka: { name: 'easy' } },
        { fire: '2', pushka: true },
    ],
};

/**
 * TODOS:
 * 1) Style button for displaying objects
 */

export default data;
