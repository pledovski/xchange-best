const theme = 'dark';
//const theme = 'light';
export const lightTheme = theme === 'light';

export const color1 = lightTheme ? 'white' : '#15cda8';
export const color2 = lightTheme ? 'white' : '#010e2c';
export const color3 = lightTheme ? '#09f010' : '#18191D';

export const color4 = '#1D2024';
export const color5 = '#099a97';

if (lightTheme) {
  document.body.style.background = '#e1eaee';
  document.body.style.color = '#061a44';
}

export const lightGreenBackground = `background-color: ${color1}`;
export const backgroundColor2 = `background-color: ${color2};`;
export const purpleBackgroundColor = `background-color: ${color3};`;


export const darkTileBackground = `background-color: ${color4}`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${lightTheme ? '#a9b6ff' : '#121d5b'}`;
export const greenBoxShadow = `box-shadow: 0px 0px 2px 1px #099a97`;
export const greenBoxShadow2 = `box-shadow: 0px 0px 4px 2px #099a97`;
export const redBoxShadow = `box-shadow: 0px 0px 2px 1px #C11E0F`;

export const fontSizeBig = 'font-size: 2em';
export const fontSize1 = 'font-size: 1.5em;';
export const fontSize2 = 'font-size: 1.25em';
export const fontSize3 = 'font-size: 1em';

export const textAlignCenter = 'text-align: center;';