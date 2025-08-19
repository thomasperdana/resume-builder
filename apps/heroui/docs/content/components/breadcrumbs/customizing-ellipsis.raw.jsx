import {
  Breadcrumbs,
  BreadcrumbItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export default function App() {
  return (
    <Breadcrumbs
      itemsAfterCollapse={2}
      itemsBeforeCollapse={1}
      maxItems={3}
      renderEllipsis={({items, ellipsisIcon, separator}) => (
        <div className="flex items-center">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly className="min-w-6 w-6 h-6" size="sm" variant="flat">
                {ellipsisIcon}
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Routes">
              {items.map((item, index) => (
                <DropdownItem key={index} href={item.href}>
                  {item.children}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          {separator}
        </div>
      )}
    >
      <BreadcrumbItem href="#home">Home</BreadcrumbItem>
      <BreadcrumbItem href="#music">Music</BreadcrumbItem>
      <BreadcrumbItem href="#artist">Artist</BreadcrumbItem>
      <BreadcrumbItem href="#album">Album</BreadcrumbItem>
      <BreadcrumbItem href="#featured">Featured</BreadcrumbItem>
      <BreadcrumbItem href="#song">Song</BreadcrumbItem>
    </Breadcrumbs>
  );
}
