// Function returns animation killer function which invoked when when component change its visibility
export type AnimationEnterCallback = (el: HTMLElement) => null | (() => void);
export type AnimationExitCallback = (el: HTMLElement, done: () => void) => null | (() => void);
