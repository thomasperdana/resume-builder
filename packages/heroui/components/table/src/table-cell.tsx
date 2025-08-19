import type {GridNode} from "@react-types/grid";
import type {TableColumnProps} from "./base";
import type {Key} from "react";
import type {HTMLHeroUIProps} from "@heroui/system";
import type {ValuesType} from "./use-table";

import {useMemo} from "react";
import {forwardRef} from "@heroui/system";
import {useDOMRef, filterDOMProps} from "@heroui/react-utils";
import {clsx, dataAttr, mergeProps} from "@heroui/shared-utils";
import {useTableCell} from "@react-aria/table";
import {useFocusRing} from "@react-aria/focus";

// @internal
export interface TableCellProps<T = object> extends HTMLHeroUIProps<"td"> {
  /**
   * The key of the table row.
   */
  rowKey: Key;
  /**
   * The table cell.
   */
  node: GridNode<T>;
  slots: ValuesType["slots"];
  state: ValuesType["state"];
  classNames?: ValuesType["classNames"];
}

const TableCell = forwardRef<"td", TableCellProps>((props, ref) => {
  const {as, className, node, rowKey, slots, state, classNames, ...otherProps} = props;

  const Component = as || "td";
  const shouldFilterDOMProps = typeof Component === "string";

  const domRef = useDOMRef(ref);

  const {gridCellProps} = useTableCell({node}, state, domRef);

  const tdStyles = clsx(classNames?.td, className, node.props?.className);
  const {isFocusVisible, focusProps} = useFocusRing();
  const isRowSelected = state.selectionManager.isSelected(rowKey);

  const cell = useMemo(() => {
    const cellType = typeof node.rendered;

    return cellType !== "object" && cellType !== "function" ? (
      <span>{node.rendered}</span>
    ) : (
      node.rendered
    );
  }, [node.rendered]);

  const columnProps: TableColumnProps<unknown> = node.column?.props || {};

  return (
    <Component
      ref={domRef}
      data-focus-visible={dataAttr(isFocusVisible)}
      data-selected={dataAttr(isRowSelected)}
      {...mergeProps(
        gridCellProps,
        focusProps,
        filterDOMProps(node.props, {
          enabled: shouldFilterDOMProps,
        }),
        otherProps,
      )}
      className={slots.td?.({align: columnProps.align, class: tdStyles})}
    >
      {cell}
    </Component>
  );
});

TableCell.displayName = "HeroUI.TableCell";

export default TableCell;
