const keyboardsLayouts = {
    numeric: {

        label: 'Números',
        rows: [

            ["1", "2", "3", "4", "5", { label: "[(]", shift: "\\lfloor", variants: ["\\lfloor", "\\lbrack", "\\lbrace", "\\vert"] }, { label: "[)]", shift: "\\rfloor", variants: ["\\rfloor", "\\rbrack", "\\rbrace", "\\vert"] }, { label: "[backspace]", width: 1 }],
            ["6", "7", "8", "9", "0", "x", "y", "=",],
            ["+", "-", { latex: "\\cdot", label: "*" }, "\\frac", ".", ",", "[left]", "[right]"],



        ]
    },



    functions: {

        label: 'Funciones',
        rows: [
            [{ latex: "f\\left(x\\right)", width: 2 }, { label: "tan()", latex: "\\tan\\left(#?\\right)", shift: "\\tan^{-1}\\left(#?\\right)", width: 2 }, { label: "aᵇ", latex: "#@^{#?}" }, { latex: "#?^2", }, "\\sqrt{#?}", { latex: "\\lbrace", shift: "\\vert" }, { latex: "\\rbrace", shift: "\\vert" }, { label: "[backspace]", width: 1 }],
            [{ label: "sin()", latex: "\\sin\\left(#?\\right)", shift: "\\sin^{-1}\\left(#?\\right)", width: 2 }, { label: "cos()", latex: "\\cos\\left(#?\\right)", shift: "\\cos^{-1}\\left(#?\\right)", width: 2 }, { latex: "\\cup", shift: "\\cap", variants: ["\\cap"] }, { label: "ln()", latex: "\\ln\\left(#?\\right)" }, "\\exponentialE^{#?}", "\\lbrack", "\\rbrack", ";"],
            [{ label: "R", variants: ["Z"], shift: "Z" }, "\\infty", "\\lfloor", "\\rfloor", "c",
                "\\nexists", "\\pi", "[left]", "[right]", { label: "[shift]", width: 1 }]






        ],

    },





























    numericV2: {

        label: 'Números',
        rows: [

            ["1", "2", "3", "+", "=", { label: "[backspace]", width: 1 }],
            ["4", "5", "6", "-", "x", "y",],
            ["7", "8", "9", "\\cdot", "[(]", "[)]"],
            [".", "0", ",", "\\frac", "[left]", "[right]"],



        ]
    },



    functionsV2: {

        label: 'Funciones',
        rows: [

            [{ latex: "f\\left(x\\right)", width: 2 }, { latex: "#?^2", shift: { label: "aᵇ", latex: "#@^{#?}" } }, "\\sqrt{#?}", "\\lbrace", "\\rbrace", { label: "[backspace]", width: 1 }],
            [{ label: "sin()", latex: "\\sin\\left(#?\\right)", shift: { label: "\\sin^{-1}\\left(\\right)", latex: "\\sin^{-1}\\left(#?\\right)" }, width: 2 }, "\\ln\\left(\\right)", "\\exponentialE^{#?}", "\\lbrack", "\\rbrack", ";"],
            [{ label: "cos()", latex: "\\cos\\left(#?\\right)", shift: { label: "\\cos^{-1}\\left(\\right)", latex: "\\cos^{-1}\\left(#?\\right)" }, width: 2 }, "R", "\\infty", { label: "[(]", shift: "\\lfloor" }, { label: "[)]", shift: "\\rfloor" }, "\\cup"],
            [{ label: "tan()", latex: "\\tan\\left(#?\\right)", shift: { label: "\\tan^{-1}\\left(\\right)", latex: "\\tan^{-1}\\left(#?\\right)" }, width: 2 }, "\\nexists", "\\pi", "[left]", "[right]", { label: "[shift]", width: 1 }]


        ]

    },


}