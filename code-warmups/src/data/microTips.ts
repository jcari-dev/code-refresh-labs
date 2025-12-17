export type MicroTip = {
    text: string;
    tag?: "Python" | "JavaScript" | "General" | "Fun";
};

export const MICRO_TIPS: MicroTip[] = [
    {
        tag: "Python",
        text: "`all([])` evaluates to `True`, and `any([])` evaluates to `False`."
    },
    {
        tag: "Python",
        text: "The `or` operator returns the first truthy operand, or the last operand if none are truthy."
    },
    {
        tag: "Python",
        text: "The slice expression `s[::-1]` returns a reversed copy of a sequence."
    },
    {
        tag: "Python",
        text: "`enumerate(iterable)` yields `(index, value)` pairs starting at index 0 by default."
    },
    {
        tag: "Python",
        text: "`dict.get(key, default)` returns `default` if the key is not present."
    },

    {
        tag: "JavaScript",
        text: "`===` compares both value and type without type coercion."
    },
    {
        tag: "JavaScript",
        text: "`new Set(iterable)` removes duplicate values while preserving insertion order."
    },
    {
        tag: "JavaScript",
        text: "`String.prototype.slice()` returns a substring without modifying the original string."
    },
    {
        tag: "JavaScript",
        text: "`Array.prototype.map()` returns a new array; `forEach()` returns `undefined`."
    },

    {
        tag: "General",
        text: "Pausing does not erase progress."
    },
    {
        tag: "General",
        text: "Short breaks improve sustained attention and reduce mental fatigue."
    },
    {
        tag: "General",
        text: "Sleep supports memory consolidation, including skill learning."
    },
    {
        tag: "General",
        text: "Writing things down reduces working memory load."
    },
    {
        tag: "General",
        text: "Focused work is more effective when interruptions are minimized."
    },
    {
        tag: "General",
        text: "Slower, deliberate practice improves long-term retention."
    },
    {
        tag: "General",
        text: "Clear goals reduce decision fatigue."
    },
    {
        tag: "General",
        text: "Consistent routines lower cognitive overhead."
    },
    {
        tag: "General",
        text: "Progress is measurable even when it feels slow."
    },
    {
        tag: "Fun",
        text: "Yes, this counts as progress."
    },
    {
        tag: "Fun",
        text: "You fixed it by accident? Still counts!"
    },
    {
        tag: "Fun",
        text: "Your code is doing exactly what you told it to do!"
    },
    {
        tag: "Fun",
        text: "Worked on the first try? That’s suspicious."
    },
    {
        tag: "Fun",
        text: "Can see this page? Cloudflare is having a good day!"
    },
        {
        tag: "Fun",
        text: "Drink water. It makes you more smort. No, really. Hydration is linked to cognitive performance!"
    },
    {
        tag: "Fun",
        text: "Blinking is allowed while coding."
    },

];
