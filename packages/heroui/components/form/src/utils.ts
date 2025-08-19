/*
 * This file is copied from https://github.dev/adobe/react-spectrum/blob/2d4521098a3b4999f2e98b4d52d22483ee3451c8/packages/react-aria-components/src/utils.ts
 * We copied this internally to avoid installing the complete react-aria-components package.
 */
import type {CSSProperties, ForwardedRef, ReactNode, MutableRefObject} from "react";
import type {Context} from "react";
import type {RefObject, DOMProps as SharedDOMProps} from "@react-types/shared";

import {useContext, useMemo, useRef, useCallback} from "react";
import {mergeProps, mergeRefs} from "@heroui/shared-utils";

export const DEFAULT_SLOT = Symbol("default");

interface SlottedValue<T> {
  slots?: Record<string | symbol, T>;
}

export type WithRef<T, E> = T & {ref?: ForwardedRef<E>};
export type SlottedContextValue<T> = SlottedValue<T> | T | null | undefined;
export type ContextValue<T, E> = SlottedContextValue<WithRef<T, E>>;

export interface StyleProps {
  /** The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. */
  className?: string;
  /** The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. */
  style?: CSSProperties;
}

export interface DOMProps extends StyleProps, SharedDOMProps {
  /** The children of the component. */
  children?: ReactNode;
}

export interface SlotProps {
  /**
   * A slot name for the component. Slots allow the component to receive props from a parent component.
   * An explicit `null` value indicates that the local props completely override all props received from a parent.
   */
  slot?: string | null;
}

/**
 * Offers an object ref for a given callback ref or an object ref. Especially
 * helfpul when passing forwarded refs (created using `React.forwardRef`) to
 * React Aria hooks.
 *
 * @param ref The original ref intended to be used.
 * @returns An object ref that updates the given ref.
 * @see https://react.dev/reference/react/forwardRef
 */
export function useObjectRef<T>(
  ref?: ((instance: T | null) => (() => void) | void) | MutableRefObject<T | null> | null,
): MutableRefObject<T | null> {
  const objRef: MutableRefObject<T | null> = useRef<T>(null);
  const cleanupRef: MutableRefObject<(() => void) | void> = useRef(undefined);

  const refEffect = useCallback(
    (instance: T | null) => {
      if (typeof ref === "function") {
        const refCallback = ref;
        const refCleanup = refCallback(instance);

        return () => {
          if (typeof refCleanup === "function") {
            refCleanup();
          } else {
            refCallback(null);
          }
        };
      } else if (ref) {
        ref.current = instance;

        return () => {
          ref.current = null;
        };
      }
    },
    [ref],
  );

  return useMemo(
    () => ({
      get current() {
        return objRef.current;
      },
      set current(value) {
        objRef.current = value;
        if (cleanupRef.current) {
          cleanupRef.current();
          cleanupRef.current = undefined;
        }

        if (value != null) {
          cleanupRef.current = refEffect(value);
        }
      },
    }),
    [refEffect],
  );
}

export function useSlottedContext<T>(
  context: Context<SlottedContextValue<T>>,
  slot?: string | null,
): T | null | undefined {
  let ctx = useContext(context);

  if (slot === null) {
    // An explicit `null` slot means don't use context.
    return null;
  }
  if (ctx && typeof ctx === "object" && "slots" in ctx && ctx.slots) {
    let availableSlots = new Intl.ListFormat().format(Object.keys(ctx.slots).map((p) => `"${p}"`));

    if (!slot && !ctx.slots[DEFAULT_SLOT]) {
      throw new Error(`A slot prop is required. Valid slot names are ${availableSlots}.`);
    }
    let slotKey = slot || DEFAULT_SLOT;

    if (!ctx.slots[slotKey]) {
      // @ts-ignore
      throw new Error(`Invalid slot "${slot}". Valid slot names are ${availableSlots}.`);
    }

    return ctx.slots[slotKey];
  }

  // @ts-ignore
  return ctx;
}

export function useContextProps<T, U extends SlotProps, E extends Element>(
  props: T & SlotProps,
  ref: ForwardedRef<E>,
  context: Context<ContextValue<U, E>>,
): [T, RefObject<E | null>] {
  let ctx = useSlottedContext(context, props.slot) || {};
  // @ts-ignore - TS says "Type 'unique symbol' cannot be used as an index type." but not sure why.
  let {ref: contextRef, ...contextProps} = ctx as any;
  let mergedRef = useObjectRef(useMemo(() => mergeRefs(ref, contextRef), [ref, contextRef]));
  let mergedProps = mergeProps(contextProps, props) as unknown as T;

  // mergeProps does not merge `style`. Adding this there might be a breaking change.
  if ("style" in contextProps && contextProps.style && "style" in props && props.style) {
    if (typeof contextProps.style === "function" || typeof props.style === "function") {
      // @ts-ignore
      mergedProps.style = (renderProps) => {
        let contextStyle =
          typeof contextProps.style === "function"
            ? contextProps.style(renderProps)
            : contextProps.style;
        let defaultStyle = {...renderProps.defaultStyle, ...contextStyle};
        let style =
          typeof props.style === "function"
            ? props.style({...renderProps, defaultStyle})
            : props.style;

        return {...defaultStyle, ...style};
      };
    } else {
      // @ts-ignore
      mergedProps.style = {...contextProps.style, ...props.style};
    }
  }

  return [mergedProps, mergedRef];
}
