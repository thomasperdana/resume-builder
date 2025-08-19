import type { AnimationDefinition } from "motion-dom"
import { AnyResolvedKeyframe, MotionValue } from "motion-dom"
import type { Axis, Box } from "motion-utils"
import { ReducedMotionConfig } from "../context/MotionConfigContext"
import type { PresenceContextProps } from "../context/PresenceContext"
import { MotionProps } from "../motion/types"
import { VisualState } from "../motion/utils/use-visual-state"
import { DOMMotionComponents } from "./dom/types"
import type { VisualElement } from "./VisualElement"

export type ScrapeMotionValuesFromProps = (
    props: MotionProps,
    prevProps: MotionProps,
    visualElement?: VisualElement
) => {
    [key: string]: MotionValue | AnyResolvedKeyframe
}

export type UseRenderState<RenderState = any> = () => RenderState

export interface VisualElementOptions<Instance, RenderState = any> {
    visualState: VisualState<Instance, RenderState>
    parent?: VisualElement<unknown>
    variantParent?: VisualElement<unknown>
    presenceContext: PresenceContextProps | null
    props: MotionProps
    blockInitialAnimation?: boolean
    reducedMotionConfig?: ReducedMotionConfig
}

/**
 * A generic set of string/number values
 */
export interface ResolvedValues {
    [key: string]: AnyResolvedKeyframe
}

export interface VisualElementEventCallbacks {
    BeforeLayoutMeasure: () => void
    LayoutMeasure: (layout: Box, prevLayout?: Box) => void
    LayoutUpdate: (layout: Axis, prevLayout: Axis) => void
    Update: (latest: ResolvedValues) => void
    AnimationStart: (definition: AnimationDefinition) => void
    AnimationComplete: (definition: AnimationDefinition) => void
    LayoutAnimationStart: () => void
    LayoutAnimationComplete: () => void
    SetAxisTarget: () => void
    Unmount: () => void
}

export interface LayoutLifecycles {
    onBeforeLayoutMeasure?(box: Box): void

    onLayoutMeasure?(box: Box, prevBox: Box): void

    /**
     * @internal
     */
    onLayoutAnimationStart?(): void

    /**
     * @internal
     */
    onLayoutAnimationComplete?(): void
}

export type CreateVisualElement<
    Props = {},
    TagName extends keyof DOMMotionComponents | string = "div"
> = (
    Component: TagName | string | React.ComponentType<Props>,
    options: VisualElementOptions<HTMLElement | SVGElement>
) => VisualElement<HTMLElement | SVGElement>
