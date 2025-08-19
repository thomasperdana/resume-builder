/**
 * Based on @react-aria/select with some modifications to support required attribute and
 * custom input/select props.
 */
import type {FocusableElement} from "@react-types/shared";
import type {ReactNode, RefObject} from "react";
import type {MultiSelectProps, MultiSelectState} from "@heroui/use-aria-multiselect";

import React from "react";
import {useFormReset} from "@heroui/use-form-reset";
import {useVisuallyHidden} from "@react-aria/visually-hidden";
import {useFormValidation} from "@react-aria/form";

import {selectData} from "./use-select";
export interface AriaHiddenSelectProps {
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string;
  /** The text label for the select. */
  label?: ReactNode;
  /** HTML form input name. */
  name?: string;
  /** Sets the disabled state of the select and input. */
  isDisabled?: boolean;
  /** Whether the select is required. */
  isRequired?: boolean;
}

type NativeHTMLSelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  keyof AriaHiddenSelectProps
>;

type CombinedAriaSelectProps = NativeHTMLSelectProps & AriaHiddenSelectProps;

export interface HiddenSelectProps<T> extends CombinedAriaSelectProps {
  /** State for the select. */
  state: MultiSelectState<T>;
  /** The selection mode for the select. */
  selectionMode: MultiSelectProps<T>["selectionMode"];
  /** A ref to the trigger element. */
  triggerRef: RefObject<FocusableElement>;
  /** A ref to the hidden `<select>` element. */
  selectRef?: RefObject<HTMLSelectElement>;
}

export interface AriaHiddenSelectOptions<T> extends CombinedAriaSelectProps {
  /** A ref to the hidden `<select>` element. */
  selectRef?: RefObject<HTMLSelectElement>;
  /** The selection mode for the select. */
  selectionMode: MultiSelectProps<T>["selectionMode"];
}

/**
 * Provides the behavior and accessibility implementation for a hidden `<select>` element, which
 * can be used in combination with `useSelect` to support browser form autofill, mobile form
 * navigation, and native HTML form submission.
 */
export function useHiddenSelect<T>(
  props: AriaHiddenSelectOptions<T>,
  state: MultiSelectState<T>,
  triggerRef: RefObject<FocusableElement>,
) {
  let data = selectData.get(state) || {};

  let {
    autoComplete,
    name = data.name,
    isDisabled = data.isDisabled,
    selectionMode,
    onChange,
    form,
  } = props;
  let {validationBehavior, isRequired, isInvalid} = data;
  let {visuallyHiddenProps} = useVisuallyHidden();

  useFormReset(props.selectRef!, state.selectedKeys, state.setSelectedKeys);
  useFormValidation(
    {
      validationBehavior,
      focus: () => triggerRef.current?.focus(),
    },
    state,
    props.selectRef,
  );

  return {
    containerProps: {
      ...visuallyHiddenProps,
      "aria-hidden": true,
      ["data-a11y-ignore"]: "aria-hidden-focus",
    },
    inputProps: {
      style: {display: "none"},
    },
    selectProps: {
      form,
      autoComplete,
      disabled: isDisabled,
      "aria-invalid": isInvalid || undefined,
      "aria-required": (isRequired && validationBehavior === "aria") || undefined,
      required: isRequired && validationBehavior === "native",
      name,
      tabIndex: -1,
      value:
        selectionMode === "multiple"
          ? [...state.selectedKeys].map((k) => String(k))
          : ([...state.selectedKeys][0] ?? ""),
      multiple: selectionMode === "multiple",
      onChange: (e: React.ChangeEvent<HTMLSelectElement>) => {
        state.setSelectedKeys(e.target.value);
        onChange?.(e);
      },
    },
  };
}

/**
 * Renders a hidden native `<select>` element, which can be used to support browser
 * form autofill, mobile form navigation, and native form submission.
 */
export function HiddenSelect<T>(props: HiddenSelectProps<T>) {
  let {state, triggerRef, selectRef, label, name, isDisabled, form} = props;

  let {containerProps, selectProps} = useHiddenSelect({...props, selectRef}, state, triggerRef);

  // If used in a <form>, use a hidden input so the value can be submitted to a server.
  // If the collection isn't too big, use a hidden <select> element for this so that browser
  // autofill will work. Otherwise, use an <input type="hidden">.
  if (state.collection.size <= 300) {
    return (
      <div {...containerProps} data-testid="hidden-select-container">
        <label>
          {label}
          <select {...selectProps} ref={selectRef}>
            <option />
            {[...state.collection.getKeys()].map((key) => {
              let item = state.collection.getItem(key);

              if (item?.type === "item") {
                return (
                  <option key={item.key} value={item.key}>
                    {item.textValue}
                  </option>
                );
              }
            })}
          </select>
        </label>
      </div>
    );
  } else if (name) {
    return (
      <input
        autoComplete={selectProps.autoComplete}
        disabled={isDisabled}
        form={form}
        name={name}
        type="hidden"
        value={[...state.selectedKeys].join(",") ?? ""}
      />
    );
  }

  return null;
}
