import { animations } from "../../../motion/features/animations"
import { drag } from "../../../motion/features/drag"
import { gestureAnimations } from "../../../motion/features/gestures"
import { layout } from "../../../motion/features/layout"

export const featureBundle = {
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout,
}
