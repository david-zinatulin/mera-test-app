const data = {
  boolean: true,
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
  file: {}
}

/**
 * TODOS:
 * 1) Properly display objects in arrays (MVP)
 * 2) Add comma after objects, for json
 * 3) Remake all styles from inline to css modules (MVP)
 * 4) Style button for displaying objects (?)
 * 5) Fix boolean display
 */

export default data;
