
     */
    callback?: (instance: LaddaButton) => void,
}

/**
 * Creates a new instance of Ladda which wraps the target button element.
 */
export function create(button: HTMLButtonElement): LaddaButton;

/**
 * Binds the target buttons to automatically enter the loading state when clicked.
 * @param target Either an HTML element or a CSS selector.
 */
export function bind(target: HTMLElement | string, options?: BindOptions): void;

/**
 * Stops all current loading animations.
 */
export function stopAll(): void;
