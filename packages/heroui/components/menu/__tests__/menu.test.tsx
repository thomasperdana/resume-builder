import type {UserEvent} from "@testing-library/user-event";

import * as React from "react";
import {render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import {Menu, MenuItem, MenuSection} from "../src";

describe("Menu", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should render correctly", () => {
    const wrapper = render(
      <Menu aria-label="Actions" onAction={alert}>
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = React.createRef<HTMLUListElement>();

    render(
      <Menu ref={ref} aria-label="Actions" onAction={alert}>
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );
    expect(ref.current).not.toBeNull();
  });

  it("should render correctly (static)", () => {
    const wrapper = render(
      <Menu aria-label="Actions" onAction={alert}>
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render correctly (dynamic)", () => {
    const menuItems = [
      {key: "new", name: "New File"},
      {key: "copy", name: "Copy Link"},
      {key: "edit", name: "Edit File"},
      {key: "delete", name: "Delete File"},
    ];

    const wrapper = render(
      <Menu aria-label="Actions" items={menuItems}>
        {(item: any) => <MenuItem key={item.key}>{item.name}</MenuItem>}
      </Menu>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render correctly with section (static)", () => {
    const wrapper = render(
      <Menu aria-label="Actions" onAction={alert}>
        <MenuSection title="Actions">
          <MenuItem key="new">New file</MenuItem>
          <MenuItem key="copy">Copy link</MenuItem>
        </MenuSection>
        <MenuSection title="Danger Zone">
          <MenuItem key="edit">Edit file</MenuItem>
          <MenuItem key="delete" color="danger">
            Delete file
          </MenuItem>
        </MenuSection>
      </Menu>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should render correctly with section (dynamic)", () => {
    const menuItems = [
      {
        key: "actions",
        title: "Actions",
        children: [
          {key: "new", name: "New File"},
          {key: "copy", name: "Copy Link"},
          {key: "edit", name: "Edit File"},
        ],
      },
      {
        key: "danger",
        title: "Danger Zone",
        children: [{key: "delete", name: "Delete File"}],
      },
    ];

    const wrapper = render(
      <Menu aria-label="Actions" items={menuItems}>
        {(section: any) => (
          <MenuSection aria-label={section.title} items={section.children} title={section.title}>
            {/* @ts-ignore */}
            {(item: any) => <MenuItem key={item.key}>{item.name}</MenuItem>}
          </MenuSection>
        )}
      </Menu>,
    );

    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("should work with single selection (controlled)", async () => {
    let onSelectionChange = jest.fn();

    const wrapper = render(
      <Menu
        disallowEmptySelection
        aria-label="Actions"
        selectionMode="single"
        onSelectionChange={onSelectionChange}
      >
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menu = wrapper.getByRole("menu");

    expect(menu).toBeTruthy();

    let menuItems = wrapper.getAllByRole("menuitemradio");

    expect(menuItems.length).toBe(4);

    await user.click(menuItems[1]);
    expect(onSelectionChange).toHaveBeenCalledTimes(1);
  });

  it("should work with multiple selection (controlled)", async () => {
    let onSelectionChange = jest.fn();

    const wrapper = render(
      <Menu
        disallowEmptySelection
        aria-label="Actions"
        selectionMode="multiple"
        onSelectionChange={onSelectionChange}
      >
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menu = wrapper.getByRole("menu");

    expect(menu).toBeTruthy();

    let menuItems = wrapper.getAllByRole("menuitemcheckbox");

    expect(menuItems.length).toBe(4);

    await user.click(menuItems[0]);
    expect(onSelectionChange).toHaveBeenCalledTimes(1);
  });

  it("should show checkmarks if selectionMode is single and has a selected item", () => {
    const wrapper = render(
      <Menu aria-label="Actions" selectedKeys={["new"]} selectionMode="single">
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menuItems = wrapper.getAllByRole("menuitemradio");

    expect(menuItems.length).toBe(4);

    expect(menuItems[0].getAttribute("aria-checked")).toBe("true");
    expect(menuItems[1].getAttribute("aria-checked")).toBe("false");
    expect(menuItems[2].getAttribute("aria-checked")).toBe("false");
    expect(menuItems[3].getAttribute("aria-checked")).toBe("false");

    let svg = menuItems[0].querySelector("svg");

    expect(svg).toBeTruthy();

    expect(svg?.getAttribute("data-selected")).toBe("true");
  });

  it("should show multiple checkmarks if selectionMode is multiple and has selected items", () => {
    const wrapper = render(
      <Menu aria-label="Actions" selectedKeys={["new", "copy"]} selectionMode="multiple">
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menuItems = wrapper.getAllByRole("menuitemcheckbox");

    expect(menuItems.length).toBe(4);

    expect(menuItems[0].getAttribute("aria-checked")).toBe("true");
    expect(menuItems[1].getAttribute("aria-checked")).toBe("true");
    expect(menuItems[2].getAttribute("aria-checked")).toBe("false");
    expect(menuItems[3].getAttribute("aria-checked")).toBe("false");

    let checkmark1 = menuItems[0].querySelector("svg");

    expect(checkmark1).toBeTruthy();

    expect(checkmark1?.getAttribute("data-selected")).toBe("true");

    let checkmark2 = menuItems[1].querySelector("svg");

    expect(checkmark2).toBeTruthy();

    expect(checkmark2?.getAttribute("data-selected")).toBe("true");
  });

  it("should not show checkmarks if selectionMode not defined", () => {
    const wrapper = render(
      <Menu aria-label="Actions" selectedKeys={["new", "copy"]}>
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menuItems = wrapper.getAllByRole("menuitem");

    expect(menuItems.length).toBe(4);

    expect(menuItems[0].getAttribute("aria-checked")).toBeFalsy();
    expect(menuItems[1].getAttribute("aria-checked")).toBeFalsy();
    expect(menuItems[2].getAttribute("aria-checked")).toBeFalsy();
    expect(menuItems[3].getAttribute("aria-checked")).toBeFalsy();

    let checkmark1 = menuItems[0].querySelector("svg");

    expect(checkmark1).toBeFalsy();
  });

  it("should dispatch onAction events correctly", async () => {
    let onAction = jest.fn();

    const wrapper = render(
      <Menu aria-label="Actions" onAction={onAction}>
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menuItems = wrapper.getAllByRole("menuitem");

    await user.click(menuItems[1]);
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("should not dispatch onAction events if item is disabled", async () => {
    let onAction = jest.fn();

    const wrapper = render(
      <Menu aria-label="Actions" onAction={onAction}>
        <MenuItem key="new">New file</MenuItem>
        <MenuItem key="copy" isDisabled>
          Copy link
        </MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menuItems = wrapper.getAllByRole("menuitem");

    await user.click(menuItems[1]);
    expect(onAction).toHaveBeenCalledTimes(0);
  });

  it("should dispatch onPress, onAction and onClick events", async () => {
    let onPress = jest.fn();
    let onClick = jest.fn();
    let onAction = jest.fn();

    const wrapper = render(
      <Menu aria-label="Actions" onAction={onAction}>
        <MenuItem key="new" onClick={onClick} onPress={onPress}>
          New file
        </MenuItem>
        <MenuItem key="copy">Copy link</MenuItem>
        <MenuItem key="edit">Edit file</MenuItem>
        <MenuItem key="delete" color="danger">
          Delete file
        </MenuItem>
      </Menu>,
    );

    let menuItems = wrapper.getAllByRole("menuitem");

    await user.click(menuItems[0]);

    expect(onAction).toHaveBeenCalledTimes(1);
    expect(onPress).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should menuItem classNames work", () => {
    const wrapper = render(
      <Menu>
        <MenuItem key="new" classNames={{title: "test"}}>
          New file
        </MenuItem>
      </Menu>,
    );
    const menuItem = wrapper.getByText("New file");

    expect(menuItem.classList.contains("test")).toBeTruthy();
  });

  it("should menuItem classNames override menu itemClasses", () => {
    const wrapper = render(
      <Menu itemClasses={{title: "test"}}>
        <MenuItem key="new" classNames={{title: "test2"}}>
          New file
        </MenuItem>
      </Menu>,
    );
    const menuItem = wrapper.getByText("New file");

    expect(menuItem.classList.contains("test2")).toBeTruthy();
  });
  it("should merge menu item classNames with itemClasses", () => {
    const wrapper = render(
      <Menu itemClasses={{title: "test"}}>
        <MenuItem key="new" classNames={{title: "test2"}}>
          New file
        </MenuItem>
        <MenuItem key="delete">Delete file</MenuItem>
      </Menu>,
    );

    const menuItemWithBoth = wrapper.getByText("New file");
    const menuItemWithDefault = wrapper.getByText("Delete file");

    // Check first MenuItem has both classes
    expect(menuItemWithBoth.classList.contains("test2")).toBeTruthy();
    expect(menuItemWithBoth.classList.contains("test")).toBeTruthy();

    // Check second MenuItem only has the default class
    expect(menuItemWithDefault.classList.contains("test")).toBeTruthy();
    expect(menuItemWithDefault.classList.contains("test2")).toBeFalsy();
  });

  it("should truncate the text if the child is not a string", () => {
    const wrapper = render(
      <Menu>
        <MenuItem key="new">New file</MenuItem>
      </Menu>,
    );

    const menuItem = wrapper.getByText("New file");

    expect(menuItem).toHaveProperty("className", expect.stringContaining("truncate"));
  });

  it("should not truncate the text if the child is a string", () => {
    const wrapper = render(
      <Menu>
        <MenuItem key="new">
          <div>New file</div>
        </MenuItem>
      </Menu>,
    );

    const menuItem = wrapper.getByText("New file").parentElement;

    expect(menuItem).not.toHaveProperty("className", expect.stringContaining("truncate"));
  });
});
