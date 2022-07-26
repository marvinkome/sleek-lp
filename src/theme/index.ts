import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: `Clash Display, -apple-system, BlinkMacSystemFont`,
    heading: `Clash Display, -apple-system, BlinkMacSystemFont`,
    fontDisplay: 'optional',
    webkitFontSmoothing: 'antialiased'
  },

  colors: {
    gold: {
      100: '#F7F5F3'
    },
    orange: {
      100: '#F83801'
    },
    lemon: {
      100: '#E1F664'
    },
    blue: {
      100: '#3384F5'
    },
    dark: {
      100: '#000'
    },
    white: {
      100: '#FFFFFF'
    },
    green: {
      100: '#286218'
    },
    yellow: {
      100: '#FECA57'
    }
    // brand:{
    //     50:'',
    //     100:'',
    // }
  },

  styles: {
    global: {
      body: {
        bgColor: '#FBFCFE',
        webkitFontSmoothing: 'antialiased'
      },
      '::selection': {
        background: 'rgba(254, 57, 1, 12%)' /* WebKit/Blink Browsers */
      }
    }
  },

  components: {
    Link: {
      baseStyle: {
        borderBottom: 'none',
        _hover: {
          textDecoration: 'none',
          transform: 'scale(1.01)'
        },
        _focus: {
          boxShadow: 'none !important'
        }
      }
    },

    Button: {
      variants: {
        primary: {
          backgroundColor: 'dark.100',
          color: 'white.100',
          rounded: 'full',
          fontFamily: "'SF Pro Text', '-apple-system'",
          fontSize: '16px',
          fontWeight: '500',
          _hover: {
            transform: 'scale(1.01)'
          }
        },
        secondary: {
          backgroundColor: 'transparent',
          color: 'dark.100',
          rounded: 'full',
          fontFamily: "'SF Pro Text', '-apple-system'",
          fontSize: '16px',
          fontWeight: '500',
          _hover: {
            transform: 'scale(1.01)'
          }
        }
      }
    }
  }
})

export default theme
