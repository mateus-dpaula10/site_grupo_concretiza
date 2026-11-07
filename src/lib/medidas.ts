// Converte uma medida tirada do original em 1440px para vw (o Wix Studio escala o layout
// proporcionalmente à largura da tela a partir do tablet).
export const v = (px: number) => `${(px / 14.4).toFixed(4)}vw`;
