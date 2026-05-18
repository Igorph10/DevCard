const PRIMARY_COLOR = "#2530c7"
const PRIMARY_FOREGROUND_COLOR = "#FFFFFF"
const SUBTITLE_COLOR = "#6B7280"
const HEADING_COLOR = "#2d2d30"
const BORDER_INPUT_COLOR = "#afafb4"
const ERROR_COLOR = "#b61047"
const BORDER_RADIUS_MD = 8
const BORDER_RADIUS_LG = 12
const BORDER_RADIUS_XL = 16
const BORDER_RADIUS_XXL = 20

export const THEME = {
    colors: {
        primary: PRIMARY_COLOR,
        primary_foreground: PRIMARY_FOREGROUND_COLOR,
        subtitle: SUBTITLE_COLOR,
        heading: HEADING_COLOR,
        error: ERROR_COLOR,
        border: {
            input: BORDER_INPUT_COLOR,
        }
    },
    border: {
        radius: {
            md: BORDER_RADIUS_MD,
            lg: BORDER_RADIUS_LG,
            xl: BORDER_RADIUS_XL,
            xxl: BORDER_RADIUS_XXL,
        }
    },
    text: {
        heading: {
            h1: 48,
            h2: 32,
            h3: 28,
            h4: 24,
        },
    }
}