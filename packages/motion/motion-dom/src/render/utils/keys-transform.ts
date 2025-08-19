/**
 * Generate a list of every possible transform key.
 */
export const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
]

/**
 * A quick lookup for transform props.
 */
export const transformProps = /*@__PURE__*/ (() =>
    new Set(transformPropOrder))()
