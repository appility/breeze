import { Fragment, useState, useRef, useEffect } from "react";
import {
  Popover as HeadlessPopover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";

interface PopoverProps {
  children: React.ReactNode;
  trigger?: "click" | "hover";
  position?: "top" | "bottom" | "left" | "right";
  portal?: boolean;
}

export const Popover = ({
  children,
  trigger = "click",
  position = "bottom",
  portal = false,
}: PopoverProps) => {
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const [hoverOpen, setHoverOpen] = useState(false);
  const [panelStyles, setPanelStyles] = useState({});
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const isHover = trigger === "hover";

  const updatePanelPosition = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPanelStyles(
        portal
          ? {
              position: "fixed",
              top: position === "bottom" ? rect.bottom + 8 : position === "top" ? rect.top - 8 : rect.top,
              left: position === "right" ? rect.right + 8 : position === "left" ? rect.left - 8 : rect.left,
              width: "max-content",
              zIndex: 9999,
            }
          : {}
      );
    }
  };

  useEffect(() => {
    if (isHover && hoverOpen) {
      updatePanelPosition();
    }
  }, [hoverOpen, position, portal]);

  const handleMouseEnter = () => {
    if (isHover) {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      setHoverOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (isHover) {
      closeTimer.current = setTimeout(() => {
        setHoverOpen(false);
      }, 150);
    }
  };

  return (
    <HeadlessPopover as="div" className="relative overflow-visible">
      {({ open }) => {
        const isOpen = isHover ? hoverOpen : open;

        return (
          <div
            onMouseEnter={isHover ? handleMouseEnter : undefined}
            onMouseLeave={isHover ? handleMouseLeave : undefined}
          >
            <PopoverButton
              ref={triggerRef}
              className="outline-none"
            >
              {Array.isArray(children) ? children[0] : children}
            </PopoverButton>

            <Transition
              as={Fragment}
              show={isOpen}
              enter="transition-opacity duration-200 ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150 ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {portal ? (
                <PopoverPanel
                  static
                  style={panelStyles}
                  className="fixed bg-white border border-gray-300 rounded-md shadow-lg p-3"
                >
                  {Array.isArray(children) ? children[1] : null}
                </PopoverPanel>
              ) : (
                <PopoverPanel
                  static
                  style={panelStyles}
                  className={`absolute z-50 bg-white border border-gray-300 rounded-md shadow-lg p-3 ${
                    position === "top"
                      ? "bottom-full mb-2"
                      : position === "bottom"
                      ? "top-full mt-2"
                      : position === "left"
                      ? "right-full mr-2"
                      : "left-full ml-2"
                  }`}
                >
                  {Array.isArray(children) ? children[1] : null}
                </PopoverPanel>
              )}
            </Transition>
          </div>
        );
      }}
    </HeadlessPopover>
  );
};

Popover.Trigger = ({ children }: { children: React.ReactNode }) => <>{children}</>;
Popover.Content = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export default Popover;
