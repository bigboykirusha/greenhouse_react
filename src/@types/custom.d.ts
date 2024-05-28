declare module '*.svg';
declare module '*.pdf';
declare module '*.png';
declare module '*.jpg';
declare module '*.webp';
declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}