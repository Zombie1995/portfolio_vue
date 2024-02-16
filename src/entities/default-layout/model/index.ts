import { createEvent, createStore } from 'effector';

type initialStoreType = {
  activeSection: number;
};

const initialStore: initialStoreType = {
  activeSection: 0,
};

export const setActiveSection = createEvent<number>();

export const $headerStore = createStore(initialStore).on(
  setActiveSection,
  (state, activeSection) => ({
    ...state,
    activeSection: activeSection,
  }),
);
