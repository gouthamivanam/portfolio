export const setImage = (route) => {
    return new URL(`/assets/${route}`, import.meta.url).href;
};